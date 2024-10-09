import {  useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title"


const CartTotal = () => {

    const {getcartamount, delivery_fee, currency} = useContext(ShopContext);

  return (
    <div className="w-full sm:w-[450px]">

        <div className="text-2xl">
            <Title text1="CART" text2="TOTAL"/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <p>Subtotal</p>
            <p>{currency} {getcartamount()}.00</p>
        </div>

        <hr />

        <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency} {delivery_fee}</p>
        </div>

        <hr />

        <div className="flex justify-between">
            <p>Total</p>
            <p>{currency} { getcartamount() === 0 ? '0' : getcartamount() + delivery_fee}</p>
        </div>

    </div>
  )
}

export default CartTotal
