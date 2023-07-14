import './Footer.scss'

import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

export const Footer = () => {

    type IconItem = {
        url: string
        icon: JSX.Element
    }

    const listIcons: IconItem[] = [
        {url: 'mailto:jadielsilva11406@gmail.com', icon: <BiLogoGmail />},
        {url: 'https://github.com/jadielsanttos', icon: <BsGithub />},
        {url: 'https://www.linkedin.com/in/jadiel-santos/', icon: <BsLinkedin />},
        {url: 'https://instagram.com/jadielsantosof', icon: <BsInstagram />}
    ]

    return (
        <div className="area_section_footer">
            <div className="area_copy"><p>Jadiel Santos - Desenvolvedor fullstack</p></div>
            <div className="area_icons_social_media">
                <ul>
                    {listIcons.map((item, index) => (
                        <li key={index}><a href={item.url} target="_blank">{item.icon}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}