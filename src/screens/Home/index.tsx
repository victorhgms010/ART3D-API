import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { homeCategories, Product } from '../../data/products';
import { fetchProducts } from '../../services/api';
import { styles } from './styles';

const vantagens = [
  'Produção personalizada sob demanda',
  'Modelos criativos para presentes e decoração',
  'Acabamento pensado para encantar o cliente',
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const apiProducts = await fetchProducts();
      setProducts(apiProducts);
      setLoading(false);
    }

    loadProducts();
  }, []);

  const featuredProducts = products.filter((product) => product.destaque).slice(0, 4);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.heroCard}>
        <Text style={styles.badge}>Impressão 3D criativa</Text>
        <Text style={styles.heroTitle}>Transformamos ideias em produtos que chamam atenção.</Text>
        <Text style={styles.heroText}>
          Explore peças modernas, funcionais e personalizadas para presentear,
          decorar e surpreender.
        </Text>

        <View style={styles.heroActions}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Ver catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Peças em destaque</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <Text style={styles.sectionSubtitle}>Produtos pensados para diferentes momentos.</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
        {homeCategories.map((categoria) => (
          <View key={categoria} style={styles.categoryPill}>
            <Text style={styles.categoryText}>{categoria}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Mais procurados</Text>
        <Text style={styles.sectionSubtitle}>
          {loading ? 'Carregando produtos da API...' : 'Produtos carregados via fetch na API Node.js.'}
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
        {featuredProducts.map((produto) => (
          <View key={produto.id ?? produto.nome} style={styles.productCard}>
            <View style={styles.productImagePlaceholder}>
              <Text style={styles.productImageText}>3D</Text>
            </View>
            <Text style={styles.productName}>{produto.nome}</Text>
            <Text style={styles.productDescription}>{produto.descricao}</Text>
            <View style={styles.productFooter}>
              <Text style={styles.productPrice}>{produto.preco}</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>Quero esse</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Por que escolher nossa loja?</Text>
      </View>

      {vantagens.map((item) => (
        <View key={item} style={styles.infoCard}>
          <View style={styles.infoDot} />
          <Text style={styles.infoText}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
