import classes from "./Items.module.css";

function  Item() {
    return (
        <div className={classes.dialogBox}>
            <div className={classes.message}>
                <div className={classes.messageImg}>
                    <img src="https://fakeimg.pl/100/"/>
                    <h4 className={classes.messageName}>Aima</h4>
                </div>
                <p className={classes.dialogText}>Lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div className={classes.message}>
                <div className={classes.messageImg}>
                    <img src="https://fakeimg.pl/100/"/>
                    <h4 className={classes.messageName}>Lucky</h4>
                </div>
                <p className={classes.dialogText}>Lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div className={classes.message}>
                <div className={classes.messageImg}>
                    <img src="https://fakeimg.pl/100/"/>
                    <h4 className={classes.messageName}>Shiva</h4>
                </div>
                <p className={classes.dialogText}>Lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div className={classes.message}>
                <div className={classes.messageImg}>
                    <img src="https://fakeimg.pl/100/"/>
                    <h4 className={classes.messageName}>Mite</h4>
                </div>
                <p className={classes.dialogText}>Lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
        </div>
    )
}

export default Item;