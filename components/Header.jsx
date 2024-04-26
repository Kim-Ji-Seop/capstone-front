import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/bowler.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 50, // 또는 적절한 높이 설정
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white', // 헤더 배경색
        borderBottomWidth: 1, // 경계선 두께
        borderBottomColor: '#E8E8E8', // 경계선 색상, 은은한 회색 톤
      },
  logo: {
    height: 30, // 로고 이미지 높이
    width: 100, // 로고 이미지 너비
  }
});

export default Header;