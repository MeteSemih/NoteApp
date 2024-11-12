import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import useAuthStore from "../../store/authStore";
import { getUserProfile } from "../../api/auth";
import { styles } from "./Profile.style";

const ProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const userToken = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userToken);
        setUserData(data);
      } catch (error) {
        console.error("Profil bilgileri alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userToken]);

  const handleLogout = () => {
    logout();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Bilgileri</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : userData ? (
        <>
          <Text>Ad: {userData.name || "Bilinmiyor"}</Text>
          <Text>Email: {userData.email || "Bilinmiyor"}</Text>
          <Button title="Çıkış Yap" onPress={handleLogout} />
        </>
      ) : (
        <Text>Kullanıcı bilgileri alınamadı.</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
