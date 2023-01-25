import DetailsProduct from "@/product/DetailsProduct";
import SlideProduct from "@/product/SlideProduct";

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] md:mx-auto md:container">
            <SlideProduct />
            <DetailsProduct />
      </main>
       
    );
};

export default MainProduct;