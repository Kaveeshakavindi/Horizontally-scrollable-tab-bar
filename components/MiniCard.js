import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { useTheme } from '../ThemeContext'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MiniCard = () => {
    const {theme} = useTheme()
  return (
    <View style={[styles.container, {backgroundColor: theme.miniCardBg1}]}>
        <Text>Card</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: windowWidth*0.3,
    }
})
export default MiniCard
