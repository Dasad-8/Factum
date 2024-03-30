import './comments.css';
import Comment from './comment';
import CommentLoader from './comment-loader.jsx';
import React, {useState, useEffect} from 'react';

function Comments (props) {

/*             <ol className='comment-list'>{ (comments.length === 0) ? <> 
                <CommentLoader /> 
                <CommentLoader /> 
                <CommentLoader /> </> : comments.map ( (item, index) =>
                    ( <li className='comment' key={index}>
                        <Comment userImg={item.userImg} userRating={item.userRating} userName={item.userName} textComment={item.textComment} />
                        <Comment userImg={item.userImg} userRating={item.userRating} userName={item.userName} textComment={item.textComment} />
                        <Comment userImg={item.userImg} userRating={item.userRating} userName={item.userName} textComment={item.textComment} />
                    </li> ) )
                
            }
                <button className='comments-left-arrow'><img src="./img/left-arrow.png" alt="error" /></button>
               
                <button className='comments-right-arrow'><img src="./img/right-arrow.png" alt="error" /></button>}
            </ol> */

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

            <ol className='comment-list'>
                <button className='comments-left-arrow'><img src="./img/left-arrow.png" alt="error" /></button>
                
                { (comments.length === 0) ? <> 
                <CommentLoader /> 
                <CommentLoader /> 
                <CommentLoader /> </> : comments.map ( (item, index) =>
                    ( <li className='comment' key={index}>
                        <Comment userImg={item.userImg} userRating={item.userRating} userName={item.userName} textComment={item.textComment} />
                    </li> ) )}
                
               <button className='comments-right-arrow'><img src="./img/right-arrow.png" alt="error" /></button>
            </ol>

        </section>
        
    </>
};

export default Comments;
