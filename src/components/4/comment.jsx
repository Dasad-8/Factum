import './comment.css';

function Comment (props) {



    return <>
    
            <img className='comment-img' src={props.userImg} alt="User profile" /> 
            <div className='rating-comment'>
                <p>{props.userRating} з 5</p>
                <div className='stars-comment'>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                </div>
            </div>
            <h6>{props.userName}</h6>
            <p>{props.textComment}</p>
        
    </>
}

export default Comment;
