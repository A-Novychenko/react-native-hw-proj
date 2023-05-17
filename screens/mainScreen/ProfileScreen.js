import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import {Feather, FontAwesome, AntDesign} from "@expo/vector-icons";
import {collection, query, where, getDocs} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";
import {authSignOutUser} from "../../redux/auth/authOperations";
import {useEffect, useState} from "react";
import {db} from "../../firebase/config";

export const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const {userId, login} = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    try {
      const q = query(
        collection(db, "posts"),
        where("userId", "==", userId, true)
      );

      const querySnapshot = await getDocs(q);

      setUserPosts(
        querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
      );
    } catch (error) {
      console.log("error", error.message);
    }
  };

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
              style={{width: 50, height: 50, marginLeft: "auto", marginTop: 24}}
              activeOpacity={0.8}
              onPress={() => {
                dispatch(authSignOutUser());
              }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <Text style={styles.title}>{login}</Text>

            <FlatList
              data={userPosts}
              style={{marginBottom: 43}}
              scrollEnabled={false}
              keyExtractor={(item, idx) => idx.toString()}
              renderItem={({item}) => (
                <View style={styles.postList}>
                  <View style={styles.post}>
                    <Image source={{uri: item.photo}} style={styles.postImg} />
                    <View style={styles.contentBox}>
                      <Text style={styles.postTitle}>{item.title}</Text>

                      <View style={styles.infoBox}>
                        <View style={styles.infoCounts}>
                          <View style={styles.infoInnerBox}>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate("Comments", {
                                  postId: item.id,
                                  photo: item.photo,
                                });
                              }}
                            >
                              {!item.comments && (
                                <FontAwesome
                                  name="comment-o"
                                  size={18}
                                  color="#BDBDBD"
                                  style={styles.infoIcon}
                                />
                              )}
                              {item.comments && item.comments.length === 0 && (
                                <FontAwesome
                                  name="comment-o"
                                  size={18}
                                  color="#BDBDBD"
                                  style={styles.infoIcon}
                                />
                              )}
                              {item.comments && item.comments.length > 0 && (
                                <FontAwesome
                                  name="comment"
                                  size={18}
                                  color="#FF6C00"
                                />
                              )}
                            </TouchableOpacity>

                            <Text
                              style={{
                                ...styles.textComments,
                                color:
                                  item.comments?.length > 0
                                    ? "#212121"
                                    : "#BDBDBD",
                              }}
                            >
                              {item.comments?.length ?? 0}
                            </Text>
                          </View>
                          <View style={styles.infoInnerBox}>
                            <Text style={styles.infoIcon}>
                              <AntDesign
                                name="like2"
                                size={18}
                                color="#FF6C00"
                              />
                            </Text>
                            <Text style={styles.textComments}>
                              {Math.floor(Math.random() * 500)}
                            </Text>
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

                          <Text style={styles.textLocation}>
                            {item.locationTitle}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
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
    marginVertical: 32,

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
