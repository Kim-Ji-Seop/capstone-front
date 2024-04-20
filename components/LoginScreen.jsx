import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bowler.png")} // 로고 이미지 경로를 적절히 설정하세요.
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="아이디" />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MainScreen")}
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
    height: 100, // 적절한 높이 값으로 설정하세요.
    width: 200, // 적절한 너비 값으로 설정하세요.
    marginBottom: 50, // 로고 아래 마진을 설정하세요.
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
