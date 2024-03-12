import React, { FC } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

interface PropTypes {
    onPress: () => void;
    text: string;
    active: boolean;
    flexVal: number;
}

const OwnerButton: FC<PropTypes> = ({ onPress, text, active, flexVal }) => {
  return (
    <Pressable onPress={onPress} style={[styles.buttonContainer, { flex: flexVal}]}>
      
      <View style={active ? styles.buttonPressed : styles.buttonContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
  },
  buttonContent: {
    paddingVertical: 5,
    paddingHorizontal: 18,
    color: 'white',
    alignItems: 'center',
    // borderRightWidth: 1,
    // borderLeftWidth: 1,
  },
  buttonPressed: {
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 3,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    color: '#rgba(0, 0, 0, 1)',
    textAlign: 'center',
    lineHeight: 22,
    letterSpacing: 0
  },
});

export default OwnerButton;