import './comments.css';
import Comment from './comment';

function Comments (props) {
    return <>
        <section className='wr'>
            <h2>Відгуки в Google</h2>
            <p className='rating'>4.92</p>
            <div className='stars'>
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
            </div>
            <p className='answer-counter'>на основі 244 відповідей</p>

            <div className='comment-list'>
                <button className='comments-left-arrow'><img src="./img/left-arrow.png" alt="error" /></button>
                <Comment />
                <Comment />
                <Comment />
                <button className='comments-right-arrow'><img src="./img/right-arrow.png" alt="error" /></button>
            </div>
        </section>
        
    </>
};

export default Comments;