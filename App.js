import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import SplashScreen from './components/SplashScreen';
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';
import SignUpScreen from './components/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
                    initialRouteName="SplashScreen" 
                    screenOptions={{ headerShown: false }} // AppBar 삭제
                    >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 // 안드로이드에서만 상태 표시줄 높이 만큼 패딩을 적용.
  },
});

export default App;