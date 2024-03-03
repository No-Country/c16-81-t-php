import { useEffect, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { logo, menu, close } from '../assets';
import { navLinks } from '../data';
// import RefreshOnNavigate from './RefreshOnNavigate';

const Navbar = () => {
    const navigate = useNavigate();
    
    const [toggle, setToggle] = useState(false);
    const [hasToken, setHasToken] = useState(false)

    useEffect(() => {
        const handleStorage = () => { 
            setHasToken(!!localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME))
        }
            
        window.addEventListener('storage', handleStorage)
        handleStorage()
        
        return () => { window.removeEventListener('storage', handleStorage) }
    }, [])

    const logout = async() => {
        setToggle(false); 
        try {
            const token = localStorage.getItem(import.meta.env.VITE_USER_TOKEN_NAME)
            const resp = await fetch('http://127.0.0.1:8000/api/logout', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json",
                    withCredentials: "true",
                },
            });
            
            const data = await resp.json()
            if (!resp.ok) {
                throw new Error(`Error al iniciar sesión: ${data.message}`)
            }
    
            const { message } = data 
            console.log(message)
            localStorage.removeItem(import.meta.env.VITE_USER_TOKEN_NAME)
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.error(error.message);
            alert(error.message)
        }

        navigate('/');
        window.location.reload();
    }
  
    return (
        <nav className="bg-primary w-full overflow-hidden">
            {/* <RefreshOnNavigate /> */}
            <div className="w-full flex py-6 justify-between items-center navbar">  
            
                <Link to="/">
                    <img src={logo} alt="ArenaMobile" className="w-[170px]" />
                </Link>

                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav) => (
                        (nav.id !== "dashboard" || hasToken) && (
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
                        )
                    ))}
                    {
                            !hasToken && 
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
                        </li>}
                        {
                            hasToken &&
                            <li>
                            <Link to="/">
                            <button 
                                onClick={logout}
                                type='button'           
                                className={` py-2 px-6 bg-gray-gradient font-monse font-medium text-[16px]
                                text-white hover:text-secondary outline-none rounded-[14px] shadow-xl`}
                            > 
                                Cerrar sesión
                            </button>
                            </Link>
                        </li>
                    }
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
                             (nav.id !== "dashboard" || hasToken) && (
                        <li 
                        key={nav.id}
                        className={`font-monse font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0 mb-4' : 'mb-4'} text-white`}
                        >
                        <NavLink 
                        to={nav.path} 
                        onClick={() => setToggle(false)}
                        className={({ isActive }) =>
                            isActive ? 'text-white font-semibold' : 'text-secondary font-medium'
                        }>
                            {nav.name}
                        </NavLink>
                        </li>
                             )
                        ))}
                        {
                            !hasToken && 
                            <li>
                            <Link to="/login" onClick={() => setToggle(false)}>
                            <button 
                                type='button'           
                                className={` py-2 px-6 bg-gray-gradient font-monse font-medium text-[16px]
                                text-white hover:text-secondary outline-none rounded-[14px] shadow-xl`}
                            > 
                                Ingresar
                            </button>
                            </Link>
                        </li>}
                        {
                            hasToken &&
                            <li>
                            <Link to="/">
                            <button 
                                type='button'           
                                onClick={logout}
                                className={` py-2 px-6 bg-gray-gradient font-monse font-medium text-[16px]
                                text-white hover:text-secondary outline-none rounded-[14px] shadow-xl`}
                            > 
                                Cerrar sesión
                            </button>
                            </Link>
                        </li>
                        }
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
  
export default Navbar
