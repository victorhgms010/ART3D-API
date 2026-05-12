import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const canais = [
  { titulo: 'WhatsApp', detalhe: '(32) 99999-0000', acao: 'Falar agora' },
  { titulo: 'Instagram', detalhe: '@art3d', acao: 'Ver perfil' },
  { titulo: 'E-mail', detalhe: 'art3d@gmail.com', acao: 'Enviar mensagem' },
];

const diferenciais = [
  'Atendimento próximo para entender sua ideia',
  'Orçamentos rápidos para peças personalizadas',
  'Suporte para brindes, decoração e utilidades 3D',
];

export default function Contato() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.badge}>Contato</Text>
        <Text style={styles.title}>Vamos transformar sua ideia em uma peça 3D incrível.</Text>
        <Text style={styles.subtitle}>
          Fale com a gente para solicitar orçamento, personalizar produtos e tirar dúvidas sobre produção.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Canais de atendimento</Text>
      {canais.map((item) => (
        <View key={item.titulo} style={styles.contactCard}>
          <View>
            <Text style={styles.contactTitle}>{item.titulo}</Text>
            <Text style={styles.contactDetail}>{item.detalhe}</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>{item.acao}</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.quoteCard}>
        <Text style={styles.quoteTitle}>Peça seu orçamento personalizado</Text>
        <Text style={styles.quoteText}>
          Nos envie a ideia, nome, tema ou tipo de peça que você deseja. Podemos produzir itens únicos
          para presentes, lembranças, organização e decoração.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Por que falar com a gente?</Text>
      {diferenciais.map((item) => (
        <View key={item} style={styles.infoCard}>
          <View style={styles.dot} />
          <Text style={styles.infoText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
