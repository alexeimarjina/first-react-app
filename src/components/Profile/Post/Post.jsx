import classes from './Post.module.css';

function Posts(props) {
    console.log(props);
    return (
        <div className={classes.posts}>
            <img src="https://fakeimg.pl/50x50/" alt=""/>
            <p className={classes.postText}>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}

export default Posts;

