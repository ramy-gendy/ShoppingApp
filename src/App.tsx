import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="container min-w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}