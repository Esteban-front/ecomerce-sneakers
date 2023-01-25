import AnteriorIcons from "@/components/icons/AnteriorIcons";
import SiguienteIcons from "@/components/icons/SiguienteIcons";



import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";
import imgProduct5 from "@/assets/images/image-product-5.jpg";

import imgProductSmall2 from "@/assets/images/image-mobile-2.jpg";
import imgProductSmall3 from "@/assets/images/image-mobile-3.jpg";
import imgProductSmall4 from "@/assets/images/image-mobile-4.jpg";
import imgProductSmall5 from "@/assets/images/image-mobile-5.jpg";
import { useState } from "react";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4, imgProduct5]



export default () => {
    const [index, setIndex] = useState(0);


    const handleClickNext = () => {
   (index === ARRAY_IMGS.length -1) ? setIndex(0) : setIndex(index + 1);
};
    const handleClickPrev = () => {
    (index === 0) ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1)

};
    return (

    <section className="grid md:grid-cols-4 md:gap-4">
        <div className="col-span-4 relative">
           <img src={ARRAY_IMGS[index]} alt="" className="aspect [16/13] w-full md:aspect-[16/18] md:rounded-md"/>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-4">
            <button className="grid place-items-center w-10 h-10 bg-dark-grayish-blue opacity-70 rounded-full" onClick={handleClickPrev}>
                <AnteriorIcons />
            </button>    
            <button className="grid place-items-center w-10 h-10 bg-dark-grayish-blue rounded-full opacity-70" onClick={handleClickNext}>
                <SiguienteIcons />
            </button>
        </div>
        </div>
        <img src={imgProductSmall2} alt="" className="hidden md:block md:rounded-md"/>
        <img src={imgProductSmall3} alt="" className="hidden md:block md:rounded-md"/>
        <img src={imgProductSmall4} alt="" className="hidden md:block md:rounded-md"/>
        <img src={imgProductSmall5} alt="" className="hidden md:block md:rounded-md"/>
    </section>
    
    );
};
