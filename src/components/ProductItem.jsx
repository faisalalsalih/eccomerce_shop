import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import {Link} from 'react-router-dom'


const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <>
      <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img id="imageo" className="hover:scale-110 transition ease-in-out w-[260px] h-[290px]" src={image[0]} alt="" />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
      </Link>
    </>
  )
}

export default ProductItem



