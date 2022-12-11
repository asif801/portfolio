import React from "react";
import { FaSms, FaWhatsapp } from "react-icons/fa";
import { GrLocation } from 'react-icons/gr';

const Contact = () => {
    const contact_info = [
        {
            logo: <FaSms></FaSms>,
            text: "meherubhossenasif1@gmail.com"
        },
        {
            logo: <FaWhatsapp></FaWhatsapp>,
            text: "01849544592"
        },
        {
            logo: <GrLocation></GrLocation>,
            text: "Chittagong",
        },
    ];
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl text-black font-semibold">
                    Contact <span className="text-green-400">Me</span>
                </h3>
                <p className="text-gray-700 mt-3 text-lg">Get in touch</p>

                <div
                    className="mt-16 flex md:flex-row flex-col
                    gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
                >
                    <form className="flex flex-col flex-1 gap-5">
                        <input className="input input-bordered text-black" type="text" placeholder="Your Name" />
                        <input className="input input-bordered text-black" type="Email" placeholder="Your Email Address" />
                        <textarea className="textarea textarea-bordered text-black" placeholder="Your Message" rows={10}></textarea>
                        <button className="btn btn-success w-fit">Send Message</button>
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-green-500 rounded-full">
                                   {contact.logo}
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
