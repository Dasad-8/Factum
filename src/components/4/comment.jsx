import './comment.css';

function Comment (props) {

    return <>
        <div className='comment'>
            <img className='comment-img' src="./img/comment-user-img-1.png" alt="error" />
            <div className='rating-comment'>
                <p>5 з 5</p>
                <div className='stars-comment'>
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                    <img src="./img/star-blue2.png" alt="error" />
                </div>
            </div>
            <h6>Костянтин Яневський</h6>
            <p>Сервіс дуже непоганий, старанність та відповідальність присутні , прозорий формат роботи, можно спостерігати за всіма єтапами праці .</p>
        </div>
    </>
}

export default Comment;