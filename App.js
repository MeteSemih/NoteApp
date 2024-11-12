// App.js
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Router from "./src/Router";
import useAuthStore from "./src/store/authStore"; 

export default function App() {
  const loadToken = useAuthStore((state) => state.loadToken); // loadToken işlevini alın

  useEffect(() => {
    loadToken(); 
  }, []);

  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
