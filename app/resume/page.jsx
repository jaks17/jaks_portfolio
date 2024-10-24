"use client";

import {
    FaJava, 
    FaHtml5, 
    FaCss3, 
    FaJs,
    FaReact,
    FaAngular,
    FaGit,
    FaDocker,
} from "react-icons/fa";

import {
   SiTailwindcss, 
   SiNextdotjs
} from "react-icons/si";

// About data
const about = {
    title: 'About Me', 
    description: "I'm a full-stack developer who loves creating elegant and easy-to-use digital experiences. Skilled in Java, Spring Boot, Angular, and microservices, I focus on building scalable, efficient solutions while always learning and improving.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Gaddapu Jagan Kumar"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 96 6855 9277"
        },
        {
            fieldName: "Experience",
            fieldValue: "Fresher"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian"
        },
        {
            fieldName: "Email",
            fieldValue: "jagkmr14356@gmail.com" // Corrected email domain
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Hindi, Odia, Telugu"
        },
    ]
};

// Experience data
const experience = {
    title: "Experience",
    description: "No professional experience yet."
};

// Education data
const education = {
    title: "My Education", 
    description: "I hold a Master’s degree in Computer Science and have completed a Full Stack Java Development course and a Crash Course on Python. My education has given me a strong foundation in software development and modern technologies.",
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
            degree: "Bachelor of Science in Computer Science", 
            duration: "2016-2019",
        },
    ]
};

// Skills data
const skills = {
    title: "My Skills",
    description: "I specialize in full-stack development with skills in Java, Spring Boot, HTML, CSS, JavaScript, React, and Angular. I also work with databases like Oracle SQL and MySQL, and I’m familiar with tools like Docker, Postman, Git, and GitHub.",
    skillList: [
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <FaAngular />,
            name: "Angular",
        },
        {
            icon: <FaGit />,
            name: "Git",
        },
        {
            icon: <FaDocker />,
            name: "Docker",
        }
        
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// SkillsList Component
const SkillsList = ({ skillList }) => {
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
            {skillList.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
            ))}
        </ul>
    );
};

// Resume Component
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]"> 
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3> 
                                                <div className="flex items-center gap-3"> 
                                                    <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full"> 
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> 
                                </div>
                                <SkillsList skillList={skills.skillList} />
                            </div>
                        </TabsContent>

                        {/* About Me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left"> 
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=>(
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span>{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
