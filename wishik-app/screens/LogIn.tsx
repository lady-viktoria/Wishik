import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../Components/buttons/CustomButton';
import { Link } from 'expo-router';

const emailPic = require('../icons/email-1.png');
const googlePic = require('../icons/google-1.png');
const applePic = require('../icons/apple.png');

export default function LogIn() {
  return (
    <View style={styles.container}>
      <StatusBar     
        hidden={false}/>
      <Text style={styles.sign}>Sign in</Text>

      <View style={styles.column}>
        <View style={styles.logo}>
          <Text style={styles.title}>Wishik</Text>
        </View>
        <View style={styles.btns}>
          <View style={styles.btns_group}>
          <Link href="/signin" asChild>
            <CustomButton
              onPress={() => console.log('Кнопка нажата')}
              iconURL={emailPic}
              text="Sign up with email"
            />
          </Link>
            <CustomButton
            onPress={() => console.log('Кнопка нажата')}
            iconURL={googlePic}
            text="Sign in with Google"
          />
            <CustomButton
            onPress={() => console.log('Кнопка нажата')}
            iconURL={applePic}
            text="Sign in with Apple"
          />
          </View>  
        </View>
      </View>
      
      
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
    alignSelf: 'center',
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
    paddingHorizontal: 46,
    flex: 1,
    justifyContent: 'flex-start',
  },
  btns_group: {
    flex: 1,
    gap: 30,
  }

});
