import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

const about = {
    title: "About me",
    description: "",
    info:[
        {
            fieldName: "Name",
            fieldValue: "Nusrat Jahan",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+880) 1521260100",
        },
        {
            fieldName: "Experience",
            fieldValue: "Fresher",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nusrat Jahan",
        },
        {
            fieldName: "Email",
            fieldValue: "nusrat.nova16@gmail.com",
        }
    ]
}
const education ={
    title: "My education",
    description:"",
    items: [
        {
            institution: "Stamford University Bangladesh",
            CGPA:"3.64",
            duration: "2019-2024",
        }
    ]
}
const skills ={
    title: "My skills",
    description:"",
    skillList:[
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "css 5",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaReact/>,
            name: "react.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs/>,
            name: "node.js",
        },
        {
            icon: <FaFigma/>,
            name: "figma",
        },
    ]
}
const Resume = () => {
    
    return (
        <div className='min-h-[80vh] flex items-center justify-center py-12 lg:py-0'>
            <div>
                <Tabs defaultValue={skills} className='flex flex-col lg:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6'>
                        <TabsTrigger>Education</TabsTrigger>
                        <TabsTrigger>Skills</TabsTrigger>
                        <TabsTrigger>About me</TabsTrigger>
                        <TabsTrigger>Resume</TabsTrigger>
                    </TabsList>
                    <div>
                        content
                    </div>
                </Tabs>
            </div>
            
        </div>
    );
};

export default Resume;