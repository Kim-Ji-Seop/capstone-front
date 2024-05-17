import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OnlineForm from "./tabScreen/CreateOnline"; // 온라인 폼 컴포넌트
import OfflineForm from "./tabScreen/CreateOffline"; // 오프라인 폼 컴포넌트

const Tab = createMaterialTopTabNavigator();

const CreateMatchRoomScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "white" },
        tabBarIndicatorStyle: { backgroundColor: "#e91e63" },
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
  );
};

export default CreateMatchRoomScreen;
