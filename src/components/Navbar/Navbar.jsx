import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>
                        Profile
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink to="/dialogs" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>
                        Messages
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink to="/news" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>
                        News
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink to="/music" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>
                        Music
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? classes.activeLink : classes.link}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
