import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Beach = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beach</Text>
      <Text style={styles.paragraph}>A beach is a natural, coastal landform characterized by the presence of sand, rocks, pebbles, or other granular materials that extend from the shoreline into the water. Beaches are dynamic environments shaped by the constant interaction of waves, tides, wind, and currents. They serve as popular recreational destinations, offering opportunities for sunbathing, swimming, beach sports, and relaxation. Beach ecosystems also play a crucial role in supporting diverse marine life, providing habitats for various species. The soothing sound of waves, the warmth of the sun, and the beauty of the coastal scenery make beaches cherished locations for both leisure and appreciation of nature.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    margin: 10
  },
  title:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 20
  },
  paragraph:{
    color: 'black',
    textAlign: 'center',
  }
})

export default Beach
