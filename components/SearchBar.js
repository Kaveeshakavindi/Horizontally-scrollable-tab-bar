import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '../ThemeContext'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchBar = () => {

    const {theme} = useTheme()

  return (
    <View style={[styles.container, {backgroundColor: theme.componentBg}]}>
        <Icon name={'search'} size={15} style={styles.icon} color={theme.primaryText}/>
        <Text style={[styles.title, {color: theme.secondaryText}]}>Discover craftman</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth*0.8,
        alignSelf: 'center',
        marginTop: 30,
        padding: 30,
        borderRadius: 15
    },
    icon:{
        marginRight: 20
    }
})
export default SearchBar
