import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import CustomButton from './components/CustomButton'
import Logo from './assets/images/logo.png'
import TopTabBar from './TopTabBar'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LandingScreen = ({ navigation }) => {
    const handleButtonPress = () => {
        navigation.navigate('TopTabBar');
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} />
            <Text style={styles.title}>Craft Masters</Text>
            <Text style={styles.subTitle}>Locate Your Craft Master.</Text>
            <TouchableOpacity style={[styles.buttonContainer]} onPress={handleButtonPress}>
                <Text style={[styles.buttonTitle]}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight,
        backgroundColor: '#1C1923'
    },
    title: {
        fontSize: 35,
        color: '#00C2FF',
        fontFamily: 'Product-Sans-Bold'
    },
    subTitle: {
        color: '#C0BFC5',
        fontFamily: 'Product-Sans-Regular'
    },
    buttonContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        width: windowWidth*0.8,
        alignItems: 'center',
        margin: 50,
        borderRadius: 50,
        backgroundColor: '#2E2B35'
    },
    buttonTitle: {
        fontSize: 15,
        color: 'white',
        fontFamily: 'Product-Sans-Regular'
    }
})

export default LandingScreen
