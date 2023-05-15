import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {Feather, FontAwesome} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/config";
import {useSelector} from "react-redux";

export const DefaultPostsScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const {email, login} = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));

    setPosts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };

  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image
          source={require("../../assets/img/avatarPlaceholder.jpg")}
          style={styles.avatar}
        />
        <View style={styles.textBox}>
          <Text style={styles.name}>{login}</Text>
          <Text style={styles.mail}>{email}</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        style={{marginBottom: 43}}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({item}) => (
          <View style={styles.contentBox}>
            <View style={styles.contentItem}>
              <Image source={{uri: item.photo}} style={styles.postImg} />

              <Text style={styles.title}>{item.title}</Text>

              <View style={styles.infoBox}>
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
                      <FontAwesome name="comment" size={18} color="#FF6C00" />
                    )}
                  </TouchableOpacity>

                  <Text
                    style={{
                      ...styles.textComments,
                      color: item.comments?.length > 0 ? "#212121" : "#BDBDBD",
                    }}
                  >
                    {item.comments?.length ?? 0}
                  </Text>
                </View>
                <View style={styles.infoInnerBox}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Map", {location: item.location});
                    }}
                  >
                    <Feather
                      name="map-pin"
                      size={18}
                      color="#BDBDBD"
                      style={styles.infoIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textLocation}>{item.locationTitle}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
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
    justifyContent: "center",
    alignItems: "center",
  },
  contentItem: {
    marginBottom: 32,
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
    marginLeft: 6,

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
