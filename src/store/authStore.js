import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  loadToken: async () => {
    const savedToken = await AsyncStorage.getItem("token");
    if (savedToken) {
      set({ token: savedToken });
    }
  },

  login: async (userToken) => {
    set({ token: userToken });
    await AsyncStorage.setItem("token", userToken);
  },

  logout: async () => {
    set({ user: null, token: null });
    await AsyncStorage.removeItem("token");
  },
}));

export default useAuthStore;
