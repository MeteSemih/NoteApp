// src/Home.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Home.style";
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Sayfa</Text>
      <Text style={styles.subtitle}>Hoş geldiniz!</Text>
      <Button
        title="Giriş Yap"
        onPress={() => navigation.navigate("Login")} // Giriş sayfasına yönlendir
      />
      <Button
        title="Kayıt Ol"
        onPress={() => navigation.navigate("Register")} // Kayıt sayfasına yönlendir
      />
    </View>
  );
};

export default Home;
