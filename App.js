import React, {useCallback} from "react";
import {View} from "react-native";

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {RegistrationScreen} from "./screens/auth/RegistrationScreen";
import {LoginScreen} from "./screens/auth/LoginScreen";

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

  return (
    <NavigationContainer>
      {/* <View onLayout={onLayoutRootView}> */}
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
      {/* </View> */}
    </NavigationContainer>
  );
}
