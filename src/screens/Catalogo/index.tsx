import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Product, productImages } from '../../data/products';
import { addProductToCart, fetchProducts } from '../../services/api';
import { formatCurrency } from '../../utils/format';
import { styles } from './styles';

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { async function loadProducts() { const apiProducts = await fetchProducts(); setProducts(apiProducts); setLoading(false); } loadProducts(); }, []);
  const featured = products.filter((product) => product.destaque).slice(0, 4);

  async function handleInterest(product: Product) {
    try { const response = await addProductToCart(product.id, 1); Alert.alert('Produto adicionado', `${product.nome} foi enviado para o carrinho. Total atual: ${response.cart.total}`); }
    catch { Alert.alert('Erro', 'Não foi possível adicionar o produto ao carrinho. Verifique se o backend está rodando.'); }
  }

  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <View style={styles.topCard}><Text style={styles.topTitle}>Produtos profissionais Art3D</Text><Text style={styles.topText}>{loading ? 'Buscando produtos na API RESTful...' : 'Produtos com imagens carregados via fetch do backend Node.js.'}</Text></View>
    <Text style={styles.sectionTitle}>Destaques da loja</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>{featured.map((produto) => <View key={produto.id ?? produto.nome} style={styles.highlightCard}><Image source={productImages[produto.imageKey]} style={styles.highlightPhoto} resizeMode="cover" /><Text style={styles.productName}>{produto.nome}</Text><Text style={styles.productPrice}>{formatCurrency(produto.preco)}</Text><Text style={styles.productDescription}>{produto.descricao}</Text><TouchableOpacity style={styles.buyButton} onPress={() => handleInterest(produto)}><Text style={styles.buyButtonText}>Adicionar ao carrinho</Text></TouchableOpacity></View>)}</ScrollView>
    <Text style={styles.sectionTitle}>Todos os produtos</Text>
    {products.map((produto) => <View key={produto.id ?? produto.nome} style={styles.listCard}><Image source={productImages[produto.imageKey]} style={styles.listPhoto} resizeMode="cover" /><View style={styles.listContent}><Text style={styles.listCategory}>{produto.categoria}</Text><Text style={styles.listName}>{produto.nome}</Text><Text style={styles.listDescription}>{produto.descricao}</Text><View style={styles.listFooter}><Text style={styles.listPrice}>{formatCurrency(produto.preco)}</Text><TouchableOpacity style={styles.smallButton} onPress={() => handleInterest(produto)}><Text style={styles.smallButtonText}>Adicionar</Text></TouchableOpacity></View></View></View>)}
  </ScrollView>;
}
