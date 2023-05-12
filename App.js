import "react-native-gesture-handler";
import React, {useState} from "react";
import {Provider} from "react-redux";

import {useFonts} from "expo-font";

import {NavigationContainer} from "@react-navigation/native";
import {useRouterAuth} from "./router";
import {Home} from "./screens/mainScreen/Home";
import {store} from "./redux/store";

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

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
