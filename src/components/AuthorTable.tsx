import Author from "../models/Author";

interface AuthorTableProps {
  authors: Author[];
}

export default function AuthorTable({ authors }: AuthorTableProps) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {Object.keys(authors[0]).map((key, index) => (
            <th key={index} className="py-2 px-4 border-b border-gray-300 text-left">
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {authors.map((author, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {Object.values(author).map((value, colIndex) => (
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
