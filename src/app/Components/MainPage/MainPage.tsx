'use client';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Card from 'react-bootstrap/Card';
import './MainPage.css';
import { format } from 'util';
import Link from 'next/link';

function MainPage() {
  const region = false;
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    const getAllCntries = ()=>{
      var requestOptions:object = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://restcountries.com/v3.1/all", requestOptions)
        .then(response => response.json())
        .then(result => setCountries(result))
        .catch(error => console.log('error', error));
    };
    getAllCntries();
  },[])
  console.log(countries);
  
  return (
    <>
    {/* Header and Search bar below, here should go the NavBar to toggle between light and dark mode.*/}
      <header>
        <NavBar/>
      </header>  
    {/* Main body with cards of the countries section.*/}
      <main className='mainPageMain'>
        <section className='mainPageCountriesSection'>
          {countries ? countries.map((country:any)=>{
          return <Card style={{ width: '18rem' }} className='mainPageCountryCard'>
            {/* All the country info and a Loading screen.*/}
            <Link href={"/countryPage"} className='mainLinkToCountries'>
            <Card.Img variant="top" src={country.flags.png} className='mainPageImgCard'alt='Country Flag'/>
            <Card.Body>
              <Card.Title className='mainPageCardTitle'>{country.name.common}</Card.Title>
              <Card.Text className='mainTextOfCountries'>
                Population:  <p> {country.population.toLocaleString('en-US')}</p>
              </Card.Text>
              <Card.Text className='mainTextOfCountries'>
                Region: <p>{country.region}</p>
              </Card.Text>
              <Card.Text className='mainTextOfCountries'>
                Capital: <p>{country.capital ? country.capital : "None"}</p>
              </Card.Text>
            </Card.Body>
            </Link>
          </Card>}): <div><h1>Loading...</h1></div>}
        </section>
      </main>
    </>
  )
}

export default MainPage