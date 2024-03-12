import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Components/buttons/CustomButton';
import type {StatusBarStyle} from 'react-native';
import LogIn from './screens/LogIn';
import SignInEmail from './screens/SignInEmail';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar     
        hidden={false}/>
      <LogIn/>
      {/* <SignInEmail/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  sign: {
    // flex: 1,
    position: 'absolute',
    top: 16,
    right: 16,
    fontFamily: 'Comfortaa',
    fontSize: 16,
    lineHeight: 18,

  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
   
  },
  logo: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Comfortaa',
    fontSize: 36,
  },
  btns: {
    paddingHorizontal: 45,
    flex: 1,
    justifyContent: 'flex-start',
  },
  btns_group: {
    flex: 1,
    gap: 30,
    // alignItems: 'center',
  }

});
