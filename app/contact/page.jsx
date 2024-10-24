"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
    Select,
    SelectContent, 
    SelectGroup,
    SelectItem, 
    SelectLabel,  
    SelectTrigger, 
    SelectValue,
 } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 96 6855 9277",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "jagkmr14356@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Dandu Street, Paralakhemundi, Odisha, Pin-761200",
    },
];

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Contact Me</h3>
                            <p className="text-white/60">
                                I'll contact you as soon as I'm able.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="tel" placeholder="Phone number" />
                            </div>
                            {/* Select Component */}
                            {/* Uncomment this section when needed */}
                            {/* 
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Services</SelectLabel>
                                        <SelectItem value="service1">Service 1</SelectItem>
                                        <SelectItem value="service2">Service 2</SelectItem>
                                        <SelectItem value="service3">Service 3</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> 
                            */}
                            {/* Textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here." />
                            <Button size="md" className="max-w-[40%]">
                                Send message
                            </Button>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
