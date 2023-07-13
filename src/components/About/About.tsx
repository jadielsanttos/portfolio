import './About.scss'

import { timeLine } from '../../helpers/data'

export const About = () => {
    return (
        <div className="area_section_about">
            <div className="left_side">
                <div className="vertical_bar"></div>
                <div className="area_info">
                    {timeLine.map((item, index) => (
                        <div key={index} className="item_info">
                            <div className="circle_item">{item.stage}</div>
                            <span className="span_label">{item.label}</span>
                        </div>
                    ))}
                </div>  
            </div>
            <div className="right_side">
                <p>Minha trajetória se iniciou há mais de 2 anos pelo Frontend, 
                onde me deu uma boa bagagem web e onde aprendi muitas tecnologias. Depois fui para o Backend e de cara ja gostei muito, 
                os problemas são outros e as responsabilidades também, e isso é o que me move, os desafios e problemas complexos fazem o programador um profissional único. 
                Atualmente, busco sempre escrever um código limpo e performático.
                </p>
            </div>
        </div>
    )
} 