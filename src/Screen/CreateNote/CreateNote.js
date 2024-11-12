import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import useNoteStore from "../../store/noteStore";
import { styles } from "./CreateNote.style";

const CreateNote = ({ navigation }) => {
  const addNote = useNoteStore((state) => state.addNote);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("");

  const handleSaveNote = async () => {
    try {
      const noteData = {
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()),
        category,
      };
      await addNote(noteData);
      Alert.alert("Başarılı", "Not başarıyla eklendi");
      navigation.goBack();
    } catch (error) {
      console.error("Not oluşturulurken hata:", error);
      Alert.alert(
        "Hata",
        error.response?.data?.msg || "Not eklenirken bir sorun oluştu"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yeni Not Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Başlık"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="İçerik"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Etiketler (Virgülle ayırın)"
        value={tags}
        onChangeText={setTags}
      />
      <TextInput
        style={styles.input}
        placeholder="Kategori"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Kaydet" onPress={handleSaveNote} />
    </View>
  );
};

export default CreateNote;
