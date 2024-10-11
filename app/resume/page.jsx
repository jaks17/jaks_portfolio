"use client";

import{
    FaJava, 
    FaHtml5, 
    FaCss3, 
    FaJs,
    FaReact,
    FaAngular,
    FaSpringBoot,
} from "react-icons/fa";

import{
   SiTailwindcss, SiNextdotjs} from "react-icons/si";

//about data
const about={
    tittle: 'about me',
    descpription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quitbusdam, sunt explicabo inventore.",
    info: [
        {
            filedName: "Name",
            fieldValue: "Gaddapu Jagan Kumar"
        },
        {
            filedName: "Phone",
            fieldValue: "(+91) 96 6855 9277"
        },
        {
            filedName: "Experience",
            fieldValue: "Fresher"
        },
        {
            filedName: "Name",
            fieldValue: "Gaddapu Jagan Kumar"
        },
        {
            filedName: "Nationality",
            fieldValue: "Indian"
        },
        {
            filedName: "Email",
            fieldValue: "jagkmr14356@gamil.com"
        },
        {
            filedName: "Languages",
            fieldValue: "English, Hindi, Odia, Telugu"
        },
    ]
};
//Experience
const experience = {
    title: "Experience",
    description: "No professional experience yet."
};
//Education
const education = {
    icon: "",
    title: "My education",
    descpription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quitbusdam, sunt explicabo inventore.",
    items: [
        {
            institution: "Naresh IT",
            degree: "Full Stack Java Development", 
            duration: "2023-Apr",
        },
        {
            institution: "Coursera Online",
            degree: "Crash Course on Python", 
            duration: "2021-Feb",
        },
        {
            institution: "Khallikote Autonomous College",
            degree: "Master in Computer Science", 
            duration: "2020-2022",
        },
        {
            institution: "Shri Krushna Chandra Gajapati Autonomous College",
            degree: " Bachelor of Science in Computer Science", 
            duration: "2016-2019",
        },
    ]
};

//siklls data
const skills= {
    title:"My skills",
    descpription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quitbusdam, sunt explicabo inventore.",
    skillList: [
        {
            icon: <FaJava />,
            name: "java",
        },
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "Css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react",
        },
        {
            icon: <FaAngular />,
            name: "angular",
        },
        {
            icon: <FaSpringBoot />,
            name: "spring boot",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, 
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () => {
    return <motion.div
     initial={{opacity: 0}} 
     animate={{
        opacity:1, 
        transition: {delay:2.4, duration:0.4, ease: "easeIn"}
    }}
    
    clasName="min-h-[80vh] flex item=center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" 
            clasName="flex flex-col xl:flex-row gap-[60px]">
                <TabsList clasName="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="eduction">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                            </div>
                        </TabsContent>



                        {/* education */}
                    <TabsContent value="education" clasName="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea clasName="h-[400px]">
                                    <ul clasName=" grid grid-cols-1 lg:grid-cols-2 gap[30px]">
                                        {education.items.map((item, index)=>{
                                            return <li key={index} clasName="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 clasName="text-xl max-w-[260px] min-h-[60px]
                                                text-center lag:text-left">{item.degree}</h3>
                                                <div clasName="flex item-center gap-3">
                                                    {/* dot */}
                                                    <span clasName="w-[60px] h-[6px] rounded-full bg-accent"></span>
                                                    <p clasName="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                    <TabsContent value="skills" clasName="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <h3 clasName="text-4xl font-bold">{skills.title}</h3>
                            <p clasName="max-w-[60px">{skills.description}</p>
                            <ul>
                                {skills.skillList.map((skill, index)=>{
                                    return <li key={index}{skill.name}></li>;
                                })}
                            </ul>
                        </div>
                        </TabsContent>
                        {/* about */}
                    <TabsContent value="about" clasName="w-full">
                        about
                        </TabsContent>
                </div>
            </Tabs>
        </div>
        </motion.div>;
};
 export default Resume;