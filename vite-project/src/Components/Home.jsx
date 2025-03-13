import React from 'react'
import Main from './Main'
import Assistance from './Assistance'
const Home = () => {
  return (
    <section className='home-section'>
 <div className='home-page'>
        <div className='home-page-main' style={{backgroundColor : "white"}}>
        <Main />
        </div>

    </div>
  
    <div className='home-page-bottom'>
<Assistance />

    </div>
    </section>
   
  )
}

export default Home