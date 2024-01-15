import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';


const TabScreen = ({ selectedTab}) => {
    let content = null;
    content = selectedTab.path;
    return (
        <View style={styles.container}>
            {content}
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        
    }
})

export default TabScreen;