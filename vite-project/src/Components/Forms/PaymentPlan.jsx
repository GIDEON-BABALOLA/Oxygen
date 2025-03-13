import React from 'react'

const PaymentPlan = () => {
  return (
    <div className='payment-plan'>
  <div style={{color : "#000000", fontSize : "24px", fontWeight : 700}}>Payment Plan</div>
<div style={{backgroundColor : "#39B7E933", display :"flex", flexDirection : "column", padding :"40px 40px", borderRadius : "5px", 
justifyContent : "space-between",
gap : "100px",
}}>
<section
style={ {display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%"}}>
    <div className='loan-options'>
<span style={{fontSize : "16px"}}>Loan Amount</span>
<span className='loan-specifics'>N150,000</span>
    </div>
    <div  className='loan-options'>
    <span style={{fontSize : "16px"}} > Repayment Date</span>
    <span className='loan-specifics'>31-07-2024</span>
    </div>
</section>
<section style={ {display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%"}}>
<div className='loan-options'>
<span style={{fontSize : "16px"}}>Interest Rate</span>
<span className='loan-specifics'>12.5%</span>
    </div>
    <hr class="styled-line" />

    <div  className='loan-options'>
    <span style={{fontSize : "16px"}}>Loan Repayment</span>
    <span className='loan-specifics'>N24,000</span>
    </div>
</section>
</div>
    </div>
  )
}

export default PaymentPlan