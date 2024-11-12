import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./NoteCard.style";

const NoteCard = ({ title, content, tags, category, createdAt, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.title}>Başlık: {title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.tags}>Etiketler: {tags.join(", ")}</Text>
        <Text style={styles.category}>Kategori: {category}</Text>
        <Text style={styles.date}>
          Oluşturulma Tarihi: {new Date(createdAt).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteCard;
