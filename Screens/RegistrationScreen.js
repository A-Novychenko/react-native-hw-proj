import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatar}>
        <Image style={styles.avatarImg} />
        <TouchableOpacity style={styles.avatarAdd} activeOpacity={0.8}>
          <Text style={styles.avatarText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Логин" />
        <TextInput style={styles.input} placeholder="Адрес электронной почты" />
        <TextInput style={styles.input} secureTextEntry placeholder="Пароль" />

        <TouchableOpacity style={styles.signInBtn} activeOpacity={0.8}>
          <Text style={styles.signInText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.link}>Уже есть аккаунт? Войти</Text>
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

  avatar: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{translateX: -55}, {translateY: -328}],
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
    fontSize: 16,
    color: "#FF6C00",
    zIndex: 999,
    textAlign: "center",
  },

  title: {
    marginTop: 92,
    marginBottom: 32,
    // font-family: 'Roboto';
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    // letterSpacing: "0.01em",  !!!!!!!!!!!!!!!!!!!!!!!!    ========  ?????????????????????

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
  },

  signInBtn: {
    marginTop: 33,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
  },

  signInText: {
    // font-family: 'Roboto',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  link: {
    marginBottom: 78,
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",

    textAlign: "center",
  },
});
