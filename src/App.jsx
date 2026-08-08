import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Category from "./pages/Category";

import Contact from "./pages/Contact";


import Bookmarks from "./pages/Bookmarks";

import ThemeProvider from "./context/ThemeProvider";


function App() {
  return (
    <>
    <ThemeProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
  