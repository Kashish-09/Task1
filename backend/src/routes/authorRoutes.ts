import { Router } from 'express';
import { createAuthors } from '../controllers/authorController';

const router = Router();

router.post('/authors/bulk', createAuthors);

export default router;
