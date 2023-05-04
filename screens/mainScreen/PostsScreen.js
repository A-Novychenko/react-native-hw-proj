import {Text, StyleSheet, View, Image} from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.avatar} />
        <View>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    // alignItems: "center",
    // justifyContent: "center",
  },

  wrapper: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 32,
    // width: 171,
    height: 60,
    backgroundColor: "#885",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#185",
  },
});
