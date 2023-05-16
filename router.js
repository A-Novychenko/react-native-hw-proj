import {View} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {Feather, AntDesign} from "@expo/vector-icons";

import {RegistrationScreen} from "./screens/auth/RegistrationScreen";
import {LoginScreen} from "./screens/auth/LoginScreen";

import {ProfileScreen} from "./screens/mainScreen/ProfileScreen";
import {PostsScreen} from "./screens/mainScreen/PostsScreen";
import {CreatePostsScreen} from "./screens/mainScreen/CreatePostsScreen";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRouterAuth = () => {
  return (
    <MainStack.Navigator initialRouteName="LoginScreen">
      <MainStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{headerShown: false}}
        name="Registration"
        component={RegistrationScreen}
      />
    </MainStack.Navigator>
  );
};

export const useRouterScreens = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 20,
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
          letterSpacing: -0.408,
          color: "#212121",
        },
        tabBarShowLabel: false,
        tabBarStyle: {height: 83, paddingBottom: 40, paddingTop: 9},
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
          title: "Публикации",
          headerRight: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginRight: 16,
              }}
            >
              <Feather.Button
                onPress={() => alert("This is a button!")}
                name="log-out"
                size={24}
                color="#BDBDBD"
                backgroundColor="#fff"
              />
            </View>
          ),
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
            );
          },
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: {display: "none"},
          title: "Создать публикацию",

          headerLeft: ({focused, color, size}) => (
            <View
              style={{
                backgroundColor: "#fff",
                marginRight: 16,
              }}
            >
              <AntDesign.Button
                // onPress={() => goBack()}
                name="arrowleft"
                size={24}
                color="#BDBDBD"
                backgroundColor="#fff"
              />
            </View>
          ),

          tabBarIcon: ({focused, color, size}) => {
            return (
              <AntDesign
                name="plus"
                size={13}
                color="#fff"
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  borderRadius: 20,
                  overflow: "hidden",
                  textAlign: "center",
                  textAlignVertical: "center",
                  alignItems: "center",
                }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профиль",
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};
