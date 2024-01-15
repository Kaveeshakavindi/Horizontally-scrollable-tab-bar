import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { useTheme } from '../ThemeContext'
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import ad1 from './../assets/images/ad1.png'
import ad2 from './../assets/images/ad2.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MiniCard = () => {
    const { theme } = useTheme()
    return (
        <View style={styles.cardsContainer}>
            <View style={styles.cardsRow}>
                <View style={[styles.cardContainer, { backgroundColor: theme.miniCardBg1 }]}>
                    <Icon name={'carpenter'} size={20} color={'black'} style={styles.icon} />
                    <Text style={styles.cardText}>Carpenter</Text>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: theme.miniCardBg2 }]}>
                    <Icon name={'electrical-services'} size={20} color={'black'} style={styles.icon} />
                    <Text style={styles.cardText}>Electrician</Text>
                </View>
            </View>
            <View style={styles.cardsRow}>
                <View style={[styles.cardContainer, { backgroundColor: theme.miniCardBg2 }]}>
                    <Icon name={'construction'} size={20} color={'black'} style={styles.icon} />
                    <Text style={styles.cardText}>Mason</Text>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: theme.miniCardBg2 }]}>
                    <Icon1 name={'scissors-cutting'} size={20} color={'black'} style={styles.icon} />
                    <Text style={styles.cardText}>Tailor</Text>
                </View>
            </View>
        </View>
    )
}

const Home = () => {

    const { theme } = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={[styles.title1, { color: theme.primaryText }]}>Locate your</Text>
                <Text style={[styles.title2, { color: theme.primaryText }]}>Craft master</Text>
            </View>
            <View style={styles.subContainer}>
                <SearchBar />
                <MiniCard />
            </View>
            <View style={styles.adContainer}>
                <Image source={ad1} style={styles.ad}/>
                <Image source={ad2} style={styles.ad}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.9,
        alignSelf: 'center',
        height: windowHeight
    },
    textContainer: {
        marginTop: 20,

    },
    title1: {
        fontSize: 25,

    },
    title2: {
        fontSize: 25,
        fontWeight: '700'
    },
    cardContainer: {
        width: (windowWidth * 0.8 - 16) / 2,
        marginHorizontal: 5,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row'
    },
    cardsRow: {
        flexDirection: 'row',
        marginBottom: 10
    },
    cardsContainer: {
        flexDirection: 'column',
        width: windowWidth * 0.8,
        alignSelf: 'center',
        marginTop: 20
    },
    cardText: {
        color: '#000000',
        fontWeight: 'bold'
    },
    icon: {
        marginRight: 10
    },
    adContainer:{
        margin: 0,
    },
    ad:{
        alignSelf:'center',
    }
})
export default Home
