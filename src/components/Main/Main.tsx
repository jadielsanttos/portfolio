import './Main.scss'

import { AiOutlineSend } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export const Main = () => {
    return (
        <div className="area_section_main">
            <div className="left_side">
                <div className="text_top">
                    <span>Olá, me chamo Jadiel Santos e atuo como</span>
                </div>
                <div className="area_text_main">
                    <h1>Desenvolvedor fullstack</h1>
                    <div className="borders">
                        <div className="border_left"></div>
                        <div className="border_right"></div>
                    </div>
                </div>
                <div className="text_description">
                    <p>Fascinado por esse mundo de tecnologia e programação, estou sempre buscando evolução.</p>
                </div>
                <div className="area_btn_cta">
                    <a href="https://api.whatsapp.com/send?phone=5598996070979" target="_blank">Enviar mensagem <AiOutlineSend /></a>
                </div>
            </div>
            <div className="right_side">
                <div className="area_icons_hover">
                    <a href="https://github.com/jadielsanttos" target='_blank' className="icon_item"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/jadiel-santos/" target='_blank' className="icon_item"><BsLinkedin /></a>
                </div>
                <div className="area_img">
                    <img src="/assets/my-img.png" alt="Minha imagem" />
                </div>
            </div>
        </div>
    )
}