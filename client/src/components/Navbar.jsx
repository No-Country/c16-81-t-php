import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {logo, menu, close} from '../assets';
import { navLinks } from '../data';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  
    return (
        <nav className="bg-primary w-full overflow-hidden">
            <div className="w-full flex py-6 justify-between items-center navbar">  
            
                <Link to="/">
                    <img src={logo} alt="ArenaMobile" className="w-[170px]" />
                </Link>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li 
                        key={nav.id}
                        className={`font-monse font-medium cursor-pointer text-[16px] mr-10
                        text-secondary hover:text-white`}
                        >
                        <NavLink to={nav.path} className={({ isActive }) =>
                            isActive ? 'text-white font-semibold' : 'text-secondary font-medium'
                        }>
                            {nav.name}
                        </NavLink>
                        </li>
                    ))}
                    <li>
                        <Link to="/login">
                        <button 
                            type='button'           
                            className={`py-2 px-6 bg-gray-gradient font-monse font-medium text-[16px]
                            text-white hover:text-secondary outline-none rounded-[14px] shadow-xl`}
                        > 
                            Ingresar
                        </button>
                        </Link>
                    </li>
                </ul>

        
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img 
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                    />
        
                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                        <li 
                        key={nav.id}
                        className={`font-monse font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                        >
                        <NavLink to={nav.path} className={({ isActive }) =>
                            isActive ? 'text-white font-semibold' : 'text-secondary font-medium'
                        }>
                            {nav.name}
                        </NavLink>
                        </li>
                        ))}
                        <li>
                            <Link to="/login">
                            <button 
                                type='button'           
                                className={`mt-4 py-2 px-6 bg-gray-gradient font-monse font-medium text-[16px]
                                text-white hover:text-secondary outline-none rounded-[14px] shadow-xl`}
                            > 
                                Ingresar
                            </button>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
  
export default Navbar