import { assets } from "../assets/assets";
import {ShopContext} from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem"

const Collection = () => {

  const {products, search, showsearch} = useContext(ShopContext);


  const [showfilter, setshowfilter] = useState(false);

  // This below state control the filtered products mechanism 
  const [filterproducts, setfilterproducts] = useState([]);

  // The below control the category state
  const [category, setcategory] = useState([]);


  // The below control the subcategory state
  const [subcategory, setsubcategory] = useState([]);


  //The below state control the sortType method 

  const [sortType, setsortType] = useState('relevant');



  // The below  function is for category

  const togglecategory = (e) => {

    if(category.includes(e.target.value)){
      setcategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev,e.target.value])
    }
  }


  // The below is function is for toggle subcategory
  const togglesubcategory = (e) => {

    if(subcategory.includes(e.target.value)){
      setsubcategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setsubcategory(prev => [...prev,e.target.value])
    }
  }

  // The below will apply Filter 

  const applyfilter = () => {

    let productscopy = products.slice();

    // This if statetement will provide searchbar to search the product

    if(showsearch && search){
      productscopy = productscopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }


    if(category.length > 0){
      productscopy = productscopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productscopy = productscopy.filter(item => subcategory.includes(item.subCategory));
    }

    setfilterproducts(productscopy);
  }

  // Sort product here the upper dropdown work while filter is apply or not it will work thats why we use 
  
  const sortproduct = () => {
    let pfcopy = filterproducts.slice();

    switch(sortType){
      case 'low-high':
        setfilterproducts(pfcopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setfilterproducts(pfcopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyfilter();
        break;
    }
  }
 // This useffect control the filterproducts
  useEffect(() => {
   setfilterproducts(products) 
  }, [products])

  // The below useEffect handles the Applyfilter method

  useEffect(() => {
    applyfilter();
  }, [category, subcategory, search, showsearch, products])


  // The below useEffext use for sortproduct funtion

  useEffect(() => {
    sortproduct();
  }, [sortType, products])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={() => setshowfilter(!showfilter)} className="my-2 gap-x-2 text-xl cursor-pointer items-center flex">FILTERS
        <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />

        </p>

        {/* Category filters */}

        <div className={`border border-gray-300 pl-5 py-3 my-3 ${showfilter? '': 'hidden'} sm:block`}>
          <p className="font-medium text-sm mb-3">CATEGORIES
          </p>
          

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={togglecategory}/>Men
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={togglecategory}/>Women
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={togglecategory}/>Kids
            </p>
          </div>
        </div>

        {/* Subcategory filter  */}
        <div className={`border border-gray-300 pl-5 py-3 my-3 ${showfilter? '': 'hidden'} sm:block`}>
          <p className="font-medium text-sm mb-3">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">

            <p className="flex gap-2">
              <input className="w-3"  type="checkbox" value={'Topwear'} onChange={togglesubcategory}/>Topwear
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={togglesubcategory}/>Bottomwear
            </p>

            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={togglesubcategory}/>Winterwear
            </p>
          </div>
        </div>



      </div>

      {/* Right Side */}

      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS"/>

          {/* Product Sort */}
          <select onChange={(e) => setsortType(e.target.value)} className="border border-gray-300 text-sm py-2">
            <option value="relavent">Sort by: relevant</option>
            <option value="low-high">Sort by: low-high</option>
            <option value="high-low">Sort by: high-low</option>
          </select>
        </div>


        {/* Map the products here */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {
            filterproducts.map((item, index) =>(
              <ProductItem  key={index} name={item.name} price={item.price} id={item._id} image={item.image}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
