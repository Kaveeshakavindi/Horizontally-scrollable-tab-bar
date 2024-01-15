import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import { SCREEN_NAMES } from './data';
import TabScreen from './TabScreen';
import TabButton from './TabButton';
import { useTheme } from './ThemeContext';
import ToggleButton from './components/ToggleButton';

const TopTabBar = () => {
  const [selectedTab, setSelectedTab] = useState(SCREEN_NAMES[0]);

  const handleButtonPress = (screen) => {
    setSelectedTab(screen);

  };
  const { toggleTheme, isDarkMode, theme } = useTheme();


  //render scrollable items method
  const renderScrollableItems = () => {
    const sortedScreens = [...SCREEN_NAMES.filter(screen => screen !== selectedTab)];
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.tab}>
          <TabButton
            label={selectedTab.name}
            icon={selectedTab.icon}
            onPress={() => handleButtonPress(selectedTab)}
            isSelected={true}
            selectedTabBg={theme.selectedTabBg}
            labelColor={'white'}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {sortedScreens.map((screen) => (
            <View key={screen.id} style={styles.tab}>
              <TabButton
                label={screen.name}
                onPress={() => handleButtonPress(screen)}
                isSelected={selectedTab === screen}
                labelColor={theme.secondaryText}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (

    <View style={[styles.container, { backgroundColor: theme.backgroundColor}]}>
      <ToggleButton title={isDarkMode ? 'Light' : 'Dark'} onPress={toggleTheme}/>
      <View style={[styles.tabContainer]}>
        {renderScrollableItems()}
      </View>
      <TabScreen
        selectedTab={selectedTab}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 10,

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