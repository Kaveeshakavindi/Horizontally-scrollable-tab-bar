import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../components/CustomButton'
import { useTheme } from '../ThemeContext'
import Card from '../components/Card'
import { PEOPLE } from '../data/people'

const Craftsman = () => {

  const { theme } = useTheme();

  return (

    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollviewContent}>
        {PEOPLE.map((craftman) => (
          <Card key={craftman.id} name={craftman.name} occupation={craftman.occupation} />
        ))}

      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
  scrollviewContent: {
    alignItems: 'center',
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

export default Craftsman
