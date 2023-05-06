import {useEffect, useState} from "react";

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from "react-native";

const initialState = {name: "", location: ""};

export const CreatePostsScreen = () => {
  const [data, setData] = useState(initialState);
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width - 16 * 2;
  //     setDimensions(width);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };
  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log("data", data);
    setData(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View
        style={{
          ...styles.container,

          justifyContent: isShowKeyboadr ? "flex-end" : "flex-start",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View>
            <View style={styles.imgBox}>
              <Image
                source={require("../../assets/img/forest.jpg")}
                style={styles.postImg}
              />

              <Text style={styles.changePhoto}>Редактировать фото</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Название..."
              value={data.name}
              onFocus={() => {
                handleShowKeyboard();
              }}
              onChangeText={(name) => {
                setData((prevS) => ({...prevS, name}));
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Местность..."
              value={data.location}
              onFocus={() => {
                handleShowKeyboard();
              }}
              onChangeText={(location) => {
                setData((prevS) => ({...prevS, location}));
              }}
            />

            <TouchableOpacity
              style={styles.publish}
              activeOpacity={0.8}
              onPress={onSubmit}
            >
              <Text style={styles.publishText}>Опубликовать</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
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
  },
  postImg: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
  },

  input: {
    padding: 16,
    marginBottom: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",

    // fontFamily: "Roboto-Regular",
  },

  changePhoto: {
    // fontFamily: 'Roboto',

    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },

  publish: {
    marginTop: 33,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    // fontFamily: "Roboto-Regular",
  },
  publishText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
