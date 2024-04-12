import './comment.css';

function Comment (props) {


    return <>
        <section>
        <img className='comment-img' src={props.userImg} alt="User profile" /> 
            <div className='rating-comment'>
                <p>{props.userRating} з 5</p>
                <div className='stars-comment'>{(props.userRating === '1') ?
                    <img src="./img/star-blue2.png" alt="error" /> : (props.userRating === '2') ?<>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" /></> : (props.userRating === '3') ? <>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" /></> : (props.userRating === '4') ? <>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" /></> : (props.userRating === '5') ? <>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" /></> : null}
                </div>
            </div>
            <h6>{props.userName}</h6>
            <p>{props.textComment}</p>
        </section>
        
    </>
}

export default Comment;
