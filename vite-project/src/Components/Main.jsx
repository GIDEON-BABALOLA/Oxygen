import React from 'react'
import { useState } from 'react'
import StartForm from './Forms/StartForm'
import GetALoan from './Forms/GetALoan'
import PaymentPlan from './Forms/PaymentPlan'
const Main = () => {
    const [display, setDisplay] = useState({
        desktopOne : true,
        desktopTwo : false,
        desktopThree : false,
    })
    const changeContent = () => {
     if(display.desktopOne){
      setDisplay({
        desktopOne : false,
        desktopTwo : true,
        desktopthree : false,
      })
     }
     if(display.desktopTwo){
      setDisplay({
        desktopOne : false,
        desktopTwo : false,
        desktopThree : true,
      })
     }
     if(display.desktopThree){
      setDisplay({
        desktopOne : true,
        desktopTwo : false,
        desktopThree : false,
      })
     }
    }
    const backButton = () => {
      if(display.desktopTwo){
        setDisplay({
          desktopOne : true,
          desktopTwo : false,
          desktopThree :  false,
        })
       }
       if(display.desktopThree){
        setDisplay({
          desktopOne : false,
          desktopTwo : true,
          desktopThree : false,
        })
       }
    }
  return (
    <div>
            <div className='headings'>
        <h2 className='startform-title'>Get A Loan In 5 Minutes</h2>
        <hr className='title-underline'/>
        </div>
{display.desktopOne && <StartForm />}
{display.desktopTwo && <GetALoan />}
{display.desktopThree && <PaymentPlan />}
<div className='button-container'>
{display.desktopTwo   && <span className='back-button' style={{color : "#C42222", cursor : "pointer"}} onClick={() => {backButton()}}>Back</span> }
{display.desktopThree   && <span className='back-button' style={{color : "#C42222", cursor : "pointer"}} onClick={() => {backButton()}}>Back</span> }
<button className='general-continue-button' onClick={() => { changeContent()}}>
      Continue
    </button>
</div>

    </div>
  )
}

export default Main