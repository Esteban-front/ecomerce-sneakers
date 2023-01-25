import LogoSvg from '@/assets/images/logo.svg';
import AvatarImage from '@/assets/images/image-avatar.png';
import MenuIcon from '@/components/icons/MenuIcons';
import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import { useState } from 'react';
import NavLinkHeader from '@/components/header/NavLinkHeader';

const MainHeader = () => {
    const [navClass, setNavClass ] = useState("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");

const handleOpenMenu = () => {
    setNavClass ("left-0 absolute top-0 flex flex-col md:mr-auto md:flex-row md:gap-4 bg-white h-full p-8 gap-y-[21px] font-bold w-4/5 md:static md:p-0 md:h-auto z-10");
};

const handleCloseMenu = () => {
    setNavClass ("hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0");

};



    return (
        
        <>
            <header className="container mx-auto flex items-center gap-8 py-4 md:p-0 p-4">
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <img src={LogoSvg} alt="Logo Sneakers" className="mr-auto mb-1 h-5 md:mr-0"
            />
            <nav className={navClass}>
                <button className="mb-10 md:hidden" onClick={handleCloseMenu}>
                <CloseIcon />
                </button>
             <NavLinkHeader text="Coleccion"/>
             <NavLinkHeader text="Hombres"/>
             <NavLinkHeader text="Mujeres"/>
             <NavLinkHeader text="Sobre nosotros"/>
             <NavLinkHeader text="Contacto"/>
            </nav>
            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={AvatarImage} alt="Avatar" className="w-10" />
            </div>
        </header>
        <span className="container md:block mx-auto hidden h-[1px] w-full bg-gray-500 "></span>
        </>
    );
};


export default MainHeader;




