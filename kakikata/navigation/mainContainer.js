import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/homeScreen';
import KatakanaScreen from './screens/katakanaScreen';
import HiraganaScreen from './screens/hiraganaScreen';

const screenWidth = Dimensions.get('window').width;

function MainContainer() {
  const [activeTab, setActiveTab] = useState('Home');

  // Render the active screen
  const renderScreen = () => {
    if (activeTab === 'Home') {
      return <HomeScreen />;
    } else if (activeTab === 'Hiragana') {
      return <HiraganaScreen />;
    } else if (activeTab === 'Katakana') {
      return <KatakanaScreen />;
    }
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Main Content */}
        <View style={styles.mainContent}>{renderScreen()}</View>

        {/* Custom Navigation Bar */}
        <View style={styles.navContainer}>
          {/* Hiragana Tab */}
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Hiragana' ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => setActiveTab('Hiragana')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Hiragana' ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              Hiragana Practice
            </Text>
          </TouchableOpacity>

          {/* Home Tab */}
          <TouchableOpacity
            style={[
              styles.iconTab,
              activeTab === 'Home' ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => setActiveTab('Home')}
          >
            <Ionicons
              name="home"
              size={32} // Icon size
              color={activeTab === 'Home' ? 'white' : 'black'}
            />
          </TouchableOpacity>

          {/* Katakana Tab */}
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'Katakana' ? styles.activeTab : styles.inactiveTab,
            ]}
            onPress={() => setActiveTab('Katakana')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'Katakana' ? styles.activeTabText : styles.inactiveTabText,
              ]}
            >
              Katakana Practice
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 60, // Adjusted for rounder appearance
    padding: 15,
    position: 'absolute',
    bottom: 30,
    width: screenWidth * 0.95, // Set width to 95% of the screen width
    alignSelf: 'center', // Center it horizontally
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 15, // Increased padding for larger touch area
    borderRadius: 60,
  },
  iconTab: {
    width: 70, // Increased icon button width
    height: 70, // Increased icon button height
    borderRadius: 35, // Adjusted for circular shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#27C72C', // Updated active tab color
  },
  // inactiveTab: {
  //   backgroundColor: '#e6e6e6',
  // },
  tabText: {
    fontSize: 18, // Increased font size for better readability
    fontWeight: '500',
    fontFamily: 'SF Pro', // Applied SF Pro font
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: 'black',
  },
});

export default MainContainer;
