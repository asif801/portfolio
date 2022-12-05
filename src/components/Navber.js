import React, { useEffect, useState } from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
const Navber = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <div>
            <nav
                className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-black/60  text-gray-900" : "text-black"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <div className="mx-7">
                        <h4 className="text-4xl uppercase font-bold">
                            KA<span className="text-green-500">MR</span>UL
                        </h4>
                    </div>
                    <div
                        className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-black"
                            } text-white md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
                    >
                        <ul className="flex items-center gap-1 py-2 text-lg">
                            {menuLinks?.map((menu, i) => (
                                <li key={i} className="px-6 hover:text-green-500">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`z-[999]  ${open ? "text-gray-900" : "text-black"
                            } text-3xl md:hidden m-5`}
                    >
                        <AiOutlineMenuFold></AiOutlineMenuFold>
                    </div>
                    <div
                        className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
                            }`}
                    >
                        <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                            {menuLinks?.map((menu, i) => (
                                <li
                                    onClick={() => setOpen(false)}
                                    key={i}
                                    className="px-6 hover:text-cyan-600"
                                >
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;