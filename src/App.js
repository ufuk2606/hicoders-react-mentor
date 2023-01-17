import BookList from "./components/BookList";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [book, setBook] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("person");

  const getBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${selectedCategory}&key=AIzaSyD8MC2iPpUbUjw8BxkB5XXvEBD5yiFto2s`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedCategory]);

  return (
    <div className="App container-fluid">
      <div className="row">
        <BookList book = {book} setSelectedCategory={setSelectedCategory} ></BookList>
      </div>
    </div>
  );
}

export default App;
