import React from 'react';
import { View, Text, StyleSheet, Image, Icon, TabBarIcon } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabScreen/HomeScreen';
import InfoScreen from './tabScreen/InfoScreen';
import MatchScreen from './tabScreen/MatchScreen';
import RecordScreen from './tabScreen/RecordScreen';

const Tab = createBottomTabNavigator();

const CustomIcon = ({ source, style }) => (
  <Image source={source} style={style} />
);

const MainScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused
            ? require('../assets/tab-icon/focus-home.png')
            : require('../assets/tab-icon/home.png');
        } else if (route.name === 'Matching') {
          iconName = focused
            ? require('../assets/tab-icon/focus-match.png')
            : require('../assets/tab-icon/match.png');
        } else if (route.name === 'Record') {
          iconName = focused
            ? require('../assets/tab-icon/focus-record.png')
            : require('../assets/tab-icon/record.png');
        } else if (route.name === 'Info') {
          iconName = focused
            ? require('../assets/tab-icon/focus-info.png')
            : require('../assets/tab-icon/info.png');
        }
        return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
      },
      tabBarLabelStyle: {
        fontSize: 12, // 라벨의 글자 크기를 조정
        marginBottom: 6, // 라벨의 아래쪽 여백을 줄임
      },
      tabBarStyle: { 
        paddingVertical: 4, // 탭 바의 상단과 하단 패딩을 줄임
        height: 60, // 필요에 따라 탭 바의 높이를 조정
      },
      tabBarActiveTintColor: '#FF5E00',
      tabBarInactiveTintColor: 'black',
      tabBarShowLabel: true,
    })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              source={focused ? require('../assets/tab-icon/focus-home.png') : require('../assets/tab-icon/home.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Matching"
        component={MatchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              source={focused ? require('../assets/tab-icon/focus-match.png') : require('../assets/tab-icon/match.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Record" 
        component={RecordScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              source={focused ? require('../assets/tab-icon/focus-record.png') : require('../assets/tab-icon/record.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Info" 
        component={InfoScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              source={focused ? require('../assets/tab-icon/focus-info.png') : require('../assets/tab-icon/info.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    backgroundColor: "Red",
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingTop: 10,
  },
  body: {
    flex: 13,
    borderTopWidth: 2,
    borderBottomWidth: 1,
    backgroundColor: "Blue",
  },
  navi: {
    flex: 1,
    backgroundColor: "Green",
  },
  logo: {
    height: 30,
    width: 100,
  },
});

export default MainScreen;