import React from 'react'

const GetALoan = () => {
  return (
    <section style={{display : "flex", flexDirection : "column", gap : "90px"}}>
            <div className='get-a-loan'>
        <div style={{color : "#000000", fontSize : "24px", fontWeight : 700}}>Payment Plan</div>
        <div style={{fontSize : "20px"}}>
        You repayment on a 
        <span style={{fontSize : "32px", color : "#39B7E9", fontWeight : 700}}> N150,000</span> loan is <span style={{fontSize : "32px", color : "#39B7E9", fontWeight : 700}}> N24,000</span> per month for<span style={{fontSize : "32px", color : "#39B7E9", fontWeight : 700}}> 6 months</span>
        </div>
        <div style={{textDecoration : "underline", color : "#39B7E9"}}>Tap here to see full details</div>
    </div>
        <div></div>
    </section>

  )
}

export default GetALoan