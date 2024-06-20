import classes from "./Items.module.css";

function ItemMessage({ imgSrc, name, text }) {
    return (
        <div className={classes.message}>
            <div className={classes.messageImg}>
                <img src={imgSrc} alt={name} />
                <h4 className={classes.messageName}>{name}</h4>
            </div>
            <p className={classes.dialogText}>{text}</p>
        </div>
    )
}

function Item() {
    return (
        <div className={classes.dialogBox}>
            <ItemMessage imgSrc="https://fakeimg.pl/100/" name="Aima" text="Lorem lorem lorem lorem lorem lorem lorem" />
            <ItemMessage imgSrc="https://fakeimg.pl/100/" name="Lucky" text="Lorem lorem lorem lorem lorem lorem lorem" />
            <ItemMessage imgSrc="https://fakeimg.pl/100/" name="Shiva" text="Lorem lorem lorem lorem lorem lorem lorem" />
            <ItemMessage imgSrc="https://fakeimg.pl/100/" name="Mite" text="Lorem lorem lorem lorem lorem lorem lorem" />
        </div>
    )
}

export default Item;