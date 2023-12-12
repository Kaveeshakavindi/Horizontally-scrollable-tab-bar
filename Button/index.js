import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ label, icon, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected ? styles.selectedButton : null,
      ]}
      onPress={onPress}>
      <Icon name={icon} size={15} color="#19113b" style={styles.icon} />
      <Text style={[styles.buttonText, isSelected ? styles.selectedButtonText : null,]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150
  },
  selectedButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    
  },
  selectedButtonText: {
    color: '#19113b'
  },
  buttonText: {
    color: '#19113b',
    fontSize: 16,
  },
  icon: {
    paddingTop: 10
  }
});

export default CustomButton;
