import './test.css'
export default function Test() {

    /* let {name, some} = props; */

   /*  let imgs = 'https://th.bing.com/th/id/R.4c3e961aacfa25b22534ecd076655434?rik=SQhPHsjTmdd2zg&pid=ImgRaw&r=0';
 */
    /* const imgs = require('./2_3.jpg'); */

    let imgs = require('./logo.png');

    return(
        <>
    <header>
        <nav>
          <img src={imgs} alt="error" />

          <ul>
            <a href="#!"><li>Каталог авто</li></a>
            <a href="#!"><li>Вигоди</li></a>
            <a href="#!"><li>Ціни</li></a>
            <a href="#!"><li>Про компанію</li></a>
            <a href="#!"><li>Ризики та гарантії</li></a>
            <a href="#!"><li>Відгуки</li></a>
            <a href="#!"><li>Контакти</li></a>
          </ul>

          <div className='timetable'>
            <p className='bl'>Київ. Дніпро. Одеса</p>
            <p className='gr'>Час роботи</p>
            <p>ПН-СБ з 9:00 до 19:00</p>
          </div>

          <div className='tel'>
            <p className='num'>0 800 331 680</p>
            <p className='text-num'>Замовити дзвінок</p>
          </div>
        </nav>
     </header>
        </>
    );
}