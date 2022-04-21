import { createContext, useState } from "react";

export const DarkContext = createContext()

export const Dark = ({children}) =>
{
    const [theme , setTheme] = useState(true)

    const handletheme = () =>
    {
        setTheme(!theme)
        // console.log(theme)
    }

    
    return <DarkContext.Provider value={ {theme , handletheme} } >{children}</DarkContext.Provider>
}