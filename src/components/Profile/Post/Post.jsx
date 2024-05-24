import classes from './Post.module.css';

function Posts(props) {
    return (
        <div className={classes.posts}>
            <img src="https://fakeimg.pl/50x50/" alt=""/>
            <p className={classes.postText}> {props.message}</p>
            <span className={classes.like}> {props.likeCount}likes</span>
        </div>
    );
}

export default Posts;

