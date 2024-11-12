import React, { useCallback, useMemo } from "react";
import { View, FlatList, Text } from "react-native";
import NoteCard from "../../Component/NoteCard";
import useNoteStore from "../../store/noteStore";
import useAuthStore from "../../store/authStore";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./Node.style";

const NoteScreen = ({ navigation }) => {
  const { notes, loadNotes } = useNoteStore();
  const token = useAuthStore((state) => state.token);

  const loadNotesMemoized = useMemo(() => {
    if (token && notes.length === 0) {
      return loadNotes;
    }
    return null;
  }, [token, notes]);

  useFocusEffect(
    useCallback(() => {
      if (loadNotesMemoized) {
        loadNotesMemoized();
      }
    }, [loadNotesMemoized])
  );

  const handleNotePress = (note) => {
    navigation.navigate("NoteDetail", { note }); // Not detayına geçiş
  };

  return (
    <View style={styles.container}>
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          keyExtractor={(item, index) =>
            item._id ? item._id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <NoteCard
              title={item.title}
              content={item.content}
              tags={item.tags}
              category={item.category}
              createdAt={item.createdAt}
              onPress={() => handleNotePress(item)} // Not kartına tıklandığında detay sayfasına yönlendirme
            />
          )}
        />
      ) : (
        <Text style={styles.noNotesText}>Henüz not eklenmemiş.</Text>
      )}
    </View>
  );
};

export default NoteScreen;
