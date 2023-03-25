import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HW-2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

// {
//   "name": "awesomeproject",
//   "version": "1.0.0",
//   "main": "node_modules/expo/AppEntry.js",
//   "scripts": {
//     "start": "expo start",
//     "android": "expo start --android",
//     "ios": "expo start --ios",
//     "web": "expo start --web"
//   },
//   "dependencies": {
//     "expo": "~48.0.9",
//     "expo-status-bar": "~1.4.4",
//     "react": "18.2.0",
//     "react-native": "0.71.4"
//   },
//   "devDependencies": {
//     "@babel/core": "^7.20.0"
//   },
//   "private": true
// }
