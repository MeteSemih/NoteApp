import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

export const getNotes = async (token) => {
  const response = await axios.get(`${API_URL}/notes`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createNote = async (note, token) => {
  const response = await axios.post(`${API_URL}/notes`, note, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateNote = async (id, updatedNote, token) => {
  const response = await axios.put(`${API_URL}/notes/${id}`, updatedNote, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteNote = async (id, token) => {
  const response = await axios.delete(`${API_URL}/notes/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
