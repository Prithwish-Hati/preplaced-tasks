import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import Books from "../components/Books";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
