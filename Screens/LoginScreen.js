import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const initialState = {email: "", password: ""};

export const LoginScreen = ({
  isShowKeyboadr,
  handleHideKeyboard,
  handleShowKeyboard,
  dimensions,
}) => {
  const [data, setData] = useState(initialState);

  const onSubmit = () => {
    console.log("data", data);
    setData(initialState);
  };

  return (
    <View
      style={{
        ...styles.wrap,
        marginBottom: isShowKeyboadr ? 0 : 78,
        width: dimensions,
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
        <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "relative",

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

  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "center",
  },
});
