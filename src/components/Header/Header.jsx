import logo from "../../logo.svg";
import classes from "./Header.module.css";


function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} className="logo" alt="logo" width="100" height="100"/>
        </header>
    );
}

export default Header;