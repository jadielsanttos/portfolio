import './BtnToTop.scss'

import { BsArrowUpShort } from 'react-icons/bs'

type Props = {
    click: () => void
}

export const BtnToTop = ({ click }: Props) => {
    return (
        <div onClick={click} className="btn_scroll_to_top">
            <BsArrowUpShort />
        </div>
    )
}