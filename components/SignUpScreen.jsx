import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>회원가입 정보를</Text>
        <Text style={styles.headerText}>입력해주세요</Text>
      </View>

      <View style={styles.idInputGroup}>
        <TextInput style={styles.idInput} placeholder="아이디" />
        <TouchableOpacity style={styles.duplicateIdButton}>
          <Text style={styles.duplicateIdButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        secureTextEntry
      />
      <TextInput style={styles.input} placeholder="이름" />
      <TextInput style={styles.input} placeholder="닉네임" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 16,
  },
  closeButtonText: {
    fontSize: 24,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInfo: {
    fontSize: 12,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    height: 50,
    backgroundColor: "#f24726",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  idInputGroup: {
    flexDirection: "row", // 수평 배치
    justifyContent: "flex-start", // 왼쪽 정렬
    alignItems: "center", // 세로축 중앙 정렬
    marginBottom: 50,
    marginTop: 50,
    width: "70%",
  },

  idInput: {
    flex: 1, // 사용 가능한 공간의 대부분을 차지하도록 함
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    paddingHorizontal: 10,
    paddingBottom: 5,
    marginRight: 10, // 오른쪽에 마진 추가
  },
  duplicateIdButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: "#f24726",
  },
  duplicateIdButtonText: {
    color: "white",
    fontSize: 13,
  },
});

export default SignUpScreen;
