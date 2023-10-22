"use client"
import "./cart.css";
import { AppDispatch, RootState } from "@/redux/store";
import { counter } from "@/redux/features/toggleSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineCancel } from "react-icons/md"
import fonts from "@/app/fonts/fonts";

let Cart = () => {
    let selector = useSelector((state: RootState) => state.toggle.value);

    let dispatch = useDispatch<AppDispatch>();
    return (
        <section id="Cart" className={selector ? " cart-vis " : " cart-un-vis "}>
            <div className="cart-header flex flex-row justify-between p-4">
                <p className={fonts.ubuntu.className + " text-lg"}>My Cart</p>
                <MdOutlineCancel onClick={() => dispatch(counter())} size={'1.5rem'} />
            </div>
        </section>
    );
}
export default Cart;
