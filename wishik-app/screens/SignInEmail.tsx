import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CustomButton from '../Components/buttons/CustomButton';
import type {StatusBarStyle} from 'react-native';
import InputEmail from '../Components/buttons/InputEmail';
import React from 'react';

export default function SignInEmail() {
  return (
    <View style={styles.container}>
      <StatusBar     
        hidden={false}/>
      <Text style={styles.sign}>Sign in</Text>

      <View style={styles.column}>
        <InputEmail/>
        <CustomButton
            onPress={() => console.log('Кнопка нажата')}
            text="Sign in"
        />
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  sign: {
    position: 'absolute',
    top: 71,
    alignSelf: 'center',
    fontFamily: 'Comfortaa',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 27,
  },
  column: {
    paddingHorizontal: 46,
    flex: 1,
    flexDirection: 'column',
    gap: 34,
    justifyContent: 'center', 
   
  },
  
});
