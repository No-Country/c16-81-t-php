import { Link, NavLink } from "react-router-dom"
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../data';

const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-[200px] bg-[#343549] flex items-center">
        <div className="w-full max-w-screen-xl container mx-auto sm:pt-8 px-12 py-5">
            <div className="flex flex-col md:flex-row items-center justify-center sm:justify-between gap-4">
                <Link to="/">
                    <img src={logo} alt="ArenaMobile" className="w-[170px]" />
                </Link>
                <ul className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center text-center">
                    {footerLinks.map((link, index) => (
                        <li 
                        key={link.id}
                        className={`font-monse font-medium cursor-pointer text-[16px] sm:mr-10
                        text-texto hover:text-white`}
                        >
                        <NavLink to={link.path}>
                            {link.name}
                        </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row mt-0">
                    {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                    />
                    ))}
                </div>
            </div>
            <hr className="my-6 border-[#5C5D75] mx-auto w-full lg:my-8 mt-[35px]" />
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-center gap-2">
                <span className="font-monse text-sm text-[#5C5D75]">
                    Copyright © 2024 - Proyecto No Country
                </span>
                <span className="font-monse text-sm text-[#5C5D75]">
                    Creado por c16-81-t-php
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer