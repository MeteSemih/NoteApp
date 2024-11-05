import Note from "../models/Note.js";


export const createNote = async (req, res) => { // Fonksiyon adını createNote olarak değiştirin
    const { title, content, tags, category } = req.body;
    try {
      const newNote = new Note({
        userId: req.user.id,
        title,
        content,
        tags,
        category,
      });
      await newNote.save();
      res.status(201).json(newNote);
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  };

/// Listeleme
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
// not guncelleme
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags, category } = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content, tags, category, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedNote) return res.status(404).json({ msg: "Not bulunamadı" });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ msg: "Not bulunamadı" });
    res.json({ msg: "Not başarıyla silindi" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
