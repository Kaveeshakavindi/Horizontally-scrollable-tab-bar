// CustomButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ToggleButton = ({ onPress, title }) => {
const {theme} = useTheme();

  return (
    <TouchableOpacity style={[styles.button,{backgroundColor: theme.toggleButtonColor}]} onPress={onPress}>
    <Icon name={theme.toggleIcon} size={15} color={theme.iconColor} style={styles.icon} />
      <Text style={[styles.buttonText, {color:theme.toggleButtonText}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: windowWidth*0.3,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Product-Sans-Regular'
  },
  icon:{
    paddingRight: 10
  }
});

export default ToggleButton;

