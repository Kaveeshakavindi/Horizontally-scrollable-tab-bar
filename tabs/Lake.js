import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const Lake = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lake</Text>
      <Text style={styles.paragraph}>Lakes are serene bodies of water that play a crucial role in Earth's ecosystem, contributing to the planet's biodiversity and providing essential resources for various life forms. Formed through geological processes such as glacial activity, tectonic activity, or human-made dams, lakes come in diverse shapes and sizes, ranging from small ponds to expansive freshwater reservoirs. Lakes serve as habitats for numerous plant and animal species, supporting rich ecosystems both above and below the water's surface. </Text>
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

export default Lake
