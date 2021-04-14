import React from 'react'
import './SideBarButton.css';
import { useStateValue } from './StateProvider';

const SideBarButton = ({children, title}) => {

    const [{open}, dispatch] = useStateValue()

    return (
        <div>
            {open
            ? (
                <div className="sidebarbutton__open">
                    <div className="sidebarbutton__container">
                        <div className="sidebarbutton__children">{[children]}</div>
                        <div>{title}</div>
                    </div>
                </div>
            )
            : (
                <div className="sidebarbutton__closed">
                    <div className="sidebarbutton__closedChildren">{[children]}</div>
                    <div className="sidebarbutton__text">{title}</div>
                </div>
            ) 
            }
        </div>
    )
}

export default SideBarButton;
