import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { styles } from "./Login.style";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { login as loginApi } from "../../../api/auth"; 
import useAuthStore from "../../../store/authStore";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      const response = await loginApi(email, password);
      await login(response.token);
  ;

      navigation.reset({
        index: 0,
       
      });
    } catch (error) {
      console.log("Giriş başarısız", error);
      Alert.alert("Hata", "Giriş yapılamadı. Lütfen tekrar deneyin.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>
        By signing in you are agreeing our{" "}
        <Text style={styles.link}>Term and privacy policy</Text>
      </Text>

      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <Feather name="mail" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Feather name="eye" size={20} color="gray" style={styles.iconRight} />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or connect with</Text>

      <View style={styles.socialContainer}>
        <FontAwesome name="facebook" size={30} color="#3b5998" />
        <FontAwesome name="instagram" size={30} color="#e1306c" />
        <FontAwesome name="pinterest" size={30} color="#bd081c" />
        <FontAwesome name="linkedin" size={30} color="#0077b5" />
      </View>

      <View style={styles.touchLoginContainer}>
        <Image
          source={{ uri: "https://your-touch-icon-url.com" }}
          style={styles.touchIcon}
        />
        <Text style={styles.touchLoginText}>Login with touch</Text>
      </View>
    </SafeAreaView>
  );
}
