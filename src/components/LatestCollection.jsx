import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from '../components/Title'
import ProductItem from './ProductItem'



const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestproducts, setlatestproducts] = useState([]);


    useEffect(() => {
        setlatestproducts(products.slice(0, 10));
    }, [products])

    return (
    <div className="my-10">
      
      <div className="text-center py-4 text-3xl">
        <Title  text1="LATEST" text2="COLLECTION"/>
      </div>

      <p className=" py-4 text-center w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Here is Our Latest collection You can Checked. A wide Range of verities</p>


      {/* Rendering products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
        latestproducts.map((item, index) => (
            <ProductItem key={index} name={item.name} price={item.price} id={item._id} image={item.image}/>
        ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
