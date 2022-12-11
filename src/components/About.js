import React from 'react';
import aboutImg from '../Image/about.png';

const About = () => {

    const info = [
        { text: "Years experience", count: "01" },
        { text: "Completed Projects", count: "08" },
        { text: "Companies Work", count: "01" },
      ];


    return (
        <div>
            <section id="about" className="py-10 text-black">
                <div className="text-center mt-8">
                    <h3 className="text-4xl font-semibold">
                        About <span className="text-cyan-600">Me</span>
                    </h3>
                    <p className="text-gray-700 my-3 text-lg">My introduction</p>
                    <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                        <div className="p-2">
                            <div className="text-gray-700 my-3">
                                <p className="text-justify leading-7 w-11/12 mx-auto">
                                    I never believe that a person who success in life and fill up his aim without proper planning,hardworking and perseveration.I would like to get a success in my life by proper planning,
                                    hardworking and perseveration.It is not only hope but also my believe that I would able to success in my life.I would also like to do my job honestly.
                                </p>
                                <div className="flex mt-10 items-center gap-7">
                                    {info.map((content) => (
                                        <div key={content.text}>
                                            <h3 className="md:text-4xl text-2xl font-semibold text-black">
                                                {content.count}
                                                <span className="text-cyan-600">+</span>{" "}
                                            </h3>
                                            <span className="md:text-base text-xs">{content.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <br />
                                <br />
                                <a target="_blank"
                                href="https://drive.google.com/file/d/1nytnEAvHUipyKwYyCYiqTAeAGKon1lkl/view?usp=share_link"
                                class="main-btn">
                                    <button className="btn btn-success">Download CV</button>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                                <img
                                    src={aboutImg}
                                    alt=""
                                    className="w-full object-cover bg-cyan-600 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;