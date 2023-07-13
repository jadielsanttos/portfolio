import './Skills.scss'

import { TiHtml5 } from 'react-icons/ti'
import { FaCss3Alt, FaSass, FaLinux } from 'react-icons/fa'
import {  BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import { SiPhp, SiMysql, SiLaravel } from 'react-icons/si'

export const Skills = () => {

    const iconsSkills = [
        {name: 'HTML', icon: <TiHtml5 />},
        {name: 'CSS', icon: <FaCss3Alt />},
        {name: 'Javascript', icon: <BiLogoJavascript />},
        {name: 'Typescript', icon: <BiLogoTypescript />},
        {name: 'React', icon: <BiLogoReact />},
        {name: 'Tailwind CSS', icon: <BiLogoTailwindCss />},
        {name: 'SASS', icon: <FaSass />},
        {name: 'Git', icon: <BsGit />},
        {name: 'PHP', icon: <SiPhp />},
        {name: 'MYSQL', icon: <SiMysql />},
        {name: 'Laravel', icon: <SiLaravel />},
        {name: 'Linux', icon: <FaLinux />},
    ]

    return (
        <div className="area_section_skills">
            {iconsSkills.map((item, index) => (
                <div key={index} className="skill_item">
                    <span className="span_icon_skill">{item.icon}</span>
                </div>   
            ))}
        </div>
    )
}