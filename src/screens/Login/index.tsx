import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginUser, registerUser, User } from '../../services/api';
import { styles } from './styles';

export default function Login({ onLogin }: { onLogin: (user: User) => void }) {
  const [isRegister, setIsRegister] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    if ((isRegister && !nome.trim()) || !email.trim() || !senha.trim()) { Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.'); return; }
    setLoading(true);
    try { const response = isRegister ? await registerUser(nome.trim(), email.trim(), senha.trim()) : await loginUser(email.trim(), senha.trim()); onLogin(response.user); }
    catch (error: any) { Alert.alert('Erro', error?.message || 'Não foi possível autenticar. Verifique o backend.'); }
    finally { setLoading(false); }
  }
  return <View style={styles.screen}><View style={styles.card}><Image source={require('../../../assets/store-front.png')} style={styles.logo} resizeMode="contain" /><Text style={styles.title}>Bem-vindo à Art3D</Text><Text style={styles.subtitle}>{isRegister ? 'Crie sua conta para comprar produtos 3D.' : 'Entre para continuar sua compra.'}</Text>{isRegister && <TextInput style={styles.input} placeholder="Seu nome" value={nome} onChangeText={setNome} />}<TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" /><TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry /><TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}><Text style={styles.buttonText}>{loading ? 'Carregando...' : isRegister ? 'Cadastrar e entrar' : 'Entrar'}</Text></TouchableOpacity><TouchableOpacity onPress={() => setIsRegister(!isRegister)}><Text style={styles.switchText}>{isRegister ? 'Já tenho conta. Fazer login' : 'Não tenho conta. Cadastrar'}</Text></TouchableOpacity></View></View>;
}
