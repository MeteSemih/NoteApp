import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home"; // Ana sayfa bileşeni
import Register from "./Screen/Auth/Register"; // Kayıt bileşeni
import Login from "./Screen/Auth/Login"; // Giriş bileşeni
import Note from "./Screen/Note/"; // Not bileşeni
import Profile from "./Screen/Profile"; // Profil bileşeni
import Setting from "./Screen/Setting"; // Ayarlar bileşeni
import CreateNote from "./Screen/CreateNote/"; // Not oluşturma bileşeni
import NoteDetail from "./Screen/NoteDetails"; // Not detay bileşeni
import useAuthStore from "./store/authStore"; // AuthStore'u içe aktarın
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Notlarım">
    <Drawer.Screen name="Notlarım" component={Note} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Setting" component={Setting} />
    <Drawer.Screen name="AddNote" component={CreateNote} />
    <Drawer.Screen name="NoteDetail" component={NoteDetail} /> 
  </Drawer.Navigator>
);

const Router = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <NavigationContainer>
      {token ? (
        <DrawerNavigation />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Router;
