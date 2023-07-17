import { useEffect, useState } from "react"

export const useDarkMode = (option) => {

    const [darkMode, setDarkMode] = useState(option)

    console.log(darkMode)

    const toggleDarkLightMode = (option) => {
        setDarkMode(option)
        localStorage.setItem('theme', option);
        document.querySelector('html').setAttribute('class', option)
    }


    return {
        darkMode,
        setDarkMode,
        toggleDarkLightMode,
    }
}
