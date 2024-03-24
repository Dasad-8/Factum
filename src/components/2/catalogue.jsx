import './catalogue.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import AutoCard from './auto-card';
import CatalogueLoader from './auto-card-loader';
import FormLoader from './form-auto-card-loader';


function Catalogue (props) {

    let [selectedTab, setSelectedTab] = useState("SEDAN")

    function selectSedan () {
        setSelectedTab("SEDAN")
    }
     
    function selectSuv () {
        setSelectedTab("SUV")
    }

    function selectElectricCar () {
        setSelectedTab("ELECTRICCAR")
    }

    function selectHybrids () {
        setSelectedTab("HYBRIDS") 
    }
    /* const items = ["Volkswagen", "Tesla", "BMW", "Toyta"]; */

    /* fetch ("./cars.json")
    .then(response => response.json())
    .then(data => {console.log('Received data:', data);}) */

    const [data, setData] =  useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const  fetchData= async() => {
        fetch ("./cars.json")
    .then(response => response.json())
    .then(data => {console.log('Received data:', data);
    /* setData (data */
    setTimeout(() => setData(data), 5000)})
    }

    const BMW = data.filter (car => car.brand === 'BMW')
    console.log(BMW)
    const SUV = data.filter (car => car.brand === 'Volkswagen')
    const Tesla = data.filter (car => car.brand === 'Tesla')

    return <>
        <h2>Каталог авто</h2>
        <div className='buttons'>
            <button className ={(selectedTab === "SEDAN") ? 'tab active' : 'tab'}  onClick={selectSedan}>sedan</button>
            <button className={(selectedTab === "SUV") ? 'tab active' : 'tab'} onClick={selectSuv}>suv</button>
            <button className={(selectedTab === "ELECTRICCAR") ? 'tab active' : 'tab'} onClick={selectElectricCar}>електромобілі</button>
            <button className={(selectedTab === "HYBRIDS") ? 'tab active' : 'tab'} onClick={selectHybrids}>гібриди</button>
        </div>

        
        {/* <p>{selectedTab}</p> */}
        {
            (selectedTab === "SEDAN") ? <ol className='container'>{(data.length === 0) ?<><CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader />
            </> : BMW.map ((item, index) => (<li className='catalogue-block' key={index}>
                    <AutoCard img = {item.img} brand = {item.brand} model = {item.model} price = {item.price} />
                </li>
                
                ))}
            </ol> : (selectedTab === "SUV") ?<ol className='container'>{(data.length === 0) ?<><CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader />
            </> : SUV.map ((item, index) => (<li className='catalogue-block' key={index}>
                    {<AutoCard img = {item.img} brand = {item.brand} model = {item.model} price = {item.price} />}
                </li>))}
            </ol> : (selectedTab === "ELECTRICCAR") ? <ol className='container'>{(data.length === 0) ?<><CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader /> <CatalogueLoader />
            </> : Tesla.map ((item, index) => (<li className='catalogue-block' key={index}>
                    {<AutoCard img = {item.img} brand = {item.brand} model = {item.model} price = {item.price} />}
                </li>))}
            </ol> : (selectedTab === "HYBRIDS") ?<div className='HYBRIDS-container'> {(data.length === 0) ? <FormLoader /> : <><h3>Мы планируем поддержку гибридных автомобилей на 2025 год</h3>
                <p>подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей!</p>

                <form className='HYBRIDS-form' action="">
                    <input type="email" placeholder='factum_auto@gmail.com' />
                    <br />
                    <button>Подписаться</button>
                </form></>
        }</div> : null
        }

    </>
};

export default Catalogue;