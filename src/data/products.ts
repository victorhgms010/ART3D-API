export type ProductImageKey = 'chaveiro' | 'ima' | 'vaso' | 'suporte-celular' | 'nome-3d' | 'cabos' | 'luminaria' | 'controle';
export type Product = { id?: number; nome: string; preco: string; descricao: string; categoria: string; destaque?: boolean; imageKey: ProductImageKey; };
export const productImages: Record<ProductImageKey, any> = {
  chaveiro: require('../../assets/products/chaveiro.png'), ima: require('../../assets/products/ima.png'), vaso: require('../../assets/products/vaso.png'),
  'suporte-celular': require('../../assets/products/suporte-celular.png'), 'nome-3d': require('../../assets/products/nome-3d.png'), cabos: require('../../assets/products/cabos.png'), luminaria: require('../../assets/products/luminaria.png'), controle: require('../../assets/products/controle.png'),
};
export const products: Product[] = [
  { id: 1, nome: 'Chaveiro Personalizado', preco: 'R$ 12,90', descricao: 'Chaveiro sob medida para nomes, empresas, brindes e lembranças.', categoria: 'Personalizados', destaque: true, imageKey: 'chaveiro' },
  { id: 2, nome: 'Ímã de Geladeira 3D', preco: 'R$ 14,90', descricao: 'Ímã decorativo para geladeira com acabamento em impressão 3D.', categoria: 'Decoração', destaque: true, imageKey: 'ima' },
  { id: 3, nome: 'Mini Vaso Decorativo', preco: 'R$ 24,90', descricao: 'Vaso moderno para mesa, escritório, quarto ou ambiente corporativo.', categoria: 'Casa', imageKey: 'vaso' },
  { id: 4, nome: 'Suporte para Celular', preco: 'R$ 29,90', descricao: 'Suporte resistente com design minimalista para mesa e setup.', categoria: 'Utilidades', destaque: true, imageKey: 'suporte-celular' },
  { id: 5, nome: 'Nome 3D para Mesa', preco: 'R$ 39,90', descricao: 'Peça personalizada para decoração, eventos, loja ou escritório.', categoria: 'Personalizados', destaque: true, imageKey: 'nome-3d' },
  { id: 6, nome: 'Organizador de Cabos', preco: 'R$ 18,90', descricao: 'Acessório prático para deixar fios, carregadores e setup organizados.', categoria: 'Utilidades', imageKey: 'cabos' },
  { id: 7, nome: 'Luminária Lunar 3D', preco: 'R$ 89,90', descricao: 'Luminária decorativa com visual premium para quarto ou escritório.', categoria: 'Decoração', imageKey: 'luminaria' },
  { id: 8, nome: 'Suporte para Controle', preco: 'R$ 39,90', descricao: 'Organizador para controle gamer, TV ou acessórios do setup.', categoria: 'Setup', imageKey: 'controle' },
];
export const homeCategories = ['Decoração', 'Personalizados', 'Utilidades', 'Brindes', 'Presentes'];
