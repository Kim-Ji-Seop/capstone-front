import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // 2초 후에 LoginScreen으로 이동
        const timer = setTimeout(() => {
          navigation.replace('LoginScreen');
        }, 2000);
    
        // 컴포넌트가 언마운트되면 타이머를 제거.
        return () => clearTimeout(timer);
      }, [navigation]);
    
      return (
        <View style={styles.container}>
            <Image
                source={require('../assets/bowler.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // 세로 방향 가운데 정렬
      alignItems: 'center', // 가로 방향 가운데 정렬
      backgroundColor: 'white', // 배경색을 하얀색으로 설정
    },
    logo: {
      width: 300,
      height: 100,
    },
});

export default SplashScreen;