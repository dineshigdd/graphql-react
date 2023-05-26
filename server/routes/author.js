import express from 'express';
import { addAuthor } from '../controllers/author';
const router = express.Router();

router.get('/', getAuthors );
router.post('/', addAuthor );
