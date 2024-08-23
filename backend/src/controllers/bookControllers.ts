import { Request, Response } from 'express';
import BookModel from '../models/book';

export const createBooks = async (req: Request, res: Response) => {
  try {
    const books = req.body;
    // Insert multiple books
    const result = await BookModel.insertMany(books);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed To Upload It To Server" });
  }
};
