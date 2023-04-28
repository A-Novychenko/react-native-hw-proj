import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const initialState = {login: "", email: "", password: ""};

export const RegistrationScreen = ({
  isShowKeyboadr,
  handleHideKeyboard,
  handleShowKeyboard,
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
      }}
    >
      <View
        style={{
          ...styles.avatar,
          transform: isShowKeyboadr
            ? [{translateX: -55}, {translateY: -234}]
            : [{translateX: -55}, {translateY: -280}],
        }}
      >
        <Image style={styles.avatarImg} />
        <TouchableOpacity style={styles.avatarAdd} activeOpacity={0.8}>
          <Text style={styles.avatarText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form} onSubmitEditing={handleHideKeyboard}>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          value={data.login}
          onFocus={() => {
            handleShowKeyboard();
          }}
          onChangeText={(login) => {
            setData((prevS) => ({...prevS, login}));
          }}
        />
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
            <Text style={styles.signInText}>Зарегистрироваться</Text>
          </TouchableOpacity>
        )}
      </View>
      {!isShowKeyboadr && (
        <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
    marginHorizontal: 16,
  },

  avatar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{translateX: -55}, {translateY: -292}],
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
    marginTop: 92,
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    color: "#212121",
  },

  form: {
    marginBottom: 16,
  },

  input: {
    padding: 16,
    marginBottom: 10,
    height: 50,
    backgroundColor: "#F6F6F6",
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
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  link: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
