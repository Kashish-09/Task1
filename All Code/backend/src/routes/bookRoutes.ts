import { Router } from 'express';
import { createBooks } from '../controllers/bookControllers';

const router = Router();

router.post('/books/bulk', createBooks);

export default router;
