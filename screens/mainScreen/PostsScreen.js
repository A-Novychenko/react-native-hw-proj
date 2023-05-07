import {Text, StyleSheet, View, Image, Button} from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          source={require("../../assets/img/avatarPlaceholder.jpg")}
          style={styles.avatar}
        />
        <View style={styles.textBox}>
          <Text>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
      <View style={styles.post}>
        <Image
          source={require("../../assets/img/forest.jpg")}
          style={styles.postImg}
        />

        <Text style={styles.title}>Лес</Text>

        <View style={styles.infoBox}>
          <View style={styles.infoInnerBox}>
            <Text style={styles.infoIcon}>Icon</Text>
            <Text style={styles.textComments}>0</Text>
          </View>
          <View style={styles.infoInnerBox}>
            <Text style={styles.infoIcon}>Icon</Text>
            <Text style={styles.textLocation}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  userBox: {
    flexDirection: "row",
    // marginTop: 32,
    marginVertical: 32,
    height: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  textBox: {
    justifyContent: "center",
    marginLeft: 8,
  },
  post: {},
  postImg: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoInnerBox: {
    flexDirection: "row",
  },

  textComments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  textLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },

  infoIcon: {
    marginRight: 3,
  },
});
