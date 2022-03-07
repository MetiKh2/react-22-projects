import React, {useContext, useState} from "react";
import sublinks from "./Data";
const AppContext=React.createContext()
export const AppProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const [isSubMenuOpen,setIsSubMenuOpen]=useState(false)
    const [location,setLocation]=useState({})
    const [subMenuLinks,setSubMenuLinks]=useState({page: '', links: []})
    const openSideBar = () => {
      setIsSidebarOpen(true)
    }
    const closeSideBar = () => {
      setIsSidebarOpen(false)
    }
    const openSubMenu = (text,cordinates) => {
        setLocation(cordinates)
        setSubMenuLinks(sublinks.find(item=>item.page==text))
      setIsSubMenuOpen(true)
    }
    const closeSubMenu = () => {
      setIsSubMenuOpen(false)
    }
  return <AppContext.Provider value={{isSidebarOpen,isSubMenuOpen,openSideBar,openSubMenu,closeSideBar,closeSubMenu,location,subMenuLinks}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}