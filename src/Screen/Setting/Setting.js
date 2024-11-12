import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useAuthStore from "../../store/authStore"; 

const Setting = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <Button title="Çıkış Yap" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Setting;
