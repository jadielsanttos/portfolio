import './Menu.scss'

import { menuItems } from '../../helpers/data'

import { GrFormClose } from 'react-icons/gr'
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react'

export const Menu = () => {

    const [menuMobile, setMenuMobile] = useState<boolean>(false)

    const openMenuMobile = () => {
        setTimeout(() => {
            setMenuMobile(true)
        }, 200)  
    }

    const closeMenuMobile = () => {
        setTimeout(() => {
            setMenuMobile(false)
        }, 200)
    }

    return (
        <div className="area_menu">
            <div className="area_logo">
                <a href="/"><img src="assets/logo.png" alt="Logo" /></a>
            </div>
            <div className="area_menu_items">
                <div onClick={openMenuMobile} className="toggle_menu"><HiMenuAlt1 /></div>
                {menuMobile &&
                    <div className="menu_mobile">
                        <div onClick={closeMenuMobile} className="btn_close_menu_mobile"><GrFormClose /></div>
                        <nav>
                            <ul>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a onClick={closeMenuMobile} href={item.href} target={item.target ? "_blank" : ""}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                }
            </div>
        </div>
    )
}