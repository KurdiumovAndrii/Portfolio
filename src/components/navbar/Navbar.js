import "./style.css";

import {NavLink} from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

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

                <BtnDarkMode />

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
                        <NavLink to="/about" className={({isActive}) =>  isActive ? activeLink : link}>
                            About Me
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