import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { useTheme } from '../ThemeContext'
import AirplaneImage from './../assets/images/airplane.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Card = ({name, occupation}) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.componentBg}]}>
      <View>
        <Image source={AirplaneImage} style={styles.image}/>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, {color: theme.primaryText}]}>{occupation}</Text>
        <Text style={[styles.subtitle, {color: theme.tertiaryText}]}>Assigned</Text>
        <Text style={[styles.name, {color: theme.secondaryText}]}>{name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth*0.85,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignSelf: 'stretch'
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  textContainer:{
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'Product-Sans-Bold'
  },
  subtitle:{
    textTransform: 'capitalize',
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Product-Sans-Regular'
  },
  name:{
    textTransform: 'capitalize',
    fontSize: 15,
    fontFamily: 'Product-Sans-Regular'
  }
})
export default Card
