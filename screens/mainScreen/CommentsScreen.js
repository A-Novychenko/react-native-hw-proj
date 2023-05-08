import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.imgBox}>
          <Image
            source={require("../../assets/img/forest.jpg")}
            style={styles.postImg}
          />
        </View>
        <View style={styles.commentBox}>
          <View style={styles.commentItem}>
            <Image style={styles.commentAvatar} />
            <View style={styles.commentInner}>
              <Text style={styles.commentText}>
                Lorem LoremLorem LoremLorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem
              </Text>

              <Text style={styles.commentData}>01/01/23 23:00</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Комментировать..."
            value=""
            // onFocus={() => {
            //   handleShowKeyboard();
            // }}
            // onChangeText={(email) => {
            //   setData((prevS) => ({...prevS, email}));
            // }}
          />
          <TouchableOpacity
            style={styles.sendBtn}
            activeOpacity={0.8}
            // onPress={onSubmit}
          >
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
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
  },
  commentItem: {
    flexDirection: "row",

    gap: 16,
  },
  commentAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "grey",
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
    fontSize: 16,
    lineHeight: 19,
    marginRight: 0,
  },

  commentData: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",

    color: "#BDBDBD",
  },
  inputBox: {
    position: "relative",
    justifyContent: "flex-end",
  },
  input: {
    padding: 16,
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
