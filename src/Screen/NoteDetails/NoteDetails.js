// src/Screen/Note/NoteDetail.js
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const NoteDetail = ({ route, navigation }) => {
  const { note } = route.params; // Not verisini parametre olarak al

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Text style={styles.tags}>Etiketler: {note.tags.join(", ")}</Text>
      <Text style={styles.category}>Kategori: {note.category}</Text>
      <Text style={styles.date}>
        Oluşturulma Tarihi: {new Date(note.createdAt).toLocaleDateString()}
      </Text>
      <Button title="Geri" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  tags: {
    fontSize: 14,
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 20,
  },
});

export default NoteDetail;
