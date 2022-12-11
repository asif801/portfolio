import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../Image/project-1.png";
import project2 from "../Image/project-2.jpg";
import project3 from "../Image/project-3.jpg";
import project4 from "../Image/project-4.jpg";
import project5 from "../Image/project-5.png";
import project_person from "../Image/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Myprojects = () => {
    const projects = [
        {
            img: project1,
            name: "Second Hand Car Buy-Sell",
            github_link: "https://github.com/asif801/carbs",
            live_link: "https://carbs-1687c.web.app/",
        },
        {
            img: project2,
            name: "Job search Web App",
            github_link: "https://github.com/asif801/sell_phones_client",
            live_link: "https://myjobsearch.netlify.app",
        },
        {
            img: project3,
            name: "Highking",
            github_link: "https://github.com/asif801/tutor_client",
            live_link: "https://highking01.netlify.app",
        },
        {
            img: project4,
            name: "World Cup 2022",
            github_link:
                "https://github.com/asif801/world_cup_2022",
            live_link: "https://calm-malabi-dd2a4e.netlify.app",
        },
        {
            img: project5,
            name: "Tech Website",
            github_link: "https://github.com/asif801/asif_tech_website",
            live_link: "https://asifwebtech.netlify.app",
        },
    ];
    return (
        <div>
            <section id="projects" className="py-10 text-white">
                <div className="text-center">
                    <h3 className="text-4xl text-black font-semibold">
                        My <span className="text-green-500 font-bold">Projects</span>
                    </h3>
                    <p className="text-gray-700 mt-3 text-lg">My awesome works</p>
                </div>
                <br />
                <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                    <div className="lg:w-2/3 w-full">
                        <Swiper
                            slidesPerview={1.2}
                            spaceBetween={20}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                        >
                            {projects.map((project_info, i) => (
                                <SwiperSlide key={i}>
                                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                        <img src={project_info.img} alt="" className="rounded-lg" />
                                        <h3 className="text-xl my-4">{project_info.name}</h3>
                                        <div className="flex gap-3">
                                            <a href={project_info.github_link} target="_blank"
                                                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                            >
                                                Github
                                            </a>
                                            <a
                                                href={project_info.live_link}
                                                target="_blank"
                                                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="lg:block hidden">
                        <img src={project_person} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Myprojects;