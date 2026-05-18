import { Platform } from 'react-native';
import { products as fallbackProducts, Product } from '../data/products';

export type User = { id: number; nome: string; email: string };
export type PaymentMethod = 'Pix' | 'Cartão de crédito' | 'Cartão de débito';
export type CartItem = { id: number; productId: number; nome: string; preco: number; categoria: string; imageKey?: Product['imageKey']; quantidade: number };
export type CartSummary = { items: CartItem[]; quantidadeItens: number; total: string; totalNumber: number };
export type OrderResponse = { message: string; order: { id: number; status: string; message: string; customer: { nome: string; email?: string; telefone?: string }; payment: { method: PaymentMethod; status: string; details: string }; items: CartItem[]; quantidadeItens: number; total: string; createdAt: string } };

const API_BASE_URL = Platform.select({ android: 'http://10.0.2.2:3333/api', ios: 'http://localhost:3333/api', default: 'http://localhost:3333/api' });

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, { headers: { 'Content-Type': 'application/json' }, ...options });
  if (!response.ok) { const errorBody = await response.json().catch(() => null); throw new Error(errorBody?.message || 'Erro ao buscar dados da API.'); }
  return response.json();
}

export async function registerUser(nome: string, email: string, senha: string) { return request<{ message: string; user: User }>('/auth/register', { method: 'POST', body: JSON.stringify({ nome, email, senha }) }); }
export async function loginUser(email: string, senha: string) { return request<{ message: string; user: User }>('/auth/login', { method: 'POST', body: JSON.stringify({ email, senha }) }); }
export async function fetchProducts(): Promise<Product[]> { try { return await request<Product[]>('/products'); } catch (error) { console.warn('API indisponível. Usando produtos locais.', error); return fallbackProducts; } }
export async function fetchCart(): Promise<CartSummary> { return request<CartSummary>('/cart'); }
export async function addProductToCart(productId: number | undefined, quantidade = 1) { return request<{ message: string; cart: CartSummary }>('/cart/items', { method: 'POST', body: JSON.stringify({ productId, quantidade }) }); }
export async function updateCartItem(productId: number, quantidade: number) { return request<{ message: string; cart: CartSummary }>(`/cart/items/${productId}`, { method: 'PATCH', body: JSON.stringify({ quantidade }) }); }
export async function removeCartItem(productId: number) { return request<{ message: string; cart: CartSummary }>(`/cart/items/${productId}`, { method: 'DELETE' }); }
export async function checkoutCart(user: User | null, paymentMethod: PaymentMethod, paymentDetails?: string) { return request<OrderResponse>('/orders/checkout', { method: 'POST', body: JSON.stringify({ customer: { nome: user?.nome || 'Cliente App Art3D', email: user?.email || 'Não informado' }, payment: { method: paymentMethod, details: paymentDetails || (paymentMethod === 'Pix' ? 'QR Code Pix simulado gerado pelo backend.' : 'Pagamento com cartão simulado pelo backend.') } }) }); }
export async function createProductInterest(productId: number | undefined) { return addProductToCart(productId, 1); }
