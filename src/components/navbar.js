import { CartContext } from "../context/cartvalue"

import { useContext } from "react"

import { DarkContext } from "../context/dark"


import "./navbar.css"

export const Navbar = () =>
{
    const {cart} = useContext(CartContext)

    const {handletheme} = useContext(DarkContext)

    const {theme} = useContext(DarkContext)

    if(theme == true)
    {
        var color = "Light"
    }
    else
    {
        var color = "Dark"
    }

    function abc()
    {
       if(theme == true)
       {
           return "nabar"
       }
       else
       {
           return "nabar2"
       }
    }


 
    return (
        <div className={abc()}>
        <nav >Cart : {cart}</nav>
        <div className="theme">
        <button 
        onClick={ function()
        {
            handletheme()
        }}
        >Theme </button>
        <div>{color}</div>
        </div>
        </div>   
    )
}