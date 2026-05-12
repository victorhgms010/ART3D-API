let products = [
  { id: 1, nome: 'Chaveiro Personalizado', preco: 'R$ 12,90', descricao: 'Chaveiro sob medida para nomes, empresas, brindes e lembranças.', categoria: 'Personalizados', destaque: true, imageKey: 'chaveiro' },
  { id: 2, nome: 'Ímã de Geladeira 3D', preco: 'R$ 14,90', descricao: 'Ímã decorativo para geladeira com acabamento em impressão 3D.', categoria: 'Decoração', destaque: true, imageKey: 'ima' },
  { id: 3, nome: 'Mini Vaso Decorativo', preco: 'R$ 24,90', descricao: 'Vaso moderno para mesa, escritório, quarto ou ambiente corporativo.', categoria: 'Casa', destaque: false, imageKey: 'vaso' },
  { id: 4, nome: 'Suporte para Celular', preco: 'R$ 29,90', descricao: 'Suporte resistente com design minimalista para mesa e setup.', categoria: 'Utilidades', destaque: true, imageKey: 'suporte-celular' },
  { id: 5, nome: 'Nome 3D para Mesa', preco: 'R$ 39,90', descricao: 'Peça personalizada para decoração, eventos, loja ou escritório.', categoria: 'Personalizados', destaque: true, imageKey: 'nome-3d' },
  { id: 6, nome: 'Organizador de Cabos', preco: 'R$ 18,90', descricao: 'Acessório prático para deixar fios, carregadores e setup organizados.', categoria: 'Utilidades', destaque: false, imageKey: 'cabos' },
  { id: 7, nome: 'Luminária Lunar 3D', preco: 'R$ 89,90', descricao: 'Luminária decorativa com visual premium para quarto ou escritório.', categoria: 'Decoração', destaque: false, imageKey: 'luminaria' },
  { id: 8, nome: 'Suporte para Controle', preco: 'R$ 39,90', descricao: 'Organizador para controle gamer, TV ou acessórios do setup.', categoria: 'Setup', destaque: false, imageKey: 'controle' },
];
module.exports = { getProducts: () => products, setProducts: (newProducts) => { products = newProducts; } };
