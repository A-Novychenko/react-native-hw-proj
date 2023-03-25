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
    <View style={styles.formWrap}>
      <View style={styles.avatar}>
        <Image style={styles.avatarImg} />
        <TouchableOpacity style={styles.avatarAdd} activeOpacity={0.8}>
          <Text style={styles.avatarText}>+</Text>
        </TouchableOpacity>
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
    top: "50%",
    left: "50%",
    transform: [{translateX: -55}, {translateY: -210}],

    //   !!!!!!!!!!!!!как задать в процентах или как это правильно сделать в реакт???
  },
  avatarImg: {
    width: 120,
    height: 120,
    backgroundColor: "red",
  },

  avatarAdd: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{translateX: 105}, {translateY: 80}],

    //   !!!!!!!!!!!!!как задать в процентах или как это правильно сделать в реакт???

    width: 25,
    height: 25,
    border: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    borderRadius: 12.5,
  },

  avatarText: {
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 20,
    color: "#FF6C00",
  },

  title: {
    marginTop: 92,
  },

  input: {
    backgroundColor: "green",
    marginBottom: 10,
  },
});
