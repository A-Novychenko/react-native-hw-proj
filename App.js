import "react-native-gesture-handler";
import React from "react";
import {Button} from "react-native";
import {useFonts} from "expo-font";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {RegistrationScreen} from "./screens/auth/RegistrationScreen";
import {LoginScreen} from "./screens/auth/LoginScreen";

import {Home} from "./screens/mainScreen/Home";
import {ProfileScreen} from "./screens/mainScreen/ProfileScreen";
import {PostsScreen} from "./screens/mainScreen/PostsScreen";
import {CreatePostsScreen} from "./screens/mainScreen/CreatePostsScreen";
import {CommentsScreen} from "./screens/mainScreen/CommentsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    //400
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    //500
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  const useRoute = (auth) => {
    if (!auth) {
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
    }
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
        }}
      >
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            title: "Публикации",
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Logout"
                color="#212121"
              />
            ),
          }}
        />
        <Tabs.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          // options={{headerShown: false}}
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            title: "Создать публикацию",
          }}
        />
        <Tabs.Screen
          // options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Профиль",
          }}
        />
        <Tabs.Screen
          // options={{headerShown: false}}
          name="Комментарии"
          component={CommentsScreen}
          options={{
            title: "Комментарии",
          }}
        />
      </Tabs.Navigator>
    );
  };

  const routing = useRoute({auth: "true"});
  // const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
