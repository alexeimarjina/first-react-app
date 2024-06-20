import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.img}>
                <img src="https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto" alt=""/>
            </div>
            <div className={classes.descr}>
                <h3 className={classes.name}>Lorem Lorem</h3>
                <p className={classes.dob}>Date of birth : 20 january</p>
                <p className={classes.dob}>Minsk</p>
                <p className={classes.education}>BSU</p>
                <p className={classes.website}>it-kamasutra.com</p>
            </div>
        </div>
    )
}

export default ProfileInfo;