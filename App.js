import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const handleButtonPress = () => {
    console.log('bonjour');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Écran1</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ceci est une zone de texte"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text>Bouton</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    opacity: 0.8,
    backgroundColor: '#ff5656',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    marginTop: 20,
    borderRadius: 10,
    opacity: 0.8,
    backgroundColor: '#add8e6',
    height: 50,
    width: 300,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
});
