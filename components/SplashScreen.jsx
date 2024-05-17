import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const authenticate = async () => {
      try{
        // 1. userToken에 저장된 데이터를 불러옴
        const tokenDataJson = await SecureStore.getItemAsync('userToken');
        // 2. userToken에 저장된 것이 없다면 -> 로그인 화면으로.
        if(!tokenDataJson) {
          navigation.replace('LoginScreen');
          return;
        }
        // 3. 토큰 데이터 파싱 후 액세스토큰 가져오기
        const tokenData = JSON.parse(tokenDataJson);
        const accessToken = tokenData.accessToken;
        console.log(accessToken);
        // 4. axios 통신 -> 자동로그인 api 요청
        const response = await axios.get("https://prod.capstone-design.shop/api/app/users/auth/auto-login", 
          {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-Type": "application/json"
            }
          }
        );
        const userInfoByAutoLogin = {
          name: response.result.name,
          nickname: response.result.nickname,
          scoreAvg: response.result.scoreAvg
        };
        await SecureStore.setItemAsync('userInfo', JSON.stringify(userInfoByAutoLogin));
        // 4. 자동로그인 성공 시, MainScreen으로 이동
        navigation.replace('MainScreen');
      }catch (error) {
        if (error.response && error.response.status === 401) {
          // 토큰 만료된 경우, 재발급 시도
          try {
            const tokenDataJson = await SecureStore.getItemAsync('userToken');
            const tokenData = JSON.parse(tokenDataJson);
            const refreshToken = tokenData.refreshToken;
            console.log("Token Reissue => "+refreshToken);
            const reissueResponse = await axios.get("https://prod.capstone-design.shop/api/app/users/auth/reissue", {
              headers: {
                "Authorization": `Bearer ${refreshToken}`,
                "Content-Type": "application/json"
              }
            });
            console.log("Token Reissue Response => "+JSON.stringify(reissueResponse));
            
            
            // 토큰 재발급 성공, 새 토큰 저장 및 메인 화면으로
            const userInfoByReissue = {
              name: reissueResponse.data.result.name,
              nickname: reissueResponse.data.result.nickname,
              scoreAvg: reissueResponse.data.result.scoreAvg
            };
            await SecureStore.setItemAsync('userInfo', JSON.stringify(userInfoByReissue));
            await SecureStore.setItemAsync('userToken', JSON.stringify(reissueResponse.data.result.token));
            navigation.replace('MainScreen');
          } catch (reissueError) {
            // 토큰 재발급 실패
            console.log(reissueError);
            navigation.replace('LoginScreen');
          }
        } else {
          // 그 외 에러
          navigation.replace('LoginScreen');
        }
      } finally {
        setLoading(false);
      }
    };

    authenticate();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bowler.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // 세로 방향 가운데 정렬
    alignItems: "center", // 가로 방향 가운데 정렬
    backgroundColor: "white", // 배경색을 하얀색으로 설정
  },
  logo: {
    width: 300,
    height: 100,
  },
});

export default SplashScreen;
