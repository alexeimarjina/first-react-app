import classes from './Navbar.module.css';

function Navbar() {
    return(
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <a href="/simple-page-react/public" className={`${classes.link} ${classes.active}`}>Profile</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/simple-page-react/public" className={classes.link}>Messages</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/simple-page-react/public" className={classes.link}>News</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/simple-page-react/public" className={classes.link}>Music</a>
                    </li>
                    <li className={classes.li}>
                        <a href="/simple-page-react/public" className={classes.link}>Settings</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;