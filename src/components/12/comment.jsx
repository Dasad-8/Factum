import './comment.css';

function Comment (props) {

    let stars = []
    for (let i = 0; i < props.userRating; i++){
        stars.push(<img src='./img/star-blue2.png' alt='error' />)
    }

    return <>
        <section>
        <img className='comment-img' src={props.userImg} alt="User profile" /> 
            <div className='rating-comment'>
                <p>{props.userRating} з 5</p>
                <div className='stars-comment'>
                    {stars}
                </div>
            </div>
            <h6>{props.userName}</h6>
            <p>{props.textComment}</p>
        </section>
        
    </>
}

export default Comment;
