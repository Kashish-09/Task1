import { Request, Response } from 'express';
import AuthorModel from '../models/author';

export const createAuthors = async (req: Request, res: Response) => {
  try {
    const authors = req.body;
    // Insert multiple authors
    const result = await AuthorModel.insertMany(authors);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message:"Failed To Upload It To Server" });
  }
};
