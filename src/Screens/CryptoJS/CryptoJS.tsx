import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CryptoJS from "react-native-crypto-js";

export interface CryptoProps {
}

export interface CryptoState {
  encryptedText: string,
}

export default class CryptoComponent extends React.Component<CryptoProps, CryptoState> {
  constructor(props: CryptoProps) {
    super(props);
    this.state = {
      encryptedText: 'I am being encrypted!'
    };
  }


  encrytText = () => {
    let ciphertext = CryptoJS.AES.encrypt('I am being encrypted!', 'secret key 123').toString();
    this.setState({
      encryptedText: ciphertext
    })
  }

  decryptText = () => {
    let bytes  = CryptoJS.AES.decrypt(this.state.encryptedText, 'secret key 123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    this.setState({
      encryptedText:originalText
    })
  }

  public render() {
    return (
      <View style={styles.main} >
        <TouchableOpacity onPress={this.encrytText} >
          <Text style={styles.Text} >Encrypt Text</Text>
        </TouchableOpacity>
        <Text style={styles.Text} >{this.state.encryptedText}</Text>
        <TouchableOpacity onPress={this.decryptText} >
          <Text style={styles.Text} >Decrypt Text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: 22,
    color: 'green',
    margin: 20
  }
})
