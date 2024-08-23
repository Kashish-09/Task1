import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { handleFileUpload } from './utils/fileUpload';
import Book from './models/Book';
import Author from './models/Author';
import AuthorTable from './components/AuthorTable';
import BookTable from './components/BookTable';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);

  return (
    <div className="p-4">
      <div className='text-center'>
        <h1 className="text-3xl font-bold underline mb-4">Upload Excel Files</h1>

        <div className="mb-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) => handleFileUpload<Book>(e, 'book', setBooks)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button className="bg-blue-500 text-white p-2 ms-3 rounded">Upload Books</button>
        </div>

        <div className="mb-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={(e) => handleFileUpload<Author>(e, 'author', setAuthors)}
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button className="bg-green-500 text-white p-2 ms-3 rounded">Upload Authors</button>
        </div>
      </div>
      

      {books.length > 0 && <BookTable books={books} />}
      {authors.length > 0 && <AuthorTable authors={authors} />}

      <Toaster />
    </div>
  );
}
