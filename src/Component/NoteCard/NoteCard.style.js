import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Android için gölge
    shadowColor: "#000", // iOS için gölge
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  tags: {
    fontSize: 12,
    color: "#007BFF",
    marginBottom: 5,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: "#28a745",
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "right",
  },
});