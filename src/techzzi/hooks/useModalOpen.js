
import {  useState } from 'react';

export const useModalOpen = () => {
    
    const [openModal, setOpenModal] = useState(false)


    const toggleModal = () =>{
        setOpenModal(!openModal)
    }


    return{
        openModal,
        setOpenModal,
        toggleModal,
    }
}

