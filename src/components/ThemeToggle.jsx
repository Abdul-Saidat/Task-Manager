import { useEffect, useState } from "react";

function ThemeToggle() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" ))

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        localStorage.setItem("theme", theme)
    }, [theme])
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-colors">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    )
}

export default ThemeToggle;