'use client';
import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Card from 'react-bootstrap/Card';
import './MainPage.css';
import { format } from 'util';
import Link from 'next/link';
import StyleToggleNavBar from '../StyleToggleNavBar/StyleToggleNavBar';

function MainPage() {
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState<any>();
  const [searchBar, setSearchBar] = useState<string>();
  const [filteredSearch, setFilteredSearch] = useState<any>();
  const [mode, setMode] = useState(false)
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
  console.log(mode)
  
  console.log(searchBar)
  return (
    <>
    {/* Header and Search bar below, here should go the NavBar to toggle between light and dark mode.*/}
      <header>
        <StyleToggleNavBar setMode={setMode} mode={mode}/>
        <NavBar setSelectedRegion={setSelectedRegion} searchBarValue={searchBar} setSearchBar={setSearchBar} setFilteredSearch={setFilteredSearch}/>
      </header>  
    {/* Main body with cards of the countries section.*/}
      <main className='mainPageMain'>
        <section className='mainPageCountriesSection'>
          { 
          countries  ?  countries.map((country:any)=>{
            if(selectedRegion === country.region){
              if(filteredSearch == country.name.common){return <Card style={{ width: '18rem' }} className='mainPageCountryCard' onClick={ ()=>handleClick(country.name.common)} >
              
              {/* All the countries info and Loading screen.*/}
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
            </Card>}else if(!filteredSearch){
              return <Card style={{ width: '18rem' }} className='mainPageCountryCard' onClick={ ()=>handleClick(country.name.common)} >
              
              {/* All the countries info and Loading screen.*/}
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
            </Card>
            }    
        }else if(!selectedRegion){
            if(filteredSearch == country.name.common){
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
            </Card>
            }else if(!filteredSearch){
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
          </Card>
            }
          } 
          })
          : 
          <><h1>Loading...</h1></>}
        </section>
      </main>
    </>
  )
}

export default MainPage