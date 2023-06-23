import React from "react";
import "./Menu.css"

const Menu = ({ items, active, setActive }) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <div className="menu_items" onClick={e => e.stopPropagation()}>
                <ul>
                    {items.map((item) => (
                        <li key={item.href}>
                            {/* <span className="material-icons">{item.icon}</span> */}
                            <a href={item.href}>{item.value}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
  

export default Menu;

