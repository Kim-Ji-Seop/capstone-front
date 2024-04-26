import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";



const LoginScreen = ({ navigation }) => {
  const [uid,setUid] = useState("");
  const [password, setPassword] = useState("");
  // 유효성 검사 함수
  const validateFields = () => {
    if (!uid) {
      Alert.alert("로그인 실패", "아이디를 입력해주세요.");
      return false;
    }
    if (!password) {
      Alert.alert("로그인 실패", "비밀번호를 입력해주세요.");
      return false;
    }
    return true; // 모든 검사를 통과했다면 true 반환
  };

  const signIn = async () => {
    if (!validateFields()) {
      return;
    }
    try{
      const loginInput = {
        uid: uid,
        password: password
      };
      const response = await axios.post("https://prod.capstone-design.shop/api/app/users/auth/login", loginInput, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const json = response.data; // axios는 자동으로 JSON 파싱을 해줍니다
      console.log("Response json:", json);

      switch (json.code) {
        case 200:
          const userInfo = {
            name: json.result.name,
            nickname: json.result.nickname,
            scoreAvg: json.result.scoreAvg
          };
          console.log("User Info:", userInfo);
          console.log("Token Info:", json.result.token);
          await SecureStore.setItemAsync('userInfo', JSON.stringify(userInfo));
          await SecureStore.setItemAsync('userToken', JSON.stringify(json.result.token));
          navigation.navigate("MainScreen");
          break;
        case 4004:
          Alert.alert("로그인", "비밀번호가 틀립니다.");
          break;
        case 4005:
          Alert.alert("로그인", "해당 사용자를 찾을 수 없습니다.");
          break;
        default:
          Alert.alert("로그인", "처리 중 에러가 발생했습니다. 다시 시도해주세요.");
          break;
      }
    } catch (error) {
      console.error("Error checking Login", error);
      Alert.alert("로그인", "네트워크 오류가 발생했습니다. 네트워크 상태를 확인해주세요.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bowler.png")} // 로고 이미지 경로를 적절히 설정하세요.
        style={styles.logo}
      />
      <TextInput 
        style={styles.input} 
        placeholder="아이디"
        value={uid}
        onChangeText={setUid}/>
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={signIn}
      >
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
      <Text
        style={styles.register}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        회원가입
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  logo: {
    height: 100,
    width: 200,
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    borderWidth: 0.3,
    borderColor: "grey",
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#f24726",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  register: {
    fontSize: 16,
    color: "grey",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
