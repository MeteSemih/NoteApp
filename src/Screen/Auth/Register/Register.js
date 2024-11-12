import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Register.style";
import { register } from "../../../api/auth";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.length < 8) {
      setPasswordError("Şifre en az 8 karakter olmalıdır");
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async () => {
    if (password.length < 8) {
      Alert.alert("Hata", "Şifre en az 8 karakter olmalıdır");
      return;
    }

    try {
      await register(name, email, password);
      navigation.navigate("Login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setRegisterError(error.response.data.msg);
      } else {
        console.log("Kayıt başarısız", error);
        setRegisterError("Bir hata oluştu, lütfen tekrar deneyin.");
      }
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
      <View style={styles.header}>
        <Text style={styles.register_text}>Kayıt Ol</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.already_text}>Zaten bir hesabın var mı ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.input_container_head}>
        <View style={styles.input_container}>
          <Text style={styles.textInput_text}>Name</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.textInput_text}>Email</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.textInput_text}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
          {registerError ? (
            <Text style={styles.errorText}>{registerError}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          style={styles.register_button}
        >
          <Text style={styles.button_text}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
