import { Schema, model } from 'mongoose';

interface Author {
  AuthorID: string;
  Name: string;
  Email: string;
  DateOfBirth: string;
}

const authorSchema = new Schema<Author>({
  AuthorID: { type: String, required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  DateOfBirth: { type: String, required: true }
});

const AuthorModel = model<Author>('Author', authorSchema);
export default AuthorModel;
