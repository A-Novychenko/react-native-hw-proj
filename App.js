import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

import React, {useCallback, useEffect, useState} from "react";
import {ImageBackground, KeyboardAvoidingView} from "react-native";

import {RegistrationScreen} from "./Screens/RegistrationScreen";
import {LoginScreen} from "./Screens/LoginScreen";

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };
  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("./assets/img/photoBG.jpg")}
          style={styles.bgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrap}>
              {/* <RegistrationScreen
                isShowKeyboadr={isShowKeyboadr}
                handleHideKeyboard={handleHideKeyboard}
                handleShowKeyboard={handleShowKeyboard}
              /> */}
              <LoginScreen
                isShowKeyboadr={isShowKeyboadr}
                handleHideKeyboard={handleHideKeyboard}
                handleShowKeyboard={handleShowKeyboard}
                dimensions={dimensions}
              />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrap: {
    justifyContent: "flex-end",
    alignItems: "center",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
});
