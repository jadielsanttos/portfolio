import './Portfolio.scss'

import { portFolioItems } from '../../helpers/data'
import { PortfolioItem } from '../../types/PortfolioItem'

import { useState } from 'react'

import { GrFormClose } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'

export const Portfolio = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [filteredItem, setFilteredItem] = useState<PortfolioItem[]>([])

    const openModal = (id: number) => {
        const newList = portFolioItems.filter((item) => item.id === id)
        setFilteredItem(newList)

        setTimeout(() => {
            if(showModal === false) setShowModal(true)
        }, 200)
    }

    const closeModal = () => {
        setTimeout(() => {
            if(showModal === true) setShowModal(false)
        }, 200)
    }

    return (
        <div className="area_section_portfolio">
            {portFolioItems.map((item) => (
                <div key={item.id} className="portfolio_item">
                    <div className="area_top">
                        <h1>{item.name}</h1>
                        <div onClick={() => openModal(item.id)} className="btn_options"><SlOptionsVertical /></div>
                    </div>
                    <div className="area_description">
                        <p className='p_description'>{item.description}</p>
                    </div>
                    <div className="area_bottom">
                        {item.techs.map((tech, index) => (
                            <div key={index} className="tech_item">{tech}</div>
                        ))}
                    </div>
                </div>
            ))}

            {showModal !== false &&
                <div className="shadow_effect">
                    <div className="portfolio_modal">
                        <div onClick={closeModal} className="area_btn_close_modal">
                            <span><GrFormClose /></span>
                        </div>
                        {filteredItem.map((link) => (
                            <nav className="nav_modal" key={link.id}>
                                {link.url !== null &&
                                    <a href={link.url} target="_blank"><FiExternalLink /> Ver projeto online</a>
                                }
                                <a href={link.repository} target="_blank"><BsGithub /> Ver repositório</a>
                            </nav>    
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}