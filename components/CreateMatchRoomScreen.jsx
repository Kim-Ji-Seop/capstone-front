import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OnlineForm from "./tabScreen/CreateOnline"; // 온라인 폼 컴포넌트
import OfflineForm from "./tabScreen/CreateOffline"; // 오프라인 폼 컴포넌트

const Tab = createMaterialTopTabNavigator();

const CreateMatchRoomScreen = () => {
  const navigation = useNavigation();
  const handleCompletion = () => {
    // 여기에 완료 버튼을 눌렀을 때 실행할 로직을 추가
    console.log("매칭방 개설 완료");
    navigation.goBack(); 
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>매칭방 개설하기</Text>
        <TouchableOpacity onPress={handleCompletion} style={styles.sideButton}>
          <Text>완료</Text>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#FF5E00",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "white" },
          tabBarIndicatorStyle: { backgroundColor: "#FF5E00" },
        }}
      >
        <Tab.Screen
          name="online"
          component={OnlineForm}
          options={{ tabBarLabel: "online" }}
        />
        <Tab.Screen
          name="offline"
          component={OfflineForm}
          options={{ tabBarLabel: "offline" }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  backButton: {
    width: 50,
  },
  sideButton: {
    width: 50,
    alignItems: 'center', // 텍스트를 버튼 중앙으로 정렬
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CreateMatchRoomScreen;
