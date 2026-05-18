import React, { useCallback, useMemo, useState } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { productImages } from '../../data/products';
import { CartSummary, checkoutCart, fetchCart, PaymentMethod, removeCartItem, updateCartItem, User } from '../../services/api';
import { formatCurrency } from '../../utils/format';
import { styles } from './styles';

const emptyCart: CartSummary = { items: [], quantidadeItens: 0, total: 'R$ 0,00', totalNumber: 0 };
const paymentMethods: Array<{ label: PaymentMethod; icon: string; hint: string }> = [
  { label: 'Pix', icon: '▦', hint: 'Geração simulada de QR Code Pix no backend.' },
  { label: 'Cartão de crédito', icon: '▣', hint: 'Dados mascarados e validação básica antes do envio.' },
  { label: 'Cartão de débito', icon: '□', hint: 'Fluxo simulado com conferência de dados obrigatórios.' },
];

export default function Carrinho({ user }: { user: User | null }) {
  const [cart, setCart] = useState<CartSummary>(emptyCart);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Pix');
  const [deliveryMode, setDeliveryMode] = useState<'Retirada na loja' | 'Entrega combinada'>('Retirada na loja');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadCart() {
    try {
      const apiCart = await fetchCart();
      setCart(apiCart);
    } catch (error) {
      console.warn('Erro ao carregar carrinho:', error);
    }
  }

  useFocusEffect(useCallback(() => { loadCart(); }, []));

  const selectedPayment = useMemo(() => paymentMethods.find((method) => method.label === paymentMethod), [paymentMethod]);

  async function handleChangeQuantity(productId: number, quantidade: number) {
    try {
      const response = await updateCartItem(productId, quantidade);
      setCart(response.cart);
    } catch {
      Alert.alert('Erro', 'Não foi possível atualizar o carrinho.');
    }
  }

  async function handleRemove(productId: number) {
    try {
      const response = await removeCartItem(productId);
      setCart(response.cart);
    } catch {
      Alert.alert('Erro', 'Não foi possível remover o produto.');
    }
  }

  function validatePayment() {
    if (paymentMethod === 'Pix') return true;

    const cleanCardNumber = cardNumber.replace(/\D/g, '');
    const cleanCvv = cardCvv.replace(/\D/g, '');

    if (!cardHolder.trim() || cleanCardNumber.length < 12 || !cardExpiry.trim() || cleanCvv.length < 3) {
      Alert.alert('Pagamento incompleto', 'Preencha nome, número do cartão, validade e CVV para continuar.');
      return false;
    }

    return true;
  }

  async function handleCheckout() {
    if (!cart.items.length) {
      Alert.alert('Carrinho vazio', 'Adicione pelo menos um produto antes de finalizar.');
      return;
    }

    if (!validatePayment()) return;

    setLoading(true);
    try {
      const paymentDetails = paymentMethod === 'Pix'
        ? `Pix simulado. ${deliveryMode}. ${orderNote || 'Sem observações.'}`
        : `${paymentMethod} simulado aprovado. Final ${cardNumber.replace(/\D/g, '').slice(-4)}. ${deliveryMode}. ${orderNote || 'Sem observações.'}`;
      const response = await checkoutCart(user, paymentMethod, paymentDetails);

      setCart(emptyCart);
      setCardHolder('');
      setCardNumber('');
      setCardExpiry('');
      setCardCvv('');
      setOrderNote('');
      Alert.alert('Compra finalizada', `${response.order.message}\nCliente: ${response.order.customer.nome}\nPagamento: ${response.order.payment.method}\nPedido: ${response.order.id}\nTotal: ${response.order.total}`);
    } catch {
      Alert.alert('Erro', 'Não foi possível finalizar a compra. Verifique o backend.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>✓</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Checkout Art3D</Text>
          <Text style={styles.subtitle}>Revise seus itens, escolha a entrega e finalize com pagamento simulado seguro.</Text>
        </View>
      </View>

      {!cart.items.length ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>○</Text>
          <Text style={styles.emptyTitle}>Seu carrinho está vazio</Text>
          <Text style={styles.emptyText}>Volte ao catálogo e adicione um produto de interesse.</Text>
        </View>
      ) : cart.items.map((item) => (
        <View key={item.productId} style={styles.itemCard}>
          {item.imageKey && <Image source={productImages[item.imageKey]} style={styles.itemPhoto} resizeMode="cover" />}
          <View style={styles.itemInfo}>
            <Text style={styles.category}>{item.categoria}</Text>
            <Text style={styles.itemName}>{item.nome}</Text>
            <Text style={styles.price}>{formatCurrency(item.preco)}</Text>
            <Text style={styles.quantity}>Subtotal: {formatCurrency(item.preco * item.quantidade)}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleChangeQuantity(item.productId, item.quantidade - 1)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{item.quantidade}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => handleChangeQuantity(item.productId, item.quantidade + 1)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.productId)}>
              <Text style={styles.removeIcon}>×</Text>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.controlCard}>
        <Text style={styles.sectionTitle}>Entrega</Text>
        {(['Retirada na loja', 'Entrega combinada'] as const).map((mode) => (
          <TouchableOpacity key={mode} style={[styles.choiceOption, deliveryMode === mode && styles.choiceOptionActive]} onPress={() => setDeliveryMode(mode)}>
            <Text style={[styles.choiceIcon, deliveryMode === mode && styles.choiceIconActive]}>{mode === 'Retirada na loja' ? '⌂' : '→'}</Text>
            <Text style={[styles.choiceText, deliveryMode === mode && styles.choiceTextActive]}>{mode}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.paymentCard}>
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Pagamento</Text>
          <View style={styles.secureBadge}>
            <Text style={styles.secureIcon}>✓</Text>
            <Text style={styles.secureText}>Ambiente simulado seguro</Text>
          </View>
        </View>

        {paymentMethods.map((method) => (
          <TouchableOpacity key={method.label} style={[styles.paymentOption, paymentMethod === method.label && styles.paymentOptionActive]} onPress={() => setPaymentMethod(method.label)}>
            <Text style={[styles.paymentIcon, paymentMethod === method.label && styles.paymentIconActive]}>{method.icon}</Text>
            <View style={styles.paymentCopy}>
              <Text style={[styles.paymentText, paymentMethod === method.label && styles.paymentTextActive]}>{method.label}</Text>
              <Text style={[styles.paymentHint, paymentMethod === method.label && styles.paymentHintActive]}>{method.hint}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {paymentMethod !== 'Pix' && (
          <View style={styles.cardFields}>
            <TextInput style={styles.input} placeholder="Nome impresso no cartão" value={cardHolder} onChangeText={setCardHolder} autoCapitalize="words" />
            <TextInput style={styles.input} placeholder="Número do cartão" value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" maxLength={19} />
            <View style={styles.inputRow}>
              <TextInput style={[styles.input, styles.inputHalf]} placeholder="Validade MM/AA" value={cardExpiry} onChangeText={setCardExpiry} maxLength={5} />
              <TextInput style={[styles.input, styles.inputHalf]} placeholder="CVV" value={cardCvv} onChangeText={setCardCvv} keyboardType="number-pad" secureTextEntry maxLength={4} />
            </View>
          </View>
        )}

        <TextInput style={[styles.input, styles.noteInput]} placeholder="Observações do pedido" value={orderNote} onChangeText={setOrderNote} multiline />
        <Text style={styles.paymentHint}>{selectedPayment?.hint}</Text>
      </View>

      <View style={styles.totalCard}>
        <Text style={styles.totalLabel}>Total do pedido</Text>
        <Text style={styles.totalValue}>{cart.total}</Text>
        <Text style={styles.totalItems}>{cart.quantidadeItens} item(ns) no carrinho</Text>
      </View>

      <TouchableOpacity style={[styles.checkoutButton, (!cart.items.length || loading) && styles.checkoutButtonDisabled]} disabled={!cart.items.length || loading} onPress={handleCheckout}>
        <Text style={styles.checkoutIcon}>✓</Text>
        <Text style={styles.checkoutButtonText}>{loading ? 'Finalizando...' : 'Finalizar pedido com segurança'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
