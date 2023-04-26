import React, {useState} from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Войти</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Адрес электронной почты" />
        <TextInput style={styles.input} secureTextEntry placeholder="Пароль" />

        <TouchableOpacity style={styles.signInBtn} activeOpacity={0.8}>
          <Text style={styles.signInText}>Войти</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
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
