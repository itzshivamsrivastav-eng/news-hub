import { useState } from "react";
import ThemeContext from "./ThemeContext";
import { useEffect } from "react";

export default function ThemeProvider({children}) {
    const [dark, setDark] = useState(() => {

        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "dark";

    });

    useEffect(() => {

        if (dark) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

    }, [dark]);

    return (
         <ThemeContext.Provider value = {{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    );
}