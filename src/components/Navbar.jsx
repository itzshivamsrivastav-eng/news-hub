import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";



function Navbar() {

  const { dark, setDark } = useTheme();


  const categories = [
    "general",
    "business",
    "technology",
    "sports",
    "health",
    "science",
    "entertainment",
  ];

  return (
    <nav className="navbar">

      <h2>Newzzz</h2>

      <div className="nav-links">

        {categories.map((category) => (
          <NavLink
            key={category}
            to={
              category === "general"
                ? "/"
                : `/category/${category}`
            }
          >
            {category}
          </NavLink>
        ))}

        <NavLink to="/contact">
          Contact Us
        </NavLink>

        <NavLink to="/bookmarks">
          Bookmarks
        </NavLink>

        <button 
            className={dark ? "theme-toggle-dark" : "theme-toggle-light"}
            onClick={() => setDark(!dark)}
        >
            Change Theme
        </button>

        <h3>{dark ? "🌙 Dark" : "☀️ Light"}</h3>

      </div>

    </nav>
  );
}

export default Navbar;