import './comments.css';

function Comment (props) {
    return <>
        <h2>Відгуки в Google</h2>
        <div className='wr'>
            <p className='rating'>4.92</p>
            <div className='stars'>
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
                <img src="./img/star-blue.png" alt="error" />
            </div>
            
        </div>
        
    </>
};

export default Comment;