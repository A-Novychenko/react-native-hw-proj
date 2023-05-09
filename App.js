import "react-native-gesture-handler";
import React, {useState} from "react";

import {useFonts} from "expo-font";

import {NavigationContainer} from "@react-navigation/native";
import {useRouterAuth} from "./router";
import {Home} from "./screens/mainScreen/Home";

export default function App() {
  const [isLogin, setSsLogin] = useState(true);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const useRouter = () => {
    if (!isLogin) {
      return useRouterAuth();
    }
    return <Home />;
  };
  const routing = useRouter();

  return <NavigationContainer>{routing}</NavigationContainer>;
}
