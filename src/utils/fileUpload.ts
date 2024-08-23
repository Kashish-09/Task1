import * as XLSX from 'xlsx';
import Book from '../models/Book';
import Author from '../models/Author';
import axiosInstance from '../api/axiosInstance';


export const handleFileUpload = <T extends Book | Author>(
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'book' | 'author',
    dataHandler: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    const reader = new FileReader();
    const file = e.target.files?.[0];
  
    if (file) {
      reader.readAsBinaryString(file);
      reader.onload = async (event) => {
        if (event.target?.result) {
          const workbook = XLSX.read(event.target.result, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json<any>(sheet);
  
          console.log('Parsed Data:', parsedData); // Log parsed data for debugging
  
          let mappedData: T[] = [];
  
          if (type === 'book') {
            mappedData = parsedData.map((item) => ({
              BookName: item['Book Name'] || '',
              ISBN: item['ISBN'] || '',
              AuthorID: item['Author ID'] || '',
            })) as T[];

          } else if (type === 'author') {
            mappedData = parsedData.map((item) => ({
              AuthorID: item['Author ID'] || '',
              Name: item['Name'] || '',
              Email: item['Email'] || '',
              DateOfBirth: item['Date of Birth'] || '',
            })) as T[];
          }
          
          dataHandler(mappedData);

          if (type === 'book') {
            try {
              console.log("Dev");
              
              await axiosInstance.post('/hi', mappedData); 
            }
            catch (error) {
              console.log(error);
            }
            // await axiosInstance.post('/books/bulk', mappedData);   
          }
          else if (type === 'author') {
            // await axiosInstance.post('/authors/bulk', mappedData);          
          }
        }
      };
    }
  };

