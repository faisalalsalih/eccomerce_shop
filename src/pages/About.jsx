import Title from "../components/Title"
import {assets} from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"


const About = () => {
  return (
    <div>
      
      <div className="pt-8 text-center text-2xl border-t">
        <Title text1="ABOUT" text2="US"/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
        <p>An eCommerce website serves as a digital storefront where businesses can sell products and services online. It allows customers to browse through a catalog of items, add them to a virtual shopping cart, and complete purchases through secure payment gateways. These websites are designed to provide a seamless shopping experience, often featuring user-friendly navigation, detailed product descriptions, customer reviews, and various payment options. Additionally, eCommerce platforms often include tools for inventory management, order tracking, and customer relationship management, making it easier for businesses to operate efficiently and effectively.</p>
        <p>For businesses, an eCommerce website opens up opportunities to reach a global audience, operate 24/7, and reduce overhead costs associated with physical stores. It also enables businesses to gather valuable data on customer behavior and preferences, which can be used to tailor marketing strategies and improve customer service. With the rise of mobile commerce, many eCommerce websites are optimized for mobile devices, ensuring that customers can shop conveniently from anywhere. Overall, an eCommerce website is a powerful tool for businesses looking to expand their reach and enhance their sales capabilities in the digital age.</p>
        <b className="text-gray-800">OUR MISSION</b>
        <p>Our Mission is to give priority To Quallity Not Quantity And To Reach More Customers from Around the World</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="WHY"  text2="CHOOSE US"/>
      </div>

      <div className="flex flex-col sm:flex-row text-sm mb-20">

        <div className="border px-10 sm:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Our Most Focused is Always on Quality We have a Top Quality</p>
        </div>
 

        <div className="border px-10 sm:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">We have a lot of thing which you can purchased in a very reliable rate</p>
        </div>


        <div className="border px-10 sm:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer Support :</b>
          <p className="text-gray-600">We Offer 24/7 Customer Support</p>
        </div>


      </div>
      <NewsLetterBox  />
    </div>
  )
}

export default About
