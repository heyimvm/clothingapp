import gilt from './../assets/gilt.jpg';
import { BiCategory } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from "react-icons/md";
import Headermenu from './../components/Headermenu';
import { HiDotsVertical } from "react-icons/hi";
import { useState } from 'react';

function Header() {
    const [toggle, setToggle] = useState(false);

    const menu = [
        { label: 'HOME', icon: FiHome },
        { label: 'MENU', icon: BiCategory },
        { label: 'ACCOUNT', icon: MdOutlineAccountCircle },
        { label: 'CART', icon: MdOutlineShoppingCart },
        { label: 'WISHLIST', icon: FaRegHeart }
    ];

    return (
        <div className="w-full bg-transparent text-white fixed top-0 left-0 z-50 flex items-center justify-between p-4 gap-3">
            <div className="flex gap-3 items-center">
                <img src={gilt} className='w-[80px] lmd:w-[115px] object-cover' />
                
                <div className="hidden md:flex gap-8">
                    {menu.map((item, index) => (
                        <Headermenu key={index} name={item.label} Icon={item.icon} />
                    ))}
                </div>

                
                <div className="flex md:hidden gap-5">
                    {menu.slice(0, 3).map((item, index) => (
                        <Headermenu key={index} name={''} Icon={item.icon} />
                    ))}

                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <Headermenu name={''} Icon={HiDotsVertical} />

                        {toggle && (
                            <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-5 px-3 py-3">
                                {menu.slice(3).map((item, index) => (
                                    <Headermenu key={index} name={item.label} Icon={item.icon} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
