import React from 'react';
import { View } from 'react-native';

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