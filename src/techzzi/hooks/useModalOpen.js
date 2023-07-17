
import {  useState } from 'react';

export const useModalOpen = () => {
    
    const [openModal, setOpenModal] = useState(false)


    const toggleModal = () =>{
        setOpenModal(!openModal)
        if(!openModal){
            document.querySelector('html').style.overflow='hidden'
        }else{
            document.querySelector('html').style.overflow=''
        }('overflow', '')
    }


    return{
        openModal,
        setOpenModal,
        toggleModal,
    }
}

