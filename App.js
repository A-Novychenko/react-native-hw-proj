// import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

import React from "react";
import {ImageBackground} from "react-native";
import {RegistrationScreen} from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/img/photoBG.jpg")}
        style={styles.bgcImg}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bgcImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
