import SliderBag from "../slider/SliderBag"
import SliderDress from "../slider/SliderDress"
import SliderPC from "../slider/SliderPC"
import SliderPhone from "../slider/SliderPhone"
import SliderShoe from "../slider/SliderShoe"
import SliderWatch from "../slider/SliderWatch"

const Home = () => {
    return (
        <div className="pt-3 bg-slate-700">


            <SliderPhone />
            <SliderBag />
            <SliderWatch />
            <SliderShoe />
            <SliderPC />
            <SliderDress />


        </div>
    )
}

export default Home