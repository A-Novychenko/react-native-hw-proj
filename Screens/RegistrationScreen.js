import React, {useState} from "react";
import {StyleSheet, View, TextInput, Image, Button, Text} from "react-native";
export const RegistrationScreen = () => {
  return (
    <View style={styles.formWrap}>
      <View style={styles.avatar}>
        <Image style={styles.avatarImg} />
        <Button title="+" />
      </View>
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="Зарегистрироваться" />
      </View>
      <Text>LINK!!!--Уже есть аккаунт? Войти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrap: {
    position: "relative",
    marginHorizontal: 16,
  },

  inputBox: {
    // flex: 1,
  },

  avatar: {
    position: "absolute",
    top: 0,
    left: 0,
    // width: 120,
    // height: 120,
  },
  avatarImg: {
    width: 120,
    height: 120,
  },

  title: {
    marginTop: 92,
  },

  input: {
    backgroundColor: "green",
    marginBottom: 10,
  },
});
