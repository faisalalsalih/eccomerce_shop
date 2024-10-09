import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      
      <div className="">
        <img src={assets.logo} alt="" />
        <p className="w-1/3 ">We are the one of the best store in the country as we offer a wide range of quality products which are always in demands we preferred quality over quantity  </p>
      </div>

      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Company</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-xl mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+09319398431034</li>
            <li>code.it0@gmai.com</li>
        </ul>
      </div>
    </div>

    <hr />
    <div className="flex items-center justify-center gap-4">
        
        <p className="py-2 text-sm text-center">Copyright 2024@ code.it0.com - All Rights Reserved</p>
        <p className="text-sm text-center">Powered and created by code.it0 & Company</p>
    </div>
    </>
  )
}

export default Footer
