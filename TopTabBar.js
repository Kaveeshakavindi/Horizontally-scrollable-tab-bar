import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SCREEN_NAMES, COLOR_OPTIONS } from './data';
import CustomButton from './Button';
import TabScreen from './TabScreen';
import Color from 'react-native-vector-icons/FontAwesome'

const TopTabBar = () => {
    const [selectedTab, setSelectedTab] = useState(SCREEN_NAMES[0]);
    const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);

    const handleButtonPress = (screen) => {
        setSelectedTab(screen);
    };

    const handleColorChange = (color) => {
        console.log('Selected Color:', color);
        setSelectedColor(color);
    };

    return (
        <View>
            <View style={styles.colorPickerContainer}>
                <Text>Choose the tab bar color</Text>
                <View style={{ flexDirection: 'row', }}>

                    {COLOR_OPTIONS.map((colors) => (
                        <TouchableOpacity key={colors.id} onPress={() => handleColorChange(colors.value)}>
                            <Color name="circle" size={20} color={colors.value} style={styles.colorIcon} />
                        </TouchableOpacity>
                    ))}

                </View>
            </View>
            <ScrollView
                horizontal
                style={{ ...styles.tabContainer, backgroundColor: selectedColor }}
                showsHorizontalScrollIndicator={false}
            >
                {SCREEN_NAMES.map((screen) => (
                    <View key={screen.id} style={styles.tab}>
                        <CustomButton
                            label={screen.name}
                            icon={screen.icon}
                            onPress={() => handleButtonPress(screen)}
                            isSelected={selectedTab === screen}
                        />
                    </View>
                ))}
            </ScrollView>
            <TabScreen selectedTab={selectedTab} />
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        padding: 10,
        borderWidth: 2
    },
    tab: {
        alignItems: 'center',
        marginRight: 10,
    },
    colorPickerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f5f6ff',
    },
    colorIcon:{
        padding: 0,
        borderWidth: 2,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderColor: 'black'
    }
});

export default TopTabBar;
