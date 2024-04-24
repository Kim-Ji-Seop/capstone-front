import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";

// 정규식 패턴
const patterns = {
  uid: /^[a-zA-Z][a-zA-Z0-9]{0,15}$/, // 영문자로 시작하는 영문자 또는 숫자, 16자 이하
  password:
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/, // 8~16자 영문, 숫자, 특수문자를 최소 한 가지씩 조합
  nameNickname: /^[가-힣a-zA-Z]{1,10}$/, // 한글, 영문, 10자 이하
};

const SignUpScreen = ({ navigation }) => {
  // 입력 필드 상태
  const [uid, setUid] = useState("");
  const [uidAvailable, setUidAvailable] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 유효성 검사 함수
  const validateFields = () => {
    if (!uid) {
      Alert.alert("회원가입 오류", "아이디를 입력해주세요.");
      return false;
    }
    if (!uidAvailable) {
      Alert.alert("회원가입 오류", "중복확인을 해주세요.");
      return false;
    }
    if (!patterns.uid.test(uid)) {
      Alert.alert(
        "회원가입 오류",
        "아이디는 영문자로 시작하는 16자 이하의 영문자 또는 숫자여야 합니다."
      );
      return false;
    }
    if (!password) {
      Alert.alert("회원가입 오류", "비밀번호를 입력해주세요.");
      return false;
    }
    if (!patterns.password.test(password)) {
      Alert.alert(
        "회원가입 오류",
        "비밀번호는 8~16자의 영문, 숫자, 특수문자를 각각 한 가지 이상 포함해야 합니다."
      );
      return false;
    }
    if (!passwordConfirm) {
      Alert.alert("회원가입 오류", "비밀번호 확인을 입력해주세요.");
      return false;
    }
    if (password !== passwordConfirm) {
      Alert.alert(
        "회원가입 오류",
        "비밀번호와 비밀번호 확인이 일치하지 않습니다."
      );
      return false;
    }
    if (!name) {
      Alert.alert("회원가입 오류", "이름을 입력해주세요.");
      return false;
    }
    if (!patterns.nameNickname.test(name)) {
      Alert.alert(
        "회원가입 오류",
        "이름은 한글 또는 영문 10자 이하로 입력해주세요."
      );
      return false;
    }
    if (!nickname) {
      Alert.alert("회원가입 오류", "닉네임을 입력해주세요.");
      return false;
    }
    if (!patterns.nameNickname.test(nickname)) {
      Alert.alert(
        "회원가입 오류",
        "닉네임은 한글 또는 영문 10자 이하로 입력해주세요."
      );
      return false;
    }
    return true; // 모든 검사를 통과했다면 true 반환
  };

  // 아이디 중복 확인
  const checkUid = async () => {
    if (!uid) {
      Alert.alert("중복 확인", "아이디를 입력해주세요.");
      return;
    }
    try {
      const response = await fetch(
        "https://prod.capstone-design.shop/api/app/users/auth/duplication",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid }),
        }
      );

      const json = await response.json(); // 응답 본문을 JSON으로 파싱
      console.log("Response json:", json);
      console.log("Resonse Code: ", json.code);
      switch (json.code) {
        case 200:
          Alert.alert("중복 확인", "사용 가능한 아이디입니다.");
          setUidAvailable(true);
          break;
        case 4001:
          Alert.alert("중복 확인", "이미 사용 중인 아이디입니다.");
          setUidAvailable(false);
          break;
        case 4002:
          Alert.alert("중복 확인", "아이디를 입력해주세요."); // 서버측 로직과 중복되는 경우, 클라이언트 사전 검사와 다를 수 있습니다.
          setUidAvailable(false);
          break;
        default:
          Alert.alert(
            "중복 확인",
            "처리 중 에러가 발생했습니다. 다시 시도해주세요."
          );
          setUidAvailable(false);
          break;
      }
    } catch (error) {
      console.error("Error checking uid availability", error);
      Alert.alert(
        "중복 확인",
        "네트워크 오류가 발생했습니다. 네트워크 상태를 확인해주세요."
      );
      setUidAvailable(false);
    }
  };

  // 회원가입
  const signUp = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      const response = await fetch(
        "https://prod.capstone-design.shop/api/app/users/auth/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid, password, name, nickname }),
        }
      );

      const json = await response.json(); // 응답 본문을 JSON으로 파싱
      console.log("Response json:", json);
      console.log("Resonse Code: ", json.code);
      switch (json.code) {
        case 200:
          Alert.alert("회원가입", "회원가입에 성공했습니다.", [
            { text: "OK", onPress: () => navigation.navigate("LoginScreen") },
          ]);
          break;
        case 4003:
          Alert.alert("회원가입", "입력값을 확인해주세요.");
          break;
        default:
          Alert.alert(
            "회원가입",
            "처리 중 에러가 발생했습니다. 다시 시도해주세요."
          );
          break;
      }
    } catch (error) {
      console.error("Error checking uid availability", error);
      Alert.alert(
        "회원가입",
        "네트워크 오류가 발생했습니다. 네트워크 상태를 확인해주세요."
      );
    }
  };

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
        <TextInput
          style={styles.idInput}
          placeholder="아이디"
          value={uid}
          onChangeText={setUid}
        />
        <TouchableOpacity onPress={checkUid} style={styles.duplicateIdButton}>
          <Text style={styles.duplicateIdButtonText}>중복확인</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="이름"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="닉네임"
        value={nickname}
        onChangeText={setNickname}
      />

      <TouchableOpacity onPress={signUp} style={styles.button}>
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
    marginBottom: 20,
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
    marginTop: 20,
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
