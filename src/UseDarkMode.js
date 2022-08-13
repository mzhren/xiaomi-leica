import { useEffect,useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const themes = {
            light: ['light','bg-slate-50'],
            dark: ['dark', 'bg-slate-300']
        }
        const root = document.documentElement;
        root.classList = "";
        root.classList.add(...themes[theme]);
    }, [theme]);
    return [theme, toggleTheme];
}