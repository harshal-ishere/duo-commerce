"use client"
import "./navbar.css"

import fonts from "@/app/fonts/fonts";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import {useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { counter } from "@/redux/features/toggleSlice";
import { counter2 } from "@/redux/features/toggle2Slice";

import Cart from "./Cart/cart"
import LocBox from "./locBox/locBox";

let Navbar = () => {
    let dispatch=useDispatch<AppDispatch>();
    let dispatch2=useDispatch<AppDispatch>();
    return (
        <section id="Navbar">
            <nav className="flex flex-row justify-between">
                <div className="nav-head px-6 py-3 border-grey-right flex flex-row items-center">
                    <a href="/"><p className={fonts.inconsolata.className + " text-2xl md:text-4xl"}>Drop</p></a>
                </div>
                <div className="location-box flex flex-col px-6 py-3" onClick={()=>dispatch2(counter2())}>
                    <p className={fonts.kanit.className + " text-sm md:text-xl"}>Delivery in 5 min</p>
                    <p className="">Drop at bandra east</p>
                </div>
                <div className="search-bar flex flex-row mx-6 my-4 items-center py-2 px-3 gap-2">
                    <BiSearch size={'1.25rem'} />
                    <textarea name="" id="" placeholder={'Search "milk"'} ></textarea>
                </div>
                <div className="login-btn flex flex-row items-center text-xl">
                    <a href="/login"><p className={fonts.ubuntu.className}>Login</p></a>
                </div>
                <div className="cart-btn flex flex-row items-center text-lg gap-2 m-4 p-2" onClick={()=>dispatch(counter())} >
                    <AiOutlineShoppingCart size={'1.3rem'} />
                    <p className={fonts.ubuntu.className} >My Cart</p>
                </div>
                <div className="flex flex-row items-center items-center px-4">
                    <BsPersonCircle size={"1.5rem"} className="profile" />
                </div>
            </nav>
            <LocBox />
            <Cart />
        </section>
    )
}
export default Navbar;