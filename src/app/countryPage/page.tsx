'use client';
import React, { useEffect, useState } from 'react'
import './Country.css';

function Page() {

  const [country, setCountry] = useState<any>();
  useEffect(()=>{
    const getCountryByName = async()=>{
      var requestOptions:object = {
        method: 'GET',
        redirect: 'follow'
      };
      
      await fetch(`https://restcountries.com/v3.1/name/${localStorage.getItem('country')}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result){setCountry(result)}
          else{console.log("Error, non fetch adquired")}})
        .catch(error => console.log('error', error));
    };
    getCountryByName();
  },[]);

  console.log(country)

  return (
    /*Here should go the NavBar to toggle between Dark and Light mode. */
    <main>
        { /*Here Goes the main section of the County Information.*/}
        <button>Back</button>
        {country ? 
          
        <> 
          <section>
            <img/>
          </section>
          <aside>
              <h1>Name: {country[0].name.common}</h1>
              <p>Population: {country[0].population.toLocaleString('en-US')}</p>
              <p>Region: {country[0].region}</p>
              <p>Sub Region: {country[0].subregion ? country[0].subregion : "none"}</p>
              <p>Capital: {country[0].capital ? country[0].capita.map((capitals:any)=>{return capitals}) : "none"}</p>
              <p>Currency:</p>
          </aside>
        </> 
        
        :
        <div><h1>Loading...</h1></div>
        }
    </main>
  )
}

export default Page