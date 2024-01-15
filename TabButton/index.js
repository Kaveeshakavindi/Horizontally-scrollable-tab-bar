import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
 
const TabButton = ({ label, icon, onPress, isSelected, selectedTabBg, labelColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected ? {backgroundColor: selectedTabBg} : null,
        { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
      ]}
      onPress={onPress}>
      <Icon name={icon} size={15} color="#ffff" style={styles.icon} />
      <Text style={[styles.buttonText, {color: labelColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
    
  },

  buttonText: {
    
    fontSize: 16,
  },
  icon: {
    paddingRight: 10
  }
});

export default TabButton;
