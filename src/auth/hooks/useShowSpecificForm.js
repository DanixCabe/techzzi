import { useState } from "react"


export const useShowSpecificForm = (initialValue='loginForm') => {

    const [specificForm, setSpecificForm] = useState(initialValue)

    const changeSpecificForm = (nameForm) => {
        setSpecificForm(nameForm)

    }

    return {
        specificForm,
        setSpecificForm,
        changeSpecificForm,
    }
}
