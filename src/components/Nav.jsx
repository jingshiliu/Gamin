import { PiGameController } from "react-icons/pi";
import Hamburguer from '../assets/icons/hamburger.svg';
import {useState} from "react";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="xl:px-36 lg:px-20 px-12 p-10  flex justify-between items-center relative">
            <h1 className={'flex items-center'}>
                <PiGameController className={'w-10 h-10'}/>
                <span className={'text-lg font-mono ml-2'}>
                    Gamin
                </span>
            </h1>
            <nav
                className={'text-base flex justify-between lg:space-x-14 text-slate-500 font-light max-md:hidden md:space-x-8 items-center'}>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Products</a>
                <a href="">Contact Us</a>
            </nav>
            <a className={'font-thin font-semibold max-md:hidden'}>Sign In / Explore Now</a>

            <button
                className={'md:hidden object-contain w-8'}
                onClick={() => setShowMenu(!showMenu)}
            >
                <img className={''} src={Hamburguer} alt="Hamburguer Menu"/>
            </button>

            {showMenu ? (
                <nav
                    className={'text-base flex flex-col justify-between text-slate-500 font-light md:hidden items-center absolute left-0 top-2/3 border-b-2 w-full space-y-5 text-center'}
                >
                    <a href="">Home</a>
                    <a className={'w-1/3 border-t-2 border-slate-200 pt-4 hover:text-slate-400'} href="">About Us</a>
                    <a className={'w-1/3 border-t-2 border-slate-200 pt-4 hover:text-slate-400'} href="">Products</a>
                    <a className={'w-1/3 border-t-2 border-slate-200 pt-4 hover:text-slate-400'} href="">Contact Us</a>
                    <a className={'w-1/3 border-t-2 border-slate-200 pt-4 hover:text-slate-400 hover:cursor-pointer pb-8 font-semibold'}>
                        Sign In / Explore Now</a>
                </nav>
            ) : <></>}
        </header>
    );
};

export default Nav;