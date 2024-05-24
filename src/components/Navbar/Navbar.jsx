import classes from './Navbar.module.css';

function Navbar() {
    return(
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <a href="/profile" className={`${classes.link} ${classes.active}`}>Profile</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/dialogs" className={classes.link}>Messages</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/news" className={classes.link}>News</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/music" className={classes.link}>Music</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/settings" className={classes.link}>Settings</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;