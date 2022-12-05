import React from 'react';
import hero from '../Image/hero.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
    return (
        <div>
            <section
                id="home"
                className="min-h-screen flex p-10 md:flex-row flex-col items-center"
            >
                <div className="flex-1 flex items-center justify-center h-full">
                    <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
                </div>
                <div className="flex-1">
                    <div className="md:text-left text-center">
                        <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-green-500 font-bold">
                            <span className="text-black md:text-6xl text-5xl">
                                Hello!
                                <br />
                            </span>
                            My Name is <span>kamrul Hasan</span>
                        </h1>
                        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                            Fullstack Developer
                        </h4>
                        <button className="btn btn-success font-bold mt-8">Contact Me</button>
                        <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaWhatsapp></FaWhatsapp>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;