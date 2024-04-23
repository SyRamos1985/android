import React from 'react';
import {text, View, TextInput, StyleSheet, Image, Button, Touchable} from 'react-native';
import ListagemDosFornecedores from './src/componenteAPP/ListagemDosFornecedores';

export default function Cadastro() {

    function handlePesquisar() {
      console.log("Consultar lista de Fornecedores")
    }
  
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [produto, setProduto] = useState('');
    const [imagem, setImagem] = useState('');
  
    const handleCadastroDosFornecedores = () => {
      
      if (nome && email && senha) {
        Alert.alert('Cadastro realizado com sucesso!');
      } else {
        Alert.alert('Ops! Algo deu errado. Por favor, tente novamente.');
      }
      const handlePesquisar = () => {
        navigation.navigate('Pesquisar', { nome });
      };
    };
  
    return (
      <View style={styles.container}>
        <Image style={{width: 150, height: 150}}
        source={require("./src/componenteAPP/imagem/catalogo.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={text => setSenha(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Produto"
          value={produto}
          onChangeText={text => setProduto(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Imagem"
          value={imagem}
          onChangeText={Image => setImagem()}
        />
  
        <Button title="Cadastrar" onPress={handleCadastro} />
  
      <TouchableOpacity onPress={handleConsulta}>
        <Text style={{marginTop:150}}>Consultar</Text>
      </TouchableOpacity>
  
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      width: '100%',
      marginBottom: 10,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
  });