import { useContext, useEffect, useState } from "react"
import {ShopContext} from "../context/ShopContext"
import Title from "./Title"
import ProductItem from "./ProductItem"



const BestSeller = () => {

    const { products } = useContext(ShopContext);

    const [bestseller, setbestseller] = useState([]);


    useEffect(() => {
        const bestproduct = products.filter((item) => (item.bestseller))
        setbestseller(bestproduct.slice(0, 5));
    }, [products])
  return (
    <div className="my-10">
      
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLER"/>
        <p className="w-4/4 text-xs sm:text-sm md:text-base text-gray-600">Here is Our Best Selling Products.This Products are in high in Demands In Market</p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

        {
          bestseller.map((item, index) => (
            <ProductItem key={index} name={item.name} price={item.price}  image={item.image} id={item._id}/>
          ))
        }
      </div>

    </div>
  )
}

export default BestSeller
