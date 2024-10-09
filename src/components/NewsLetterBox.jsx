
const NewsLetterBox = () => {

    const onsubmithandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className="text-center">
        <p className="text-gray-800 font-medium text-3xl">Subscribe Now and get 20% off</p>
        <p className="text-gray-400 mt-3">The code.it0 Shop is on Next Level.</p>

        <form onSubmit={onsubmithandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none"  type="email" placeholder="Enter Your Email" required/>
            <button className="bg-black text-white px-10 py-2" type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
