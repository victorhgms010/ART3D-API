import React, { useMemo, useState } from 'react';
import { Alert, Linking, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { styles } from './styles';

const STORE_LOCATION = {
  latitude: -21.3891,
  longitude: -42.6966,
  label: 'Art3D - Cataguases, MG',
  address: 'Cataguases, Minas Gerais',
};

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function calculateDistanceInKm(origin: Location.LocationObjectCoords) {
  const earthRadiusKm = 6371;
  const latitudeDistance = toRadians(STORE_LOCATION.latitude - origin.latitude);
  const longitudeDistance = toRadians(STORE_LOCATION.longitude - origin.longitude);

  const startLatitude = toRadians(origin.latitude);
  const endLatitude = toRadians(STORE_LOCATION.latitude);

  const distanceFactor = Math.sin(latitudeDistance / 2) ** 2
    + Math.cos(startLatitude) * Math.cos(endLatitude) * Math.sin(longitudeDistance / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(distanceFactor), Math.sqrt(1 - distanceFactor));
}

function formatCoordinate(value: number) {
  return value.toFixed(6).replace('.', ',');
}

export default function Localizacao() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'denied' | 'ready'>('idle');

  const distance = useMemo(() => {
    if (!location) return null;
    return calculateDistanceInKm(location.coords);
  }, [location]);

  async function handleRequestLocation() {
    setStatus('loading');

    const permission = await Location.requestForegroundPermissionsAsync();
    if (permission.status !== Location.PermissionStatus.GRANTED) {
      setStatus('denied');
      Alert.alert('Permissão necessária', 'Ative a localização para calcular a rota até o atendimento Art3D.');
      return;
    }

    try {
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setLocation(currentLocation);
      setStatus('ready');
    } catch {
      setStatus('idle');
      Alert.alert('Localização indisponível', 'Não foi possível obter sua posição agora. Tente novamente em alguns instantes.');
    }
  }

  function handleOpenMaps() {
    const destination = `${STORE_LOCATION.latitude},${STORE_LOCATION.longitude}`;
    const origin = location ? `${location.coords.latitude},${location.coords.longitude}` : undefined;
    const url = Platform.select({
      ios: `http://maps.apple.com/?daddr=${destination}${origin ? `&saddr=${origin}` : ''}`,
      default: `https://www.google.com/maps/dir/?api=1&destination=${destination}${origin ? `&origin=${origin}` : ''}`,
    });

    if (url) Linking.openURL(url);
  }

  const accuracy = location?.coords.accuracy ? `${Math.round(location.coords.accuracy)} m` : 'Aguardando leitura';
  const updatedAt = location ? new Date(location.timestamp).toLocaleString('pt-BR') : 'Ainda não consultado';

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.badge}>Geolocalização</Text>
        <Text style={styles.title}>Encontre o melhor caminho até o atendimento Art3D.</Text>
        <Text style={styles.subtitle}>
          Use sua localização atual para calcular distância aproximada, conferir precisão da leitura e abrir a rota no mapa.
        </Text>
      </View>

      <View style={styles.locationPanel}>
        <Text style={styles.panelLabel}>Sua posição</Text>
        <Text style={styles.coordinate}>
          {location ? `${formatCoordinate(location.coords.latitude)}, ${formatCoordinate(location.coords.longitude)}` : 'Toque no botão para localizar'}
        </Text>
        <View style={styles.metricsRow}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Precisão</Text>
            <Text style={styles.metricValue}>{accuracy}</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Distância</Text>
            <Text style={styles.metricValue}>{distance ? `${distance.toFixed(1).replace('.', ',')} km` : '--'}</Text>
          </View>
        </View>
        <Text style={styles.updatedText}>Última atualização: {updatedAt}</Text>
      </View>

      <View style={styles.storePanel}>
        <Text style={styles.panelLabel}>Destino</Text>
        <Text style={styles.storeName}>{STORE_LOCATION.label}</Text>
        <Text style={styles.storeAddress}>{STORE_LOCATION.address}</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleRequestLocation} disabled={status === 'loading'}>
        <Text style={styles.primaryButtonText}>{status === 'loading' ? 'Localizando...' : 'Usar minha localização'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.secondaryButton, !location && styles.secondaryButtonDisabled]} onPress={handleOpenMaps} disabled={!location}>
        <Text style={[styles.secondaryButtonText, !location && styles.secondaryButtonTextDisabled]}>Abrir rota no mapa</Text>
      </TouchableOpacity>

      {status === 'denied' && (
        <View style={styles.notice}>
          <Text style={styles.noticeText}>A permissão foi negada. Você pode liberar o acesso à localização nas configurações do aparelho.</Text>
        </View>
      )}
    </ScrollView>
  );
}
