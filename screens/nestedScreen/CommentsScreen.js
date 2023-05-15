import {useEffect, useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import {useSelector} from "react-redux";
import {doc, updateDoc, arrayUnion, getDoc} from "firebase/firestore";
import {AntDesign} from "@expo/vector-icons";

import {db} from "../../firebase/config";
import {getTimeComment} from "../../utils/getTimeComment";

export const CommentsScreen = ({route}) => {
  const {postId, photo} = route.params;
  const [allComments, setAllComments] = useState([]);
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);

  const [comment, setComment] = useState("");
  const {login} = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);

  const createPost = async () => {
    try {
      const washingtonRef = doc(db, "posts", postId);

      await updateDoc(washingtonRef, {
        comments: arrayUnion({comment, login, time: Date.now().toString()}),
      });

      setComment("");

      console.log("document updated");
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPosts = async () => {
    try {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setAllComments(docSnap.data().comments);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("GET ERROR", error);
    }
  };

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };
  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.post}>
            {!isShowKeyboadr && (
              <View style={styles.imgBox}>
                <Image source={{uri: photo}} style={styles.postImg} />
              </View>
            )}
            <FlatList
              data={allComments}
              keyExtractor={(item, idx) => idx.toString()}
              style={{height: isShowKeyboadr ? 280 : 200}}
              renderItem={({item}) => (
                <View style={styles.scrollView}>
                  <View style={styles.commentBox}>
                    <View
                      style={{
                        ...styles.commentItem,
                        flexDirection:
                          login === item.login ? "row-reverse" : "row",
                      }}
                    >
                      {/* <Image
                        style={styles.commentAvatar}
                        source={require("../../assets/img/avatarGuest.jpg")}
                      /> */}
                      <Text style={styles.commentAvatar}>{item.login[0]}</Text>
                      <View
                        style={{
                          ...styles.commentInner,
                          borderTopLeftRadius: login === item.login ? 6 : 0,
                          borderTopRightRadius: login === item.login ? 0 : 6,
                        }}
                      >
                        <Text style={styles.commentText}>{item.comment}</Text>

                        <Text
                          style={{
                            ...styles.commentData,
                            textAlign: login === item.login ? "left" : "right",
                          }}
                        >
                          {getTimeComment(item.time)}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
            <View style={styles.inputBox} onSubmitEditing={handleHideKeyboard}>
              <TextInput
                style={styles.input}
                placeholder="Комментировать..."
                value={comment}
                onFocus={() => {
                  handleShowKeyboard();
                }}
                onChangeText={(comment) => {
                  setComment(comment);
                }}
              />
              <TouchableOpacity
                style={styles.sendBtn}
                activeOpacity={0.8}
                onPress={createPost}
              >
                <Text style={styles.sendText}>
                  <AntDesign name="arrowup" size={18} color="#FFFFFF" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  imgBox: {
    marginVertical: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  postImg: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textComments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },

  commentBox: {
    marginBottom: 32,
    gap: 24,
  },

  commentItem: {
    gap: 16,
  },

  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#212121",
    color: "#FFFFFF",
    textTransform: "uppercase",
    textAlign: "center",
    textAlignVertical: "center",
  },

  commentInner: {
    width: 300,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",

    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },

  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    marginRight: 0,
    marginBottom: 8,

    color: "#212121",
  },

  commentData: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,

    color: "#BDBDBD",
  },

  inputBox: {
    position: "relative",
  },

  input: {
    padding: 16,
    paddingRight: 54,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },

  sendBtn: {
    position: "absolute",
    top: 12,
    right: 12,

    width: 34,
    height: 34,

    borderRadius: 17,
    color: "#fff",
    backgroundColor: "#FF6C00",
  },
  sendText: {
    fontSize: 10,
    textAlign: "center",
    paddingVertical: 10,
    color: "#fff",
  },
});
