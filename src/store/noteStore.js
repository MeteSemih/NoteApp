import { create } from "zustand";
import { createNote, getNotes } from "../api/note";
import useAuthStore from "./authStore";

const useNoteStore = create((set) => ({
  notes: [],

  loadNotes: async () => {
    const token = useAuthStore.getState().token;
    if (token) {
      try {
        const fetchNotes = await getNotes(token);
        set({ notes: fetchNotes });
      } catch (error) {
        console.error("Notları yüklerken bir hata oluştu:", error);
      }
    } else {
      console.warn("Token bulunamadı. Notlar yüklenemedi.");
    }
  },

  addNote: async (noteData) => {
    const token = useAuthStore.getState().token;
    if (token) {
      try {
        const newNote = await createNote(noteData, token);
        set((state) => ({ notes: [...state.notes, newNote] }));
      } catch (error) {
        console.error("Not eklenirken hata:", error);
      }
    }
  },
}));

export default useNoteStore;
