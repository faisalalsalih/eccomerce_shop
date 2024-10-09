import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import ProductItem from "./ProductItem"


const RelatedProducts = ({category, subcategory}) => {

    const {products} = useContext(ShopContext);

    const [related, setrelated] = useState([]);

    // This useEffect control the related product mechanism it select those products which its category is related to the other
    useEffect(() => {
        if(products.length > 0){

            let productscopy = products.slice();

            productscopy = productscopy.filter((item) => category === item.category);

            productscopy = productscopy.filter((item) => subcategory === item.subCategory);

        setrelated(productscopy.slice(0, 5));

        }
    }, [products, category, subcategory])


  return (
    <div className="my-20">

        <div className="text-center text-3xl py-2">
            <Title text1="RELATED" text2="PRODUCTS"/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                related.map((item, index) => (
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts
