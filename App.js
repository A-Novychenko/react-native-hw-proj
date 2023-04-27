// import {StatusBar} from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import React, {useCallback, useState} from "react";
import {ImageBackground, KeyboardAvoidingView} from "react-native";
// import {AppLoading} from "expo";
// import * as Font from "expo-font";

import {RegistrationScreen} from "./Screens/RegistrationScreen";
import {LoginScreen} from "./Screens/LoginScreen";

import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

// const loadApplication = async () => {
//   Font.loadAsync({
//     "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);
  // const [isReady, setIsReady] = useState(false);

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };
  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
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
        {/* <View style={styles.container}> */}
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

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
});
