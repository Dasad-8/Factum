import './comments.css';
import Comment from './comment';
import React, {useState, useEffect} from 'react';

function Comments (props) {

    const [comments, setComments] = useState([]);

    useEffect(() =>{
        fetchComments();
    }, []);

    const fetchComments = async() =>{
        fetch ("./comments-user.json")
        .then(response => response.json())
        .then(comments =>{console.log('Received data:', comments);
        setComments(comments)});
    }

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
                {/* добавить Loader + добавить тернарный оператор и сделать как в
                    каталоге тег Comment + Comments.
                    В данный момент ошибка выходит!!!! + одно предупреждение (Line 9:47:  'comments' is not defined  no-undef) */}
                <Comment  />
                <Comment />
                <Comment />
                <button className='comments-right-arrow'><img src="./img/right-arrow.png" alt="error" /></button>
            </div>
        </section>
        
    </>
};

export default Comments;
