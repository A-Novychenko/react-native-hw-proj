import {useEffect, useState, useRef} from "react";
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
  // Dimensions,
  Platform,
} from "react-native";
import {Camera} from "expo-camera";
import * as Location from "expo-location";
import {db, storage} from "../../firebase/config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {collection, addDoc} from "firebase/firestore";
import {useSelector} from "react-redux";

import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = ({navigation}) => {
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [locationTitle, setLocationTitle] = useState("");
  const [location, setLocation] = useState(null);

  const {userId, login} = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let locationRes = await Location.getCurrentPositionAsync({});
      setLocation(locationRes);
    })();
  }, []);

  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 16 * 2
  // );

  const isDataFilled = title && locationTitle && photo !== ("" || null);

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

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const tekePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
    // setLocation(location);
  };

  const uploadPhotoToServer = async () => {
    const resp = await fetch(photo);
    // const resp = await MediaLibrary.getAssetAsync();
    const file = await resp.blob();
    const uniquePostId = Date.now().toString();

    const storageRef = ref(storage, `postsImages/${uniquePostId}`);
    const res = await uploadBytes(storageRef, file);
    const processedPhoto = await getDownloadURL(
      ref(storage, `postsImages/${uniquePostId}`)
    );

    return processedPhoto;
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    const createPost = await addDoc(collection(db, "posts"), {
      photo,
      title,
      locationTitle,
      location: location,
      userId,
      login,
    });
  };

  const sendPhoto = () => {
    uploadPostToServer();

    setPhoto(null);
    setTitle("");
    setLocationTitle("");
    navigation.navigate("DefaultPosts");
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
                  {/* <Camera style={styles.imgBackground} ref={setCamera}>
                    {photo && (
                      <View style={styles.postImg}>
                        <Image
                          source={{uri: photo}}
                          style={{
                            width: 343,
                            height: 240,
                          }}
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
                  </Camera> */}
                  {/* <Camera style={styles.camera} type={type} ref={setCameraRef}> */}
                  <Camera
                    style={styles.imgBackground}
                    type={type}
                    ref={setCameraRef}
                  >
                    {photo && (
                      <View style={styles.postImg}>
                        <Image
                          source={{uri: photo}}
                          style={{
                            width: 343,
                            height: 240,
                          }}
                        />
                      </View>
                    )}
                    {/* <View style={styles.photoView}> */}
                    <View>
                      <TouchableOpacity
                        style={styles.flipContainer}
                        onPress={() => {
                          setType(
                            type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                          );
                        }}
                      >
                        {/* <Text
                          style={{
                            fontSize: 18,
                            marginBottom: 10,
                            color: "white",
                          }}
                        >
                          Flip
                        </Text> */}
                      </TouchableOpacity>
                      {/* <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                          if (cameraRef) {
                            const {uri} = await cameraRef.takePictureAsync();
                            await MediaLibrary.createAssetAsync(uri);
                            setPhoto(uri);
                          }
                        }}
                      >
                        <View style={styles.takePhotoOut}>
                          <View style={styles.takePhotoInner}></View>
                        </View>
                      </TouchableOpacity> */}
                    </View>

                    <TouchableOpacity
                      style={styles.cameraBtnBox}
                      activeOpacity={0.8}
                      onPress={async () => {
                        if (cameraRef) {
                          const {uri} = await cameraRef.takePictureAsync();
                          await MediaLibrary.createAssetAsync(uri);
                          setPhoto(uri);
                        }
                      }}
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
                value={title}
                onFocus={() => {
                  handleShowKeyboard();
                }}
                onChangeText={(title) => {
                  setTitle(title);
                }}
              />

              <View style={styles.inputLocation}>
                <TextInput
                  style={{...styles.input, paddingLeft: 40}}
                  placeholder="Местность..."
                  value={locationTitle}
                  onFocus={() => {
                    handleShowKeyboard();
                  }}
                  onChangeText={(locationTitle) => {
                    setLocationTitle(locationTitle);
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

  ///
  camera: {flex: 1},
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: {alignSelf: "center"},

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
  //////
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
    width: 343,
    height: 240,

    borderRadius: 8,
    marginBottom: 8,
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
