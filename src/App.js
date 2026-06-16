
import React, { useState } from 'react';
import './App.css';
function App() {
  let [city,setCity]=useState(' ');
  let [wDetail,setWdetails]=useState();
  let getData=(event)=>{
    fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`).then((res)=>res.json()).then((finalRes)=>{
      if(finalRes.cod==='404'){
          setWdetails(undefined);
      }else{
        console.log(finalRes);
        setWdetails(finalRes);
      }
    });
    event.preventDefault();
    setCity(' ');
  }

  return (
    <>
    <div className='app'>
       <div className='heading'>
        <h1>Simple Weather App</h1>
        
        <form onSubmit={getData}>
          <div className='search'>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}  placeholder='city name'/><button>Submit</button>
          </div>
        </form>

       </div>
       <div className='main'>
         <div className='container'>
          {/* <img src='https://commons.wikimedia.org/wiki/File:Loading_2.gif' width={200}/> */}
          {wDetail!==undefined?
          <>
          <h3>{wDetail.name} <span>{wDetail.sys.country}</span></h3>
          <h2>{wDetail.main['temp']} </h2>
          <img src={`https://openweathermap.org/img/w/${wDetail.weather[0].icon}.png`} alt='weather logo'/>
         <p>{wDetail.weather[0].description}</p>
          </>
          :
          "No data found"
          }
         </div>
       </div>
    </div>
    </>
  );
}

export default App;
