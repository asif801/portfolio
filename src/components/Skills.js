import React from "react";
import { FaBootstrap, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiMaterialui, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Skills = () => {
    const skillsIcon = [
        {
            icon: <FaHtml5></FaHtml5>,
            level: "Advanced"
        },
        {
            icon: <FaCss3></FaCss3>,
            level: "Advanced"
        },
        {
            icon: <FaBootstrap></FaBootstrap>,
            level: "Advanced"
        },
        {
            icon: <SiTailwindcss></SiTailwindcss>,
            level: "Advanced"
        },
        {
            icon: <SiMaterialui></SiMaterialui>,
            level: "Begginner"
        },
        {
            icon: <SiJavascript></SiJavascript>,
            level: "Intermediate"
        },
        {
            icon: <FaReact></FaReact>,
            level: "Intermediate"
        },
      
        {
            icon: <DiNodejs></DiNodejs>,
            level: "Begginner"
        },
        {
            icon: <SiMongodb></SiMongodb>,
            level: "Begginner"
        },
    ];
    return (
        <section id="skills" className="py-10 relative">
            <div className="mt-8 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-green-500">Skills</span>
                </h3>
                <p className="text-gray-800 mt-3 text-lg">My knowledge</p>
                <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                    {
                        skillsIcon.map((icon, i) => <div key={i} className="border-2 group border-blue-500 shadow-2xl relative min-w-[10rem] max-w-[16rem] p-10 rounded-xl">
                            <div className="w-32 h-32 flex items-center justify-center bg-slate-200 rounded-xl">
                                <div className="text-9xl w-28 h-28 rounded-full text-black-400 flex items-center justify-center group-hover:text-blue-500">
                                    {icon.icon}
                                </div>
                            </div>
                            <p className="font-bold mt-6 text-xl bg-gradient-to-tr from-green-400 to-red-200 rounded-3xl p-3">{icon.level}</p>
                        </div>)
                    }


                </div>
            </div>
        </section>
    );
};

export default Skills;
