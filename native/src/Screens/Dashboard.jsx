import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import History from "./History";
import Home from "./Home";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#22163C",
          height: 100,
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTitleAlign: "center",

        tabBarActiveTintColor: "#ffc300",
        tabBarStyle: {
          height: 70,
          backgroundColor: "#003f88",
        },
        tabBarItemStyle: {
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 11,
          fontWeight: "600",
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" color={color} size={size} />;
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="history" color="#000" size={24} />;
          },
        }}
        name="History"
        component={History}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="profile" color={color} size={size} />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
