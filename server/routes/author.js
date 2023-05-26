import express from 'express';
import { addAuthor } from '../controllers/author.js'

const router = express.Router();

// router.get('/', getAuthors );
router.post('/', addAuthor );

export default router;
