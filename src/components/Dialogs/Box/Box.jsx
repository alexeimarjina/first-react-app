import classes from "./Box.module.css";

function Box() {
    return (
        <div className={classes.dialogItems}>
            <h2 className={classes.dialogTitle}>Dialogs</h2>
            <ul className={classes.list}>
                <li className={classes.itemList}>Aima</li>
                <li className={`${classes.itemList} ${classes.itemActive}`}>Mite</li>
                <li className={classes.itemList}>Lucky</li>
                <li className={classes.itemList}>Shiva</li>
                <li className={classes.itemList}>Kimo</li>
                <li className={classes.itemList}>Lincoln</li>
                <li className={classes.itemList}>DrugAddict</li>
            </ul>
        </div>
    )
}

export default Box;