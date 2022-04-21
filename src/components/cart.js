import { CartContext } from "../context/cartvalue"

import { useContext } from "react"

export const RBody = () =>
{
    const {handlechange} = useContext(CartContext)
    return (
 
        <button onClick={ function()
        {
            handlechange(1)
        }}>Add to cart</button>
    )
          
}