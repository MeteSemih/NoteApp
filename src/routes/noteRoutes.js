import express from 'express';
import authMiddleware from '../middleware/auth.js'
import { createNote,getNotes,updateNote,deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.post('/notes', authMiddleware, createNote);
router.get('/notes', authMiddleware, getNotes);
router.put('/notes/:id', authMiddleware, updateNote);
router.delete('/notes/:id', authMiddleware, deleteNote);

export default router;