import React from "react";
import downloadImage from "./0002.jpg";
import JeeMains from "./Jee Mains Previous Year Solved.pdf";
import physics from "./3c514d15-650f-4d88-ae57-5d71d4e6544c.jpg";
const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    cover: physics,
    pdf: JeeMains,
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    cover: physics,
  },
  { id: 3, title: "Book 3", author: "Author 3", cover: physics },
  { id: 4, title: "Book 4", author: "Author 4", cover: physics },
  { id: 5, title: "Book 5", author: "Author 5", cover: physics },
  { id: 6, title: "Book 6", author: "Author 6", cover: physics },
  { id: 7, title: "Book 7", author: "Author 7", cover: physics },
  { id: 8, title: "Book 8", author: "Author 8", cover: physics },
  { id: 9, title: "Book 9", author: "Author 9", cover: physics },
  { id: 10, title: "Book 10", author: "Author 10", cover: physics },
  { id: 11, title: "Book 11", author: "Author 11", cover: physics },
  { id: 12, title: "Book 12", author: "Author 12", cover: physics },
  { id: 13, title: "Book 13", author: "Author 13", cover: physics },
  { id: 14, title: "Book 14", author: "Author 14", cover: physics },
  { id: 15, title: "Book 15", author: "Author 15", cover: physics },
  // Add more books here
];

const Course = () => {
  const handleDownload = (bookPdf, bookTitle) => {
    if (bookPdf) {
      const link = document.createElement("a");
      link.href = bookPdf;
      link.download = `${bookTitle}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No PDF available for this book");
    }
  };

  const handleOpenPdf = (bookPdf) => {
    if (bookPdf) {
      window.open(bookPdf, "_blank");
    } else {
      alert("No PDF available for this book");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <img
            src={book.cover}
            alt={book.title}
            onClick={() => handleOpenPdf(book.pdf)}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base">{book.author}</p>
            <button
              onClick={() => handleDownload(book.pdf, book.title)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
