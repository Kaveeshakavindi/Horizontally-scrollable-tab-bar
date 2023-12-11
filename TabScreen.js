import React from 'react';
import { Text, View } from 'react-native';
import Beach from './tabs/Beach';
import City from './tabs/City'; 
import Lake from './tabs/Lake';

const TabScreen = ({ selectedTab }) => {
    let content = null;
    content = selectedTab.path;
    return (
        <View>
            {content}
        </View>
    );
};

export default TabScreen;