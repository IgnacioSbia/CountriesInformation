'use client';
import React, { useEffect, useState } from 'react'
import './Country.css';
import Link from 'next/link';
import leftArrowDarkMode from './CountryImgs/DarkModeArrow.svg';
import leftArrowLightMode from './CountryImgs/LightModeArrow.svg'
import Image from 'next/image';
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
    <main className='countryMainPageDark'>
        { /*Here Goes the main section of the County Information.*/}
        <Link href={"/"}><button className='countryGoBackHomeButton'><Image alt='leftArrow' src={leftArrowDarkMode} width={20} className='leftArrowButtonImage'/>Back</button></Link>
        {country ? 
          
        <>
          <section className='mainCountrySection'>
            <section className='countryPageImg'>
              <img  src={country[0].flags.png} className='countryPageCountryImg'/>
            </section>
            <aside className='countryMainInfo'>
                <h1 className='countryMainTitleCountry'>{country[0].name.common}</h1>
                <p className='countryPageInfo'>Population: {country[0].population.toLocaleString('en-US')}</p>
                <p className='countryPageInfo'>Region: {country[0].region}</p>
                <p className='countryPageInfo'>Sub Region: {country[0].subregion ? country[0].subregion : "none"}</p>
                <p className='countryPageInfo'>Currency:</p>
            </aside>
          </section>
        </> 
        
        :
        <div><h1>Loading...</h1></div>
        }
    </main>
  )
}

export default Page