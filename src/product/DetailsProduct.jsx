import CartIcon from "../components/icons/CartIcon";

export default () => {
    return (
        <section className="container mx-auto px-4 md:px-0">
                <p className="text-orange-primary font-bold mb-3 tracking-wide">Edición limitada de tus  Sneakers.</p>
                <h2 className="font-bold text-3xl mb-4">AIR MAX 90 NRG.</h2>
                <p className="text-dark-grayish-blue mb-5">Nada más cómodo. Nada tan probado. La Nike Air Max 90 se mantiene fiel a sus raíces con la icónica suela tipo wafle, los revestimientos cosidos y los detalles clásicos de TPU en los ojales.
                </p>
                <div className="grid gap-4 grid-cols-3 items-center font-bold mb-5 md:grid-cols-[1fr_3fr]">
                    <span className="text-3xl">$40.000</span>
                    <span className="bg-pale-orange rounded-md mr-auto p-y-1 px-2 text-orange-primary">20%</span>
                    <span className="text-right text-grayish-blue text-lg line-through md:col-span-3 md:text-left">$50.000</span>
                    </div>
                <div className="grid grid-cols-3 font-bold gap-4 md:grid-cols-[1fr_1.7fr]">
                    <div className="col-span-3 bg-gray-200 flex items-baseline justify-between pb-3 py-2 rounded-md px-5 md:col-span-1">
                    <button className="text-3xl text-orange-primary">-</button>
                    <span className="text-xl">0</span>
                    <button className="text-3xl text-orange-primary">+</button>
                </div>
                    <button className="col-span-3 bg-orange-primary py-3 text-white rounded-md flex items-center justify-center gap-x-3 hover:bg-orange-600 transition-all md:col-span-1">
                        <CartIcon/>
                    <span>Agregar al Carrito</span>
                    </button>
                 </div>
                    
            </section>
    );
};



