import { Schema, model } from 'mongoose';

interface Book {
  BookName: string;
  ISBN: string;
  AuthorID: string;
}

const bookSchema = new Schema<Book>({
  BookName: { type: String, required: true },
  ISBN: { type: String, required: true },
  AuthorID: { type: String, required: true }
});

const BookModel = model<Book>('Book', bookSchema);
export default BookModel;
