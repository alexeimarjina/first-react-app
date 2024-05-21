import classes from './Post.module.css';

function Posts(props) {
    return (
        <div className={classes.posts}>
            <img src="https://fakeimg.pl/50x50/" alt=""/>
            { props.message }
            <span className={classes.like}>{props.likesCounts} likes</span>

        </div>
    );
}

export default Posts;

