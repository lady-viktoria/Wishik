import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import type {StatusBarStyle} from 'react-native';
import React, { useState } from 'react';
import ButtonNav from '../Components/buttons/ButtonNav';
import { Link } from 'expo-router';
import Add from '../Components/buttons/Add';
import Home from './Home';

const homePic = require('../icons/home.png');
const searchPic = require('../icons/search.png');
const plusPic = require('../icons/plus.png');
const commentPic = require('../icons/comment.png');
const personPic = require('../icons/person.png');

export default function Main() {
  const [activeButton, setActiveButton] = useState<string>('home');
  const handleButtonPress = (buttonId: string) => {
    setActiveButton(buttonId);
  }
  return (
    <View style={styles.container}>
      <View>
        {activeButton === 'home' ? <Home/> : null}
        {activeButton === 'search' ? <View> Search </View> : null}
        {activeButton === 'comment' ? <View> comment </View> : null}
        {activeButton === 'person' ? <View> person </View> : null}
      </View>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <ButtonNav
                onPress={() => handleButtonPress('home')}
                iconURL={homePic}
                active={activeButton === 'home'}
              />
          <ButtonNav
                onPress={() => handleButtonPress('search')}
                iconURL={searchPic}
                active={activeButton === 'search'}
              />
          <Add
                onPress={() => {}}
                iconURL={plusPic}
                active={activeButton === ''}
              />
          <ButtonNav
                onPress={() => handleButtonPress('comment')}
                iconURL={commentPic}
                active={activeButton === 'comment'}
              />
          <ButtonNav
                onPress={() => handleButtonPress('person')}
                iconURL={personPic}
                active={activeButton === 'person'}
              />
        </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 9,
    paddingHorizontal: 11,
    paddingBottom: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',


    // display: 'flex',
    // flex: 1, 
    // marginHorizontal: 0,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
});
