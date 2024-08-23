import Book from "../models/Book";

interface BookTableProps {
  books: Book[];
}

export default function BookTable({ books }: BookTableProps) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {Object.keys(books[0]).map((key, index) => (
            <th key={index} className="py-2 px-4 border-b border-gray-300 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((book, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {Object.values(book).map((value, colIndex) => (
              <td key={colIndex} className="py-2 px-4 border-b border-gray-300">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
