import './Portfolio.scss'

import { portFolioItems } from '../../helpers/data'

import { useState } from 'react'

import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { SlOptionsVertical } from 'react-icons/sl'

export const Portfolio = () => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = (index: number) => {

        if(index === 0) {
            if(showModal) {
                setShowModal(false)
            }else {
                setShowModal(true)
            }
        }
    }

    return (
        <div className="area_section_portfolio">
            {portFolioItems.map((item, index) => (
                <div key={index} className="portfolio_item">
                    <div className="area_top">
                        <h1>{item.name}</h1>
                        <div onClick={() => toggleModal(index)} className="btn_options"><SlOptionsVertical /></div>
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
        </div>
    )
}