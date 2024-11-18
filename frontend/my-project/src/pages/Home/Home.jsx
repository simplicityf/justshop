
import HomeInfoBox from "./HomeInfoBox"
import SliderCarousel from "../slider/SliderCarousel"
import SliderCategories from "../slider/SliderCategories"
import SliderLatestProduct from "../slider/SliderLatestProduct"
import SliderPhone from "../slider/SliderPhones"
import SliderShoe from "../slider/SliderShoe"
import Enquiry from "../slider/Enquiry"

const Home = () => {
    return (
        <div className="pt-3 bg-slate-700">


            <SliderCarousel />
            <HomeInfoBox/>
            <SliderLatestProduct />
            <SliderCategories />
            <SliderPhone />
            <SliderShoe />
            <Enquiry/>
        
        </div>
    )
}

export default Home