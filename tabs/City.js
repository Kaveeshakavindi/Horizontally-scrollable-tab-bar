import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const City = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>City</Text>
      <Text style={styles.paragraph}>Cities are vibrant hubs of human activity, embodying the dynamic pulse of modern civilization. Characterized by towering skyscrapers, bustling streets, and a diverse tapestry of cultures, cities serve as epicenters for economic, cultural, and social interactions.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20
  },
  paragraph: {
    color: 'black',
    textAlign: 'center',
  }
})

export default City
