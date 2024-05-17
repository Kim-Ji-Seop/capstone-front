import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const OnlineForm = () => {
  const [title, setTitle] = useState("");

  const [playerCount, setPlayerCount] = useState("");
  const [location, setLocation] = useState("");
  const [teamAvg, setTeamAvg] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date"); // 'date' 또는 'time'
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // 시간 모드로 자동 전환
    if (mode === "date" && Platform.OS !== "ios") {
      setShow(true);
      setMode("time");
    } else {
      setShow(false);
      setMode("date"); // 모드 초기화
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>제목</Text>
        <TextInput
          style={styles.input}
          placeholder="경기 매치 제목"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View>
        <View style={styles.dateButtonGroup}>
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => showMode("date")}
            >
              <Text style={styles.buttonText}>날짜 선택</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => showMode("time")}
            >
              <Text style={styles.buttonText}>시간 선택</Text>
            </TouchableOpacity>
          </View>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.dateLabel}>
        <Text style={{ fontSize: 20 }}>{date.toLocaleString()}</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>인원</Text>
        <TextInput
          style={styles.input}
          placeholder="인원"
          keyboardType="numeric"
          value={playerCount}
          onChangeText={setPlayerCount}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>팀 AVG</Text>
        <TextInput
          style={styles.input}
          placeholder="팀 AVG"
          keyboardType="numeric"
          value={teamAvg}
          onChangeText={setTeamAvg}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>상세 내용</Text>
        <TextInput
          style={[styles.input, { height: 80 }]} // 높이를 늘려서 멀티라인을 지원
          placeholder="상세 내용 및 특이사항"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  inputGroup: {
    flexDirection: "row", // 가로로 레이블과 입력 필드를 배치
    alignItems: "center", // 세로 축 중앙 정렬
    marginBottom: 20,
  },
  dateButtonGroup: {
    flexDirection: "row", // 가로로 레이블과 입력 필드를 배치
    alignItems: "center", // 세로 축 중앙 정렬
    justifyContent: "center",
    marginBottom: 10,
  },
  dateLabel: {
    height: 30, // 레이블의 너비 고정
    fontSize: 30, // 폰트 크기
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    width: 90, // 레이블의 너비 고정
    fontSize: 16, // 폰트 크기
    paddingRight: 10, // 레이블과 입력 필드 사이 간격
  },
  input: {
    flex: 1, // 남은 공간을 모두 채움
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#FF5E00", // 주황색 배경
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white", // 텍스트 색상을 흰색으로 설정
    fontSize: 16,
  },
});

export default OnlineForm;
