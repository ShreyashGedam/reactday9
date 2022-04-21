import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) =>
{
    const [cart , setCart] = useState(0)

    const handlechange = (inc) =>
    {
        setCart(cart + inc)
    }
    return <CartContext.Provider value={{cart , handlechange}}>{children}</CartContext.Provider>
}