import bag2 from "../../assets/images/bags/bag2.jpg"
import watch from "../../assets/images/watches/watch.jpg"
import pc3 from "../../assets/images/pcs/pc3.jpg"
import phone2 from "../../assets/images/phones/phone3.jpg"
import dress3 from "../../assets/images/dresses/dress3.jpg"
import shoe2 from "../../assets/images/shoes/shoe.jpg"
import { useNavigate } from 'react-router-dom'

const SliderCarousel = () => {

    const navigate = useNavigate()

    return (
        <>

<div id="indicators-carousel" className="relative w-full" data-carousel="static">
  <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src={phone2} className="absolute block w-full h-full object-cover" alt="Phone" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={pc3} className="absolute block w-full h-full object-cover" alt="PC" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={bag2} className="absolute block w-full h-full object-cover" alt="Bag" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={watch} className="absolute block w-full h-full object-cover" alt="Watch" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={dress3} className="absolute block w-full h-full object-cover" alt="Dress" />
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src={shoe2} className="absolute block w-full h-full object-cover" alt="Shoes" />
    </div>
  </div>

  <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    {[...Array(6)].map((_, i) => (
      <button
        key={i}
        type="button"
        className="w-3 h-3 rounded-full"
        aria-label={`Slide ${i + 1}`}
        data-carousel-slide-to={i}
      ></button>
    ))}
  </div>

  <a className="absolute top-1/3 md:left-1/3 left-1/4 z-30 text-center bg-inherit border border-2 border-slate-600 max-w-xs sm:max-w-md lg:w-96 h-auto py-6">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Shopping Time</h5>
    <p className="font-normal text-orange-300">Save 30% on all orders.</p>
    <hr />
    <button
      type="button"
      className="mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5"
      onClick={() => navigate('/shop')}
    >
      Shop Now
    </button>
  </a>

  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
      <svg className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeWidth="2" d="M5 1 1 5l4 4" />
      </svg>
    </span>
  </button>

  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
      <svg className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeWidth="2" d="m1 9 4-4-4-4" />
      </svg>
    </span>
  </button>
</div>


        </>
    )
}

export default SliderCarousel