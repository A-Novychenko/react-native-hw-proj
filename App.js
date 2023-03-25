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
        <View style={styles.formWrap}>
          <RegistrationScreen />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formWrap: {
    backgroundColor: "#fff",

    justifyContent: "flex-end",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  bgcImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
