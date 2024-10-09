import {useState, useContext, useEffect} from "react";
import { ShopContext } from "../context/ShopContext"
import axios from "axios";
import { toast } from "react-toastify"



const Login = () => {

  const [currenstate, setcurrentstate] = useState('Login');

  const {token, settoken, navigate} = useContext(ShopContext);

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const onsubmithandler = async (e) => {
    e.preventDefault();
    try {

      if(currenstate === 'Sign Up'){

        const response = await axios.post("http://localhost:5000/api/user/register", {name, email, password});

        if(response.data.success){
          settoken(response.data.token);
          localStorage.setItem('token', response.data.token)
        }
        else{
          toast.error("")
        }
      }
      else{

        const response = await axios.post("http://localhost:5000/api/user/login", {email, password});

        if(response.data.success){
          settoken(response.data.token);
          localStorage.setItem('token', response.data.token);
        }
        else{
          toast.error("Cant Login Successfully");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  // this Useeffect will redirect the user to the website when token is Available

  useEffect(() => {
    if(token){
      navigate('/')
    }
  }, [token])


  // the below useEffect Will Control when user once login he will not logout by refresh

  useEffect(() => {
    if(!token && localStorage.getItem('token')){
      settoken(localStorage.getItem('token'));
    }
  }, [])

  return (
    <form onSubmit={onsubmithandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="mt-10 mb-2 gap-2 inline-flex items-center">
        <p className="prata-regular text-3xl">{currenstate}</p>
        <hr  className="border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
      {currenstate === 'Login'? '': <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-800" required/> }
      <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} className="w-full px-3 py-2 border border-gray-800" required/>
      <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-800" required/>

      <div className="w-full flex justify-between text-sm pt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password?</p>

        {
          currenstate === "Login" ? <p onClick={() => setcurrentstate('Sign Up')} className="cursor-pointer">Create Account</p> : <p className="cursor-pointer" onClick={() => setcurrentstate('Login')}>Login Here</p>  
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currenstate === "Login"? "Sign In": "Sign Up"}</button>
    </form>
  )
}

export default Login
