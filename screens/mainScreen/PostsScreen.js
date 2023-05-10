import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {Feather, FontAwesome} from "@expo/vector-icons";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userBox}>
        <Image
          source={require("../../assets/img/avatarPlaceholder.jpg")}
          style={styles.avatar}
        />
        <View style={styles.textBox}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text>email@example.com</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentBox}>
          <View>
            <Image
              source={require("../../assets/img/forest.jpg")}
              style={styles.postImg}
            />

            <Text style={styles.title}>Лес</Text>

            <View style={styles.infoBox}>
              <View style={styles.infoInnerBox}>
                <FontAwesome
                  name="comment-o"
                  size={18}
                  color="#BDBDBD"
                  style={styles.infoIcon}
                />

                <Text style={styles.textComments}>0</Text>
              </View>
              <View style={styles.infoInnerBox}>
                <Feather
                  name="map-pin"
                  size={18}
                  color="#BDBDBD"
                  style={styles.infoIcon}
                />
                <Text style={styles.textLocation}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/img/blackSea.jpg")}
              style={styles.postImg}
            />

            <Text style={styles.title}>Закат на Черном море</Text>

            <View style={styles.infoBox}>
              <View style={styles.infoInnerBox}>
                <FontAwesome
                  name="comment-o"
                  size={18}
                  color="#BDBDBD"
                  style={styles.infoIcon}
                />

                <Text style={styles.textComments}>0</Text>
              </View>
              <View style={styles.infoInnerBox}>
                <Feather
                  name="map-pin"
                  size={18}
                  color="#BDBDBD"
                  style={styles.infoIcon}
                />
                <Text style={styles.textLocation}>Odessa, Ukraine</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  name: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
    fontWeight: 700,

    color: "#212121",
  },
  mail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },

  contentBox: {
    gap: 32,
    marginBottom: 43,
    justifyContent: "center",
    alignItems: "center",
  },

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
