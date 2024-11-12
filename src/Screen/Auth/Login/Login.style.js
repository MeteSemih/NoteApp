import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: "blue",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  link: {
    color: "blue",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  activeTab: {
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 12,
  },
  iconRight: {
    position: "absolute",
    right: 10,
    top: 12,
  },
  loginButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  touchLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  touchIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  touchLoginText: {
    fontSize: 14,
  },
});
