import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

const pilares = [
  'Elevar o ramo da impressão 3D com criatividade, qualidade e proximidade com o cliente.',
  'Transformar ideias em produtos úteis, decorativos e personalizados para diferentes ocasiões.',
  'Mostrar que a impressão 3D pode unir inovação, beleza e praticidade no dia a dia.',
];

export default function QuemSomos() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroBadge}>Quem somos</Text>
        <Text style={styles.heroTitle}>Queremos elevar o ramo da impressão 3D.</Text>
        <Text style={styles.heroText}>
          Nossa proposta é oferecer produtos criativos e bem pensados, mostrando que a impressão 3D
          pode ir muito além do comum. Trabalhamos para entregar peças que encantem, organizem,
          decorem e façam parte da rotina dos nossos clientes.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Nosso propósito</Text>
      {pilares.map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      ))}

      <View style={styles.footerCard}>
        <Text style={styles.footerTitle}>Nossa visão</Text>
        <Text style={styles.footerText}>
          Ser uma referência em produtos de impressão 3D, criando experiências modernas,
          acessíveis e interativas para quem busca algo único.
        </Text>
      </View>
    </ScrollView>
  );
}
