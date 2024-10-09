import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";




const Product = () => {

  // Here we will take that id
  const { productId } = useParams();

  const { products , currency, addtoCart} = useContext(ShopContext);

  const [productdata, setproductdata] = useState(false);

  const [image, setimage] = useState('');

  const [size, setsize] = useState('');

  const fetchproductdata = async () => {

    // Here we map that item where its id is matching the productId and we return null just for stop executing the function after the itemm get selected
    products.map((item) => {
      if (item._id === productId) {
        setproductdata(item);
        setimage(item.image[0]);
        return null;
      }
    })
  }


  // when productId and products is come there will be run the fethcproductdata();
  useEffect(() => {
    fetchproductdata();
  }, [productId])



  return productdata ? (
    <div className="border-t-2 py-10 transition-opacity ease-in duration-500 opacity-100 ">

      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">

        {/* Product Images */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row">

          <div id="perfume" className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">

            {
              productdata.image.map((item, index) => (
                <img onClick={() => setimage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
              ))
            }
          </div>

          <div className="w-full sm:w-[80%]">

            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>


        {/* --------Product Info----------- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productdata.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt=""  className="w-3"/>
            <img src={assets.star_icon} alt=""  className="w-3"/>
            <img src={assets.star_icon} alt=""  className="w-3"/>
            <img src={assets.star_icon} alt=""  className="w-3"/>
            <img src={assets.star_dull_icon} alt=""  className="w-3"/>
            <p className="pl-2">(122)</p>
          </div>

          <p className="text-3xl mt-5 font-medium">{currency}{productdata.price}</p>
          <p className="text-gray-400 mt-5 md:w-4/5">{productdata.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium text-3xl">Select Sizes</p>

            <div className="flex gap-2">
              {productdata.sizes.map((item, index) => (
                <button onClick={() => setsize(item)} className={`py-2 px-4 border bg-gray-100 ${item === size ? 'border-orange-500': ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>

          <button onClick={() => addtoCart(productdata._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr  className="mt-8 sm:w-4/5"/>

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>





      </div>


      {/* Description And review session*/}
      <div className="mt-20">

        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Reviews (200)</b>
        </div>

        <div className="flex flex-col text-sm gap-4 border px-6 py-6 text-gray-500">
          <p>An online e-commerce store is a type of store which make easy the shopping in all way and can boost your sales we make SEO friendly websites with frontend plus backend we have a lot of different types of website</p>
          <p>An e-commerce website offers numerous benefits, including global reach, allowing businesses to access customers worldwide. It reduces operational costs by eliminating the need for physical stores. Customers enjoy convenience, shopping anytime from anywhere. E-commerce also provides personalized experiences through data analytics, enhancing customer satisfaction</p>
        </div>
      </div>


      {/* Related products */}
      <RelatedProducts category={productdata.category} subcategory={productdata.subCategory}/>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
