import { createContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
// import { products } from "../assets/assets"
import {useNavigate} from "react-router-dom"

import axios from "axios"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    // The below state control the search where it should be show where it will not
    const [search, setsearch] = useState('');

    // The below control where the search should be shown where not
    const [showsearch, setshowsearch] = useState(false);

    // this is for cart items
    const [cartitem, setcartitem] = useState({});


    // To Navigate the checkout to place order
    const navigate = useNavigate();

    // This State import products from the admin panel and backend
    const [products, setproducts] = useState([]);


    // This State Control The Authentiacation Of the user
    const [token, settoken] = useState('');




    const addtoCart = async (itemId, size) => {

        if(!size){
            toast.error('Select Product Size');
            return;
        }

        let cartdata = structuredClone(cartitem);
        if(cartdata[itemId]){
            if(cartdata[itemId][size]){
                cartdata[itemId][size] += 1;
            }

            else{
                cartdata[itemId][size] = 1;
            }
        }
        else{
            cartdata[itemId] = {};
            cartdata[itemId][size] = 1;
        }

        setcartitem(cartdata);

        if(token){
            try {
                await axios.post("http://localhost:5000/api/cart/add", {itemId,size} , {headers:{token}})
                
            } catch (error) {
                console.log(error);
                toast.error("There Is A Problem In the Add To cart in frontend")
            }
        }
    }

    // the below function control increase in the number of the cart when a product is added

    const cartcount = () => {
        let totalcount = 0;

        for(const items in cartitem){

            for(const item in cartitem[items]){

                try {
                    
                    if(cartitem[items][item] > 0){
                        totalcount += cartitem[items][item];
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }

        return totalcount;
    }

    const updatequantity = async (itemId, size, quantity) => {

        let cartdata = structuredClone(cartitem);

        cartdata[itemId][size] = quantity;

        setcartitem(cartdata);
    }

    // The below function control the total purchased box on the Cart ....

    const getcartamount =  () => {
        let totalamount = 0;

        for(const items in cartitem){
            let iteminfo = products.find((product) => product._id === items);
            for(const item in cartitem[items]){
                if(cartitem[items][item] > 0){
                    try {
                        if(cartitem[items][item] > 0){
                            totalamount += iteminfo.price * cartitem[items][item]
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        }

        return totalamount;
    }

    const getproductsdata = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/product/list");

            if(response.data.success){
                setproducts(response.data.products)
            }
            else{
                toast.error("Product Not Added Successfully")
            }

        } catch (error) {
            console.log(error);
        }
    }

    const getusercart = async (token) => {

        try {
            const response = await axios.post("http://localhost:5000/api/cart/get", {}, {headers: {token}})

            if(response.data.success){
                setcartitem(response.data.cartdata);
            }
        } catch (error) {
            console.log(error);
            toast.error("Alaka pa de getusercart ki masla dai khaa")
        }
    }

    useEffect(() => {
        getproductsdata();
    }, [products])

    useEffect(() => {
        if(!token && localStorage.getItem('token')){
            settoken(localStorage.getItem('token'));
            getusercart(localStorage.getItem('token'))
        }
    }, [])

    const value = {
        products, currency, delivery_fee,
        search, setsearch, showsearch, setshowsearch, cartitem, addtoCart, 
        cartcount, updatequantity, getcartamount, navigate, backendUrl,
        settoken, token
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;