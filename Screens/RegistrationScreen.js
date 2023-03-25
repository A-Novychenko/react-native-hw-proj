import React, {useState} from "react";
import {StyleSheet, View, TextInput, Image, Button, Text} from "react-native";
export const RegistrationScreen = () => {
  return (
    <View>
      <View>
        <Image />
        <Button title="+" />
      </View>
      <Text>Регистрация</Text>
      <View>
        <TextInput />
        <TextInput />
        <TextInput />
        <Button title="Зарегистрироваться" />
      </View>
      <Text>LINK!!!--Уже есть аккаунт? Войти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {},
});
