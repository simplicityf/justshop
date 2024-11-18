import phone from "../../assets/images/phones/phone.jpg"
import phone1 from "../../assets/images/phones/phone1.jpg"
import phone2 from "../../assets/images/phones/phone2.jpg"
import phone3 from "../../assets/images/phones/phone3.jpg"
import phone4 from "../../assets/images/phones/phone4.jpg"
import { useNavigate } from "react-router-dom"

const SliderPhone = () => {

    const navigate = useNavigate()
    const scrollCarousel = (direction) => {
        const carousel = document.querySelector('.overflow-x-auto');
        const itemWidth = carousel.querySelector('.max-w-xs').offsetWidth;
        carousel.scrollBy({
            left: direction * itemWidth,
            behavior: 'smooth',
        });
    };

    return (
        <>


            <h5 className="text-white font-medium rounded-lg text-lg px-5 py-2.5 text-left mt-6 ml-5">Mobile Phones
                {/* <span className="text-right"> Shop Now! </span> */}
            </h5>


            <hr />

            <div className="relative mx-5 max-w-full max-w-4xl">
                {/* Carousel Container */}
                <div className="relative flex overflow-x-auto snap-x snap-mandatory gap-1 pb-4 no-scrollbar">
                    {/* Carousel Items */}

                    <div className="snap-center flex-shrink-0 max-w-xs p-6 bg-tranparent border-none rounded-lg">

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-84">
                           
                            <img className="p-8 rounded-t-lg w-full h-64" src={phone} alt="product image" />

                            <div className="px-5 pb-5">
                               
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => navigate("/shop")}> Add to cart</button>
                               

                            </div>
                        </div>

                    </div>

                    <div className="snap-center flex-shrink-0 max-w-xs p-6 bg-tranparent border-none rounded-lg">

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-84">
                            
                            <img className="p-8 rounded-t-lg w-full h-64" src={phone1} alt="product image" />

                            <div className="px-5 pb-5">
                                
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => navigate("/shop")}> Add to cart</button>
                               

                            </div>
                        </div>

                    </div>

                    <div className="snap-center flex-shrink-0 max-w-xs p-6 bg-tranparent border-none rounded-lg">

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-84">
                            
                            <img className="p-8 rounded-t-lg w-full h-64" src={phone2} alt="product image" />

                            <div className="px-5 pb-5">
                               
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => navigate("/shop")}> Add to cart</button>
                             

                            </div>
                        </div>

                    </div>

                    <div className="snap-center flex-shrink-0 max-w-xs p-6 bg-tranparent border-none rounded-lg">

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-84">
                           
                            <img className="p-8 rounded-t-lg w-full h-64" src={phone3} alt="product image" />

                            <div className="px-5 pb-5">
                               
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => navigate("/shop")}> Add to cart</button>
                             

                            </div>
                        </div>

                    </div>

                    <div className="snap-center flex-shrink-0 max-w-xs p-6 bg-tranparent border-none rounded-lg">

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-84">
                           
                            <img className="p-8 rounded-t-lg w-full h-64" src={phone4} alt="product image" />

                            <div className="px-5 pb-5">
                               
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => navigate("/shop")}> Add to cart</button>
                           

                            </div>
                        </div>

                    </div>

                   

                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    onClick={() => scrollCarousel(-1)}
                >
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                    onClick={() => scrollCarousel(1)}
                >
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>
    )
}

export default SliderPhone