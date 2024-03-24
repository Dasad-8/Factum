import './App.css';
import { useState } from 'react';
import Test from './components/1/test';
import Group from './components/3/about_the_company'
import Catalogue from './components/2/catalogue';
import ReviewModal from './components/5/review-modal';
import Comments from './components/4/comments';

function App() {

/*   let [ click, setClick ] = useState(10);

  function increment() {
    setClick( click += 1 );
    console.log(click);
    setHistory (history + click + ",");

  }

  function decrement() {
    setClick( click -= 1);
    console.log(click)
    setHistory (history + click + ",")
  }

  function nu () {  
    setClick( click = 0 )
    console.log( click)
    setHistory ( history + click + ",")
  }

  let [ history, setHistory] = useState("History: ") */


  /* let imgs = require('./components/1/logo.svg'); */



  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
    {/*  <h1>{click}</h1>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
     <button onClick={nu}>null</button>
    <p>{history}</p>
    {
      (click % 2 === 0) ? <p>Ваше число четное</p> : <p>Ваше число нечетное</p>
    } */}

     {/* <header>
        <nav>
          <img alt='error'>{imgs}</img>
        </nav>
     </header>  */}

<h3>До нашої групи компаній входять</h3>

      <div className="container">
      <Group text = "Ліцензований дилер на IAAI, Copart, Manheim" emoji = "👨‍⚖️" />
      <Group text = "Транспортно-експедиторська компанія: морский фрахт по всьому світу" emoji = "🚢"  />
      <Group text = "Власна брокерська служба" emoji = "💼" />
      
      </div>
      <div className="container">
      <Group text = "Випробувальний центр в Одесі: сертифікація автомобілів для реєстрації у МРЕВ" emoji = "📊" />
      <Group text = "Партнерський малярно-рихтувальний комплекс" emoji = "🚘" />
      <Group text = "Сервіс замовлення автомобільних запчастин і компонентів" emoji = "⚙️" />
      </div>


      <Catalogue />
      <Comments />
      <button className='modal-btn' onClick={openModal}>Написати відгук</button>
      <ReviewModal isOpen = {isOpen} closeModaL={closeModal} />
      <Test/>
     
    </>
  );
}

export default App;
