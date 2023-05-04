import "react-native-gesture-handler";
import React, {useCallback} from "react";
import {Text, View} from "react-native";

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {RegistrationScreen} from "./screens/auth/RegistrationScreen";
import {LoginScreen} from "./screens/auth/LoginScreen";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "./screens/mainScreen/Home";
import {ProfileScreen} from "./screens/mainScreen/ProfileScreen";
import {PostsScreen} from "./screens/mainScreen/PostsScreen";
import {Button} from "react-native-web";

// SplashScreen.preventAutoHideAsync();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

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
      <Tabs.Navigator initialRouteName="PostsScreen">
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            title: "Публикации",

            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert("This is a button!")}
            //     title="Press me"
            //     color="#fff"
            //   />
            // ),
          }}
        />
        <Tabs.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Tabs.Screen
          options={{headerShown: false}}
          name="Profile"
          component={ProfileScreen}
        />
      </Tabs.Navigator>
    );
  };

  const routing = useRoute({auth: "true"});
  // const routing = useRoute(null);
  return (
    /* <View onLayout={onLayoutRootView}> */
    <NavigationContainer>{routing}</NavigationContainer>
    /* </View> */
  );
}
