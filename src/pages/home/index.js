import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { useRef, useState } from 'react';
import ModalPassword from '../../components/modal';

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function Home() {
  const [charCount, setCharCount] = useState(10)
  const [password, setPassword] = useState("")
  const [viewModal, setViewModal] = useState(false);

  const passwordGenerate = () => {
    var pass = '';
    for (i = 0; i < charCount; i++) {
      pass += charset.at(0|(Math.random() * (charset.length - 1)))
    }

    setPassword(pass);
    setViewModal(true)
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')}/>
      <View style={styles.area}>
        <Text style={styles.title}>
          <Text style={{fontSize: 32, fontWeight: '700', color: "#392de9"}}>{charCount}</Text>
          caracteres
        </Text>
        <Slider 
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#392de9"
          onValueChange={val => setCharCount(0|val)}
          value={10}
          /* thumbTintColor="#392de9" */
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={passwordGenerate}>
        <Text style={styles.buttonText}>
          Gerar Senha
        </Text>
      </TouchableOpacity>
      <Modal visible={viewModal} animationType='fade' transparent={true}>
        <ModalPassword password={password} modalClose={() => setViewModal(false)} />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  },
  logo: {
    /* marginBottom: 32 */
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 16
  },
  area: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    gap: 16
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    paddingVertical: 16,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600'
  }
});
