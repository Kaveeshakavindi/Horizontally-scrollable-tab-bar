import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomButton = ({ title, onPress }) => {
    const {theme} = useTheme();
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: theme.toggleButtonColor}]} onPress={onPress}>
            <Text style={[styles.title, {color: theme.toggleButtonText}]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
        width: windowWidth*0.8,
        alignItems: 'center',
        margin: 50,
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        color: 'red',
        textTransform: 'capitalize'
    }
})


export default CustomButton
