import React from 'react'

const StartForm = () => {
  return (
    <section className='startform'>
        <div className='startform-inputs'>
      <span style={{fontSize : "1.3rem"}}>Select Employer</span>
        <select className='startform-inputs-select' id="employer" name="">
</select>
<span  style={{fontSize : "1.3rem"}}>Enter Amount</span>
<input className='startform-inputs-input' id="amount" name="">
</input>
<span  style={{fontSize : "1.3rem"}}>Duration</span>
        <select className='startform-inputs-select' id="duration" name="">
          

</select>
        </div>
    <div>
    {/* <button className='general-continue-button'>
      Continue
    </button> */}
    </div>
 
 
    </section>
  )
}

export default StartForm