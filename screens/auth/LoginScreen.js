import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {authSignInUser} from "../../redux/auth/authOperations";
import {useDispatch} from "react-redux";

const initialState = {email: "", password: ""};

export const LoginScreen = ({navigation: {navigate}}) => {
  const [data, setData] = useState(initialState);
  const [isShowKeyboadr, setIsShowKeyboadr] = useState(false);

  const dispatch = useDispatch();

  const handleShowKeyboard = () => {
    setIsShowKeyboadr(true);
  };
  const handleHideKeyboard = () => {
    setIsShowKeyboadr(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    dispatch(authSignInUser(data));
    setData(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideKeyboard}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/photoBG.jpg")}
          style={styles.bgImg}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.formWrap}>
              <View
                style={{
                  ...styles.wrap,
                  marginBottom: isShowKeyboadr ? 0 : 78,
                }}
              >
                <Text style={styles.title}>Войти</Text>
                <View style={styles.form} onSubmitEditing={handleHideKeyboard}>
                  <TextInput
                    style={styles.input}
                    placeholder="Адрес электронной почты"
                    value={data.email}
                    onFocus={() => {
                      handleShowKeyboard();
                    }}
                    onChangeText={(email) => {
                      setData((prevS) => ({...prevS, email}));
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    value={data.password}
                    onFocus={() => {
                      handleShowKeyboard();
                    }}
                    onChangeText={(password) => {
                      setData((prevS) => ({...prevS, password}));
                    }}
                    secureTextEntry
                  />
                  {!isShowKeyboadr && (
                    <TouchableOpacity
                      style={styles.signInBtn}
                      activeOpacity={0.8}
                      onPress={onSubmit}
                    >
                      <Text style={styles.signInText}>Войти</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {!isShowKeyboadr && (
                  <View style={styles.linkBox}>
                    <Text style={styles.link}>Нет аккаунта? </Text>
                    <TouchableOpacity onPress={() => navigate("Registration")}>
                      <Text style={styles.link}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
  },

  form: {
    marginBottom: 16,
  },

  title: {
    marginTop: 32,
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.3,
    color: "#212121",
  },

  input: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
  },

  signInBtn: {
    marginTop: 33,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    fontFamily: "Roboto-Regular",
  },

  signInText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  linkBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },

  container: {
    flex: 1,
  },

  bgImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  formWrap: {
    justifyContent: "flex-end",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
});
