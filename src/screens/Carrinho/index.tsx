import React, { useCallback, useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { productImages } from '../../data/products';
import { CartSummary, checkoutCart, fetchCart, PaymentMethod, removeCartItem, updateCartItem, User } from '../../services/api';
import { styles } from './styles';

const emptyCart: CartSummary = { items: [], quantidadeItens: 0, total: 'R$ 0,00', totalNumber: 0 };
const paymentMethods: PaymentMethod[] = ['Pix', 'Cartão de crédito', 'Cartão de débito'];

export default function Carrinho({ user }: { user: User | null }) {
  const [cart, setCart] = useState<CartSummary>(emptyCart);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Pix');
  const [loading, setLoading] = useState(false);

  async function loadCart() { try { const apiCart = await fetchCart(); setCart(apiCart); } catch (error) { console.warn('Erro ao carregar carrinho:', error); } }
  useFocusEffect(useCallback(() => { loadCart(); }, []));

  async function handleChangeQuantity(productId: number, quantidade: number) { try { const response = await updateCartItem(productId, quantidade); setCart(response.cart); } catch { Alert.alert('Erro', 'Não foi possível atualizar o carrinho.'); } }
  async function handleRemove(productId: number) { try { const response = await removeCartItem(productId); setCart(response.cart); } catch { Alert.alert('Erro', 'Não foi possível remover o produto.'); } }

  async function handleCheckout() {
    if (!cart.items.length) { Alert.alert('Carrinho vazio', 'Adicione pelo menos um produto antes de finalizar.'); return; }
    setLoading(true);
    try {
      const response = await checkoutCart(user, paymentMethod);
      setCart(emptyCart);
      Alert.alert('Compra finalizada', `${response.order.message}\nCliente: ${response.order.customer.nome}\nPagamento: ${response.order.payment.method}\nPedido: ${response.order.id}\nTotal: ${response.order.total}`);
    } catch { Alert.alert('Erro', 'Não foi possível finalizar a compra. Verifique o backend.'); }
    finally { setLoading(false); }
  }

  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <View style={styles.headerCard}><Text style={styles.title}>Carrinho de compras</Text><Text style={styles.subtitle}>Olá, {user?.nome}. Seus itens ficam visíveis no backend pela rota GET /api/cart.</Text></View>
    {!cart.items.length ? <View style={styles.emptyCard}><Text style={styles.emptyTitle}>Seu carrinho está vazio</Text><Text style={styles.emptyText}>Volte ao catálogo e adicione um produto de interesse.</Text></View> : cart.items.map((item) => <View key={item.productId} style={styles.itemCard}>{item.imageKey && <Image source={productImages[item.imageKey]} style={styles.itemPhoto} resizeMode="cover" />}<View style={styles.itemInfo}><Text style={styles.category}>{item.categoria}</Text><Text style={styles.itemName}>{item.nome}</Text><Text style={styles.price}>{item.preco}</Text><Text style={styles.quantity}>Quantidade: {item.quantidade}</Text></View><View style={styles.actions}><TouchableOpacity style={styles.quantityButton} onPress={() => handleChangeQuantity(item.productId, item.quantidade - 1)}><Text style={styles.quantityButtonText}>-</Text></TouchableOpacity><TouchableOpacity style={styles.quantityButton} onPress={() => handleChangeQuantity(item.productId, item.quantidade + 1)}><Text style={styles.quantityButtonText}>+</Text></TouchableOpacity><TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.productId)}><Text style={styles.removeButtonText}>Remover</Text></TouchableOpacity></View></View>)}
    <View style={styles.paymentCard}><Text style={styles.paymentTitle}>Forma de pagamento</Text>{paymentMethods.map((method) => <TouchableOpacity key={method} style={[styles.paymentOption, paymentMethod === method && styles.paymentOptionActive]} onPress={() => setPaymentMethod(method)}><Text style={[styles.paymentText, paymentMethod === method && styles.paymentTextActive]}>{method === 'Pix' ? '🔷' : '💳'} {method}</Text></TouchableOpacity>)}<Text style={styles.paymentHint}>{paymentMethod === 'Pix' ? 'O backend retorna um Pix simulado para teste.' : 'O backend retorna o cartão como pagamento simulado.'}</Text></View>
    <View style={styles.totalCard}><Text style={styles.totalLabel}>Total do pedido</Text><Text style={styles.totalValue}>{cart.total}</Text><Text style={styles.totalItems}>{cart.quantidadeItens} item(ns) no carrinho</Text></View>
    <TouchableOpacity style={[styles.checkoutButton, (!cart.items.length || loading) && styles.checkoutButtonDisabled]} disabled={!cart.items.length || loading} onPress={handleCheckout}><Text style={styles.checkoutButtonText}>{loading ? 'Finalizando...' : 'Finalizar compra'}</Text></TouchableOpacity>
  </ScrollView>;
}
