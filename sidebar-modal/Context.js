import React,{useState,useContext} from "react";

const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [isSideBarOpen,setIsSidebarOpen]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const openSideBar = () => {
        setIsSidebarOpen(true)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeSideBar = () => {
        setIsSidebarOpen(false)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return <AppContext.Provider value={{isModalOpen,isSideBarOpen,openSideBar,openModal,closeModal,closeSideBar}}>{children}</AppContext.Provider>
}

// custom hook
export const useGGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext}