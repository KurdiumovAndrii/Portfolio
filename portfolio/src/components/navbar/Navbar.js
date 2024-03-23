import "./style.css";

import {NavLink} from "react-router-dom"

import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

function Navbar () {

    const link = 'nav-list__link';
    const activeLink = 'nav-list__link nav-list__link--active';

return (
<nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Andrii Kurdiumov</strong> Portfolio
                </NavLink>

                <button className="dark-mode-btn">
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </button>

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) =>  isActive ? activeLink : link}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/projects" className={({isActive}) =>  isActive ? activeLink : link}>
                            Projects
                        </NavLink></li>
                    <li className="nav-list__item">
                        <NavLink to="/contact" className={({isActive}) =>  isActive ? activeLink : link}>
                            Contact
                        </NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Navbar;