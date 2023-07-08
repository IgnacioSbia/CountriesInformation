'use client';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Card from 'react-bootstrap/Card';
import './MainPage.css';
import { format } from 'util';
import Link from 'next/link';

function MainPage() {
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState<any>();

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
    
  },[]);
  const handleClick = (countryName:any)=>{
    setSelectedCountry(countryName);
    localStorage.setItem('country', countryName);
  }
  
  console.log(selectedRegion)
  return (
    <>
    {/* Header and Search bar below, here should go the NavBar to toggle between light and dark mode.*/}
      <header>
        <NavBar setSelectedRegion={setSelectedRegion}/>
      </header>  
    {/* Main body with cards of the countries section.*/}
      <main className='mainPageMain'>
        <section className='mainPageCountriesSection'>
          { 
          countries  ?  countries.map((country:any)=>{
            

          return <Card style={{ width: '18rem' }} className='mainPageCountryCard' onClick={ ()=>handleClick(country.name.common)} >
            {/* All the country info and a Loading screen.*/}
            <Link href={"/countryPage"} className='mainLinkToCountries' >
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
          </Card>})
          : 
          <><h1>Loading...</h1></>}
        </section>
      </main>
    </>
  )
}

export default MainPage