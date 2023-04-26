// import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import React from "react";
import {ImageBackground} from "react-native";
import {RegistrationScreen} from "./Screens/RegistrationScreen";
import {LoginScreen} from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/img/photoBG.jpg")}
        style={styles.bgImg}
      >
        <View style={styles.formWrap}>
          {/* <RegistrationScreen /> */}
          <LoginScreen />
        </View>
      </ImageBackground>
    </View>
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
    backgroundColor: "#fff",

    justifyContent: "flex-end",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
