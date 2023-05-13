import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {Feather, FontAwesome, AntDesign} from "@expo/vector-icons";
import {authSignOutUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/photoBG.jpg")}
        style={styles.bgImg}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.wrap}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImg}
                source={require("../../assets/img/avatarPlaceholder.jpg")}
              />
              <TouchableOpacity style={styles.avatarAdd} activeOpacity={0.8}>
                <Text style={styles.avatarText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{width: 50, height: 50}}
              activeOpacity={0.8}
              onPress={() => {
                dispatch(authSignOutUser());
              }}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Natali Romanova</Text>

            <View style={styles.postList}>
              <View style={styles.post}>
                <Image
                  source={require("../../assets/img/forest.jpg")}
                  style={styles.postImg}
                />
                <View style={styles.contentBox}>
                  <Text style={styles.postTitle}>Лес</Text>

                  <View style={styles.infoBox}>
                    <View style={styles.infoCounts}>
                      <View style={styles.infoInnerBox}>
                        <Text style={styles.infoIcon}>
                          <FontAwesome
                            name="comment"
                            size={18}
                            color="#FF6C00"
                          />
                        </Text>
                        <Text style={styles.textComments}>8</Text>
                      </View>
                      <View style={styles.infoInnerBox}>
                        <Text style={styles.infoIcon}>
                          <AntDesign name="like2" size={18} color="#FF6C00" />
                        </Text>
                        <Text style={styles.textComments}>153</Text>
                      </View>
                    </View>
                    <View style={styles.infoInnerBox}>
                      <Text style={styles.infoIcon}>
                        <Feather
                          name="map-pin"
                          size={18}
                          color="#BDBDBD"
                          style={{marginRight: 4}}
                        />
                      </Text>
                      <Text style={styles.textLocation}>Ukraine</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.post}>
                <Image
                  source={require("../../assets/img/blackSea.jpg")}
                  style={styles.postImg}
                />
                <View style={styles.contentBox}>
                  <Text style={styles.postTitle}>Закат на Черном море</Text>

                  <View style={styles.infoBox}>
                    <View style={styles.infoCounts}>
                      <View style={styles.infoInnerBox}>
                        <Text style={styles.infoIcon}>
                          <FontAwesome
                            name="comment"
                            size={18}
                            color="#FF6C00"
                          />
                        </Text>
                        <Text style={styles.textComments}>3</Text>
                      </View>
                      <View style={styles.infoInnerBox}>
                        <Text style={styles.infoIcon}>
                          <AntDesign name="like2" size={18} color="#FF6C00" />
                        </Text>
                        <Text style={styles.textComments}>200</Text>
                      </View>
                    </View>
                    <View style={styles.infoInnerBox}>
                      <Text style={styles.infoIcon}>
                        <Feather
                          name="map-pin"
                          size={18}
                          color="#BDBDBD"
                          style={{marginRight: 4}}
                        />
                      </Text>
                      <Text style={styles.textLocation}>Ukraine</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.post}>
                <Image
                  source={require("../../assets/img/home.jpg")}
                  style={styles.postImg}
                />

                <Text style={styles.postTitle}>Старый домик в Венеции</Text>

                <View style={styles.infoBox}>
                  <View style={styles.infoCounts}>
                    <View style={styles.infoInnerBox}>
                      <Text style={styles.infoIcon}>
                        <FontAwesome name="comment" size={18} color="#FF6C00" />
                      </Text>
                      <Text style={styles.textComments}>50</Text>
                    </View>
                    <View style={styles.infoInnerBox}>
                      <Text style={styles.infoIcon}>
                        <AntDesign name="like2" size={18} color="#FF6C00" />
                      </Text>
                      <Text style={styles.textComments}>200</Text>
                    </View>
                  </View>
                  <View style={styles.infoInnerBox}>
                    <Text style={styles.infoIcon}>
                      <Feather
                        name="map-pin"
                        size={18}
                        color="#BDBDBD"
                        style={{marginRight: 4}}
                      />
                    </Text>
                    <Text style={styles.textLocation}>Italy</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  wrap: {
    position: "relative",

    marginTop: 147,
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  userBox: {
    flexDirection: "row",

    marginVertical: 32,
    height: 60,
  },
  avatar: {
    position: "absolute",
    top: 0,

    left: "50%",
    transform: [{translateX: -45}, {translateY: -60}],

    width: 60,
    height: 60,
    borderRadius: 16,
    zIndex: 9999,
  },
  avatarImg: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  avatarAdd: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{translateX: 105}, {translateY: 80}],

    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    borderRadius: 12.5,
    overflow: "hidden",
  },

  avatarText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FF6C00",
    textAlign: "center",
    zIndex: 999,
  },

  title: {
    marginTop: 92,
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    color: "#212121",
  },
  textBox: {
    justifyContent: "center",
    marginLeft: 8,
  },
  postList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
    marginBottom: 43,
  },

  postImg: {
    width: 343,
    height: 240,

    borderRadius: 8,
    marginBottom: 8,
  },

  postTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,

    color: "#212121",
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoInnerBox: {
    flexDirection: "row",
  },
  infoCounts: {
    flexDirection: "row",
    gap: 24,
  },

  textComments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
    color: "#212121",
    // color: "#BDBDBD",
  },
  textLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },

  infoIcon: {
    marginRight: 3,
  },
});
