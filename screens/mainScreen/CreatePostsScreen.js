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
import * as Location from "expo-location";

const initialState = {
  name: "",
  locationTitle: "",
  location: {latitude: "", longitude: ""},
  photo: null,
};

export const CreatePostsScreen = ({navigation}) => {
  const [data, setData] = useState(initialState);
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);
  const [camera, setCamera] = useState(null);
  // const [photo, setPhoto] = useState(null);

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

  const tekePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const {status} = await Location.requestForegroundPermissionsAsync();
    const location = await Location.getCurrentPositionAsync({});

    setData((pS) => ({
      ...pS,
      location: {
        latitude: 50.411404,
        longitude: 30.525744,
      },
      photo: photo.uri,
    }));
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultPosts", {data});
    setData(initialState);
  };

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };

  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
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
            <View onSubmitEditing={handleHideKeyboard}>
              <View style={styles.imgContainer}>
                <View style={styles.imgBox}>
                  <Camera style={styles.imgBackground} ref={setCamera}>
                    {data.photo && (
                      <View style={styles.postImg}>
                        <Image
                          source={{uri: data.photo}}
                          style={{width: 343, height: 240}}
                        />
                      </View>
                    )}
                    <TouchableOpacity
                      style={styles.cameraBtnBox}
                      activeOpacity={0.8}
                      onPress={tekePhoto}
                    >
                      <MaterialIcons
                        name="camera-alt"
                        size={24}
                        color="#BDBDBD"
                      />
                    </TouchableOpacity>
                  </Camera>
                </View>

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
                  value={data.locationTitle}
                  onFocus={() => {
                    handleShowKeyboard();
                  }}
                  onChangeText={(locationTitle) => {
                    setData((prevS) => ({...prevS, locationTitle}));
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
                onPress={sendPhoto}
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
    borderRadius: 8,
  },

  imgBackground: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    marginBottom: 8,

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
    position: "absolute",
    top: 0,
    left: 0,

    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "grey",
    // justifyContent: "center",
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
