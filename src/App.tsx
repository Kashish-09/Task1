import * as XLSX from 'xlsx';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files?.[0];

    if (file) {
      reader.readAsBinaryString(file);
      reader.onload = (event) => {
        if (event.target?.result) {
          const workbook = XLSX.read(event.target.result, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          setData(parsedData);
        }
      };
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4">Upload Excel File</h1>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      {data.length > 0 && (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} className="py-2 px-4 border-b border-gray-300 text-left">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {Object.values(row).map((value: any, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b border-gray-300">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
