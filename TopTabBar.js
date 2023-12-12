import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
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
  
   
  
    const renderScrollableItems = () => {
        const sortedScreens = [...SCREEN_NAMES.filter(screen => screen !== selectedTab)];
      
        return (
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.tab}>
              <CustomButton
                label={selectedTab.name}
                icon={selectedTab.icon}
                onPress={() => handleButtonPress(selectedTab)}
                isSelected={true}
              />
            </View>
      
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {sortedScreens.map((screen) => (
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
          </View>
        );
      };
      
      
  
    return (
      <View>
        <View style={styles.colorPickerContainer}>
          <Text>Choose the tab bar color</Text>
          <View style={{ flexDirection: 'row' }}>
            {COLOR_OPTIONS.map((colors) => (
              <TouchableOpacity key={colors.id} onPress={() => handleColorChange(colors.value)}>
                <Color name="circle" size={20} color={colors.value} style={styles.colorIcon} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={[styles.tabContainer, { backgroundColor: selectedColor }]}>
        
        
           
            {renderScrollableItems()}
          
       
        </View>
        <TabScreen selectedTab={selectedTab} />
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      padding: 10,
      borderWidth: 2,
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
    colorIcon: {
      padding: 0,
      borderWidth: 2,
      borderRadius: 10,
      margin: 5,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      borderColor: 'black',
    },
  });
  
  export default TopTabBar;