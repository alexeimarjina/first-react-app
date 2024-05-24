import classes from "./Dialogs.module.css";
import Box from "./Box/Box";
import Item from "./Items/Item";

function Dialogs() {
    return(
        <div className={classes.right}>
            <div className={classes.dialogBody}>
                <Box/>
                <Item/>
            </div>
        </div>
    )
}

export default Dialogs;