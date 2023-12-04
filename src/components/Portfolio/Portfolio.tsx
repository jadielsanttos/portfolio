import './Portfolio.scss'

import { portfolioItems } from '../../helpers/data'

import { useState } from 'react'

import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'

export const Portfolio = () => {
    const [modalOpened, setModalOpened] = useState<number>(0)

    const toggleModal = (id: number) => {
        setTimeout(() => {
            if(modalOpened === id) {
                setModalOpened(0)
            }else {
                setModalOpened(id)
            }
        }, 200)
    }

    return (
        <div className="area_section_portfolio">
            {portfolioItems.map((item) => (
                <div key={item.id} className="portfolio_item">
                    <div className="area_top">
                        <h1>{item.name}</h1>
                        <div onClick={() => toggleModal(item.id)} className="btn_options"><SlOptionsVertical /></div>
                    </div>
                    <div className="area_description">
                        <p className='p_description'>{item.description}</p>
                    </div>
                    <div className="area_bottom">
                        {item.techs.map((tech, index) => (
                            <div key={index} className="tech_item">{tech}</div>
                        ))}
                    </div>
                    {modalOpened === item.id &&
                        <div className="pop_up">
                            <nav>
                                {item.url !== null &&
                                    <a href={item.url} target='_blank'><FiExternalLink /> Ver projeto online</a>
                                }
                                <a href={item.repository} target='_blank'><BsGithub />Ver repositório</a>
                            </nav>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}