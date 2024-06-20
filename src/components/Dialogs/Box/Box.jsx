import classes from "./Box.module.css";
import {NavLink} from "react-router-dom";


function BoxItem({ id, name, imgSrc, text }) {
    return (
        <li className={classes.itemList}>
            <NavLink to={"/dialogs/" + id} className={({ isActive }) => isActive ? classes.activeItems : classes.boxItems}>
                {name}
            </NavLink>
        </li>
    )
}

function Box() {
    return (
        <div className={classes.dialogItems}>
            <h2 className={classes.dialogTitle}>Dialogs</h2>
            <ul className={classes.list}>
                <BoxItem name="Aima" id="1" />
                <BoxItem name="Mite" id="2" />
                <BoxItem name="Lucky" id="3" />
                <BoxItem name="Shiva" id="4" />
                <BoxItem name="Kimo" id="5" />
                <BoxItem name="Lincoln" id="6" />
                <BoxItem name="DrugAddict" id="7" />
            </ul>
        </div>
    )
}

export default Box;