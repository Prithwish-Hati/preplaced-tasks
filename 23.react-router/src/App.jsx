import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Books from "../components/Books";
import Home from "../components/Home";
import Book from "../components/Book";
import NewBook from '../components/NewBook'
import NotFound from '../components/NotFound';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/books/:id">Book</Link>
          </li>
          <li><Link to='/books/new'>New Book</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
