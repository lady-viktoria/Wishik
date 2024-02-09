import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const InputEmail = () => {
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input1}
        onChangeText={setEmail}
        value={email}
        placeholder="email adress"
        keyboardType='email-address'
        // selectTextOnFocus={false}
        // selectionColor={'red'}
        // underlineColorAndroid="transparent"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input1: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
  },
});

export default InputEmail;