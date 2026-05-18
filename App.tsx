import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import QuemSomos from './src/screens/QuemSomos';
import Catalogo from './src/screens/Catalogo';
import Contato from './src/screens/Contato';
import Carrinho from './src/screens/Carrinho';
import Localizacao from './src/screens/Localizacao';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import { colors } from './src/theme/colors';
import { User } from './src/services/api';

const Drawer = createDrawerNavigator();
const AppTheme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: colors.background, card: colors.surface, text: colors.primary, border: colors.border, primary: colors.primaryStrong } };

function LogoTitle({ user }: { user: User | null }) {
  return <View style={styles.logoContainer}>{user && <Text style={styles.userText}>Olá, {user.nome}</Text>}<Image style={styles.logo} source={require('./assets/store-front.png')} resizeMode="contain" /></View>;
}

function DrawerIcon({ icon, color }: { icon: string; color: string }) {
  return <Text style={[styles.drawerIcon, { color }]}>{icon}</Text>;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  if (showSplash) return <Splash onFinish={() => setShowSplash(false)} />;
  if (!user) return <Login onLogin={setUser} />;
  return (
    <NavigationContainer theme={AppTheme}>
      <Drawer.Navigator screenOptions={{ headerShown: true, headerRight: () => <LogoTitle user={user} />, headerStyle: { backgroundColor: colors.primaryStrong, height: 96, elevation: 0, shadowOpacity: 0 }, headerTintColor: colors.white, headerTitleStyle: { color: colors.white, fontWeight: '700' }, drawerStyle: { backgroundColor: '#F7FAFD' }, drawerActiveBackgroundColor: '#DDEFFC', drawerActiveTintColor: colors.primaryStrong, drawerInactiveTintColor: '#526376', drawerLabelStyle: { fontWeight: '700' }, sceneStyle: { backgroundColor: colors.background } }}>
        <Drawer.Screen name="Início" component={Home} options={{ title: 'Início', drawerIcon: ({ color }) => <DrawerIcon icon="⌂" color={color} /> }} />
        <Drawer.Screen name="Nossa História" component={QuemSomos} options={{ title: 'Nossa História', drawerIcon: ({ color }) => <DrawerIcon icon="▣" color={color} /> }} />
        <Drawer.Screen name="Produtos 3D" component={Catalogo} options={{ title: 'Produtos 3D', drawerIcon: ({ color }) => <DrawerIcon icon="◇" color={color} /> }} />
        <Drawer.Screen name="Carrinho" options={{ title: 'Carrinho', drawerIcon: ({ color }) => <DrawerIcon icon="◉" color={color} /> }}>{(props) => <Carrinho {...props} user={user} />}</Drawer.Screen>
        <Drawer.Screen name="Localização" component={Localizacao} options={{ title: 'Localização', drawerIcon: ({ color }) => <DrawerIcon icon="⌖" color={color} /> }} />
        <Drawer.Screen name="Atendimento" component={Contato} options={{ title: 'Atendimento', drawerIcon: ({ color }) => <DrawerIcon icon="✉" color={color} /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({ logoContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 12, gap: 8 }, logo: { width: 36, height: 36 }, userText: { color: colors.white, fontWeight: '800', maxWidth: 160 }, drawerIcon: { fontSize: 20, fontWeight: '900', width: 24, textAlign: 'center' } });
