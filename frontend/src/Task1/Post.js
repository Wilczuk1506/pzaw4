import "./Task1Style.css";

function Post(props){
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <img src={props.imgSrc} alt="imadż"></img>
            <p>{props.description}</p>
        </div>
    );
}

export default Post;