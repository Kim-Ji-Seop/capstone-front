import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Header />
        {/* 화면의 나머지 부분 */}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    // 기타 스타일 정의 ...
  });

  export default HomeScreen;