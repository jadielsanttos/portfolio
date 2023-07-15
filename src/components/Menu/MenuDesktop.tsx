import './MenuDesktop.scss'

import { menuItems } from '../../helpers/data'

export const MenuDesktop = () => {

    return (
        <div className="area_menu">
            <div className="area_logo">
                <a href="/"><img src="/logo.png" alt="Logo" /></a>
            </div>
            <div className="area_menu_items">
                <div className="menu_desktop">
                    <nav>
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} target={item.target ? "_blank" : ""}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}