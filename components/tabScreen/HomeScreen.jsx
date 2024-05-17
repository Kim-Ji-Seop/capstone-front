import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../Header";
import Swiper from "react-native-swiper";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();

    const handleCreateMatchRoom = () => {
      navigation.navigate('CreateMatchRoomScreen');  // CreateMatchRoomScreen으로 네비게이션
    };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          <Image
            source={require("../../assets/tab-icon/profile-basic.png")} // 사용자 아이콘 이미지 경로
            style={styles.icon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>김지섭</Text>
            <Text style={styles.detailText}>AVG - 230</Text>
            <Text style={styles.detailText}>최근 전적 - 8승 2패(승률 80%)</Text>
          </View>
        </View>
        <Text style={styles.nextMatchTitle}>NEXT MATCH</Text>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}
        >
          <View style={styles.slide}>
            <Text style={styles.matchDate}>2023.02.28(화) 오후3시</Text>
            <Text style={styles.matchType}>울산 문수 경기장</Text>
            <View style={styles.matchInfoView}>
              <View>
                <Image
                  source={require("../../assets/tab-icon/profile-basic.png")}
                  style={styles.icon}
                />
                <Text style={styles.firstMatchTeamName}>김성인</Text>
              </View>

              <Text style={styles.vsText}>vs</Text>

              <View>
                <Image
                  source={require("../../assets/tab-icon/profile-basic.png")}
                  style={styles.icon}
                />
                <Text style={styles.secondMatchTeamName}>김지섭</Text>
              </View>
            </View>
          </View>
        </Swiper>

        <View style={styles.haveThreeContainerRow}>
            <View style={styles.contentsContainer}>
                <Text>참여가능 경기매치</Text>
            </View>
            <View style={styles.contentsContainer}>
                <Text>친구</Text>
            </View>
            <View style={styles.contentsContainer}>
                <Text>내 주변 경기장 찾기</Text>
            </View>
        </View>

        <TouchableOpacity 
            style={styles.createMatchRoom}
            onPress={handleCreateMatchRoom}>
            <Text>매칭방 개설하기</Text>
        </TouchableOpacity>
        <View style={styles.createFriend}>
            <Text>친구 추가</Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    flexDirection: "row", // 자식 요소들을 수평으로 배치
    alignItems: "center", // 수직 축에서 중앙 정렬
    backgroundColor: "white", // 배경색
    borderRadius: 20, // 둥근 모서리
    padding: 10, // 내부 패딩
    // iOS에서만 작동
    shadowColor: "black", // 그림자 색
    shadowOffset: { width: 0, height: 2 }, // 그림자 위치
    shadowOpacity: 0.1, // 그림자 투명도
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 10,
    height: 90,
  },
  icon: {
    width: 50, // 아이콘 너비
    height: 50, // 아이콘 높이
    borderRadius: 25, // 아이콘 둥근 모서리 (너비/2)
    marginRight: 10, // 텍스트와의 간격
  },
  textContainer: {
    flexDirection: "column", // 텍스트를 세로로 배치
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
  },
  scrollViewContent: {
    paddingBottom: 20, // 스크롤뷰의 마지막 여백 추가
  },
  nextMatchTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 5,
    marginStart: 20,
  },
  wrapper: {
    height: 150, // Swiper의 높이 조절
  },
  slide: {
    flex: 1,
    backgroundColor: "#fff", // 배경색 설정
    borderWidth: 0.3,
    borderRadius: 20, // 모서리 둥글게
    marginHorizontal: 10, // 좌우 마진
    paddingHorizontal: 15, // 패딩
  },
  matchDate: {
    marginTop: 5,
    color: "#0000CD",
    fontSize: 14,
  },
  matchType: {
    marginTop: 3,
    marginStart: 10,
    color: "grey",
  },
  matchInfoView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  firstMatchTeamName: {
    fontSize: 20,
    marginTop: 4,
  },
  vsText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  secondMatchTeamName: {
    fontSize: 20,
    marginTop: 4,
  },
  haveThreeContainerRow:{
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "space-between"
  },
  contentsContainer:{
    borderWidth: 0.3,
    borderRadius: 20,
    padding: 5,
    height: 100,
    width: 100,
  },
  createMatchRoom:{
    flex:1,
    justifyContent: "center",
    alignContent: "center",
    alignItems:"center",
    marginTop: 20,
    marginHorizontal: 20,
    height: 50,
    padding: 5,
    borderWidth: 0.3,
    borderRadius: 20,
  },
  createFriend:{
    flex:1,
    justifyContent: "center",
    alignContent: "center",
    alignItems:"center",
    marginTop: 20,
    marginHorizontal: 20,
    height: 50,
    padding: 5,
    borderWidth: 0.3,
    borderRadius: 20,
  }
});

export default HomeScreen;
