import React from 'react'
import './StyleToggleeNavBar.css';
import lightMoon from './styleToggleNavBarImgs/LightModeMoon.svg';
import darkMoon from './styleToggleNavBarImgs/DarkModeMoon.svg';
import Image from 'next/image';

function StyleToggleNavBar({setMode,mode}:any) {
    console.log(mode)
    const handleClick = async()=>{
        if(mode){
            setMode(false)
        }else{
            setMode(true)
        }
        
        
    }
    
  return (
    <main className='styleToggleNavBarMain'>
        <div>
            <h1 className={mode ? 'styleToggleNavBarTitleLight' : 'styleToggleNavBarTitleDark'}>Where in the world?</h1>
        </div>
        <div>
            <Image onClick={handleClick} src={mode ? darkMoon :lightMoon} alt='Change between Dark and Light mode' width={25} className='styleToggleNavBarImage'/>
        </div>
    </main>
  )
}

export default StyleToggleNavBar