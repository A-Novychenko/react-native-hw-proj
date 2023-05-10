import {useEffect, useState} from "react";
import {MaterialIcons, Feather} from "@expo/vector-icons";

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
  Button,
} from "react-native";
import {Camera} from "expo-camera";

const initialState = {name: "", location: ""};

export const CreatePostsScreen = () => {
  const [data, setData] = useState(initialState);
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);

  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const isDataFilled = data.name && data.location !== "";

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
            <View>
              <View style={styles.imgContainer}>
                <View style={styles.imgBox}>
                  {/* <Image
                source={require("../../assets/img/forest.jpg")}
                style={styles.postImg}
              /> */}
                  <View style={styles.imgBackground}>
                    <TouchableOpacity
                      style={styles.cameraBtnBox}
                      activeOpacity={0.8}
                      onPress={() => alert("Die Kamera funktioniert nicht!")}
                    >
                      <MaterialIcons
                        name="camera-alt"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Camera style={{width: 300, height: 300}}>
                  <Text>Camera</Text>
                </Camera>

                {!isDataFilled && (
                  <Text style={styles.changePhoto}>Загрузите фото</Text>
                )}
                {isDataFilled && (
                  <Text style={styles.changePhoto}>Редактировать фото</Text>
                )}
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

              <View style={styles.inputLocation}>
                <TextInput
                  style={{...styles.input, paddingLeft: 40}}
                  placeholder="Местность..."
                  value={data.location}
                  onFocus={() => {
                    handleShowKeyboard();
                  }}
                  onChangeText={(location) => {
                    setData((prevS) => ({...prevS, location}));
                  }}
                />
                <Feather name="map-pin" size={18} style={styles.inputIcon} />
              </View>

              <TouchableOpacity
                style={{
                  ...styles.publish,
                  backgroundColor: isDataFilled ? "#FF6C00" : "#F6F6F6",
                }}
                activeOpacity={0.8}
                onPress={onSubmit}
                disabled={!isDataFilled}
              >
                <Text
                  style={{
                    ...styles.publishText,
                    color: isDataFilled ? "#FFFFFF" : "#BDBDBD",
                  }}
                >
                  Опубликовать
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.deleteBtnWrap}>
              <View style={styles.deleteBtn}>
                <TouchableOpacity>
                  <Feather name="trash-2" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
            </View>
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

  imgContainer: {
    marginVertical: 32,
  },
  imgBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  imgBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    marginBottom: 8,

    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  cameraBtnBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
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
    fontFamily: "Roboto-Regular",
  },

  inputLocation: {
    position: "relative",
  },
  inputIcon: {
    color: "#BDBDBD",
    position: "absolute",
    top: 16,
    left: 16,
  },

  changePhoto: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    paddingLeft: 10,
  },

  publish: {
    marginTop: 33,

    borderRadius: 100,
    padding: 16,
    fontFamily: "Roboto-Regular",
  },
  publishText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  deleteBtnWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
});
