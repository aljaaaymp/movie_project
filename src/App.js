import "./App.css";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchedMovie from "./SearchedMovie";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie" element={<SearchedMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
