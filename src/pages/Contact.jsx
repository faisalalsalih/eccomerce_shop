import Title from "../components/Title"
import {assets} from "../assets/assets"

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US"/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
        <img className="w-full sm:w-[450px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">First Street <br /> 5369 Earth</p>
          <p className="text-gray-500">Tel: 09302932039 <br /> Email: admin@earth.com</p>
          <p className="font-semibold text-xl text-gray-600">Carrers At Our Store</p>
          <p className="text-gray-600">Learn More About Our Teams And Job Opening</p>
          <button className="px-8 py-3 border border-black text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
