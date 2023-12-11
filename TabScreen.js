import React from 'react';
import { Text, View } from 'react-native';
import Beach from './tabs/Beach';
import City from './tabs/City'; 
import Lake from './tabs/Lake';

const TabScreen = ({ selectedTab }) => {
    let content = null;

    switch (selectedTab.id) {
        case 1:
            content = <Beach/>;
            break;
        case 2:
            content = <City />;
            break;
        case 3:
            content = <Lake />;
            break;
        

        default:
            break;
    }

    return (
        <View>
            <Text>Tab Screen</Text>
            {content}
        </View>
    );
};

export default TabScreen;