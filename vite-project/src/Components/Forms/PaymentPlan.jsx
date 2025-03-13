import React from 'react'

const PaymentPlan = () => {
  return (
    <div className='payment-plan'>
  <div style={{color : "#000000", fontSize : "24px", fontWeight : 700}}>Payment Plan</div>
<div style={{backgroundColor : "#39B7E933", display :"flex", flexDirection : "row", padding :"10px 10px", borderRadius : "5px"}}>
<section style={ {display : "flex", flexDirection : "row", justifyContent : "space-between", width : "100%"}}>
    <div>
<span>Loan Amount</span>
<span>N150,000</span>
    </div>
    <div>
    <span>Repayment Date</span>
    <span>31-07-2024</span>
    </div>
</section>
<section>
<div>

</div>
<div>
    
</div>
</section>
</div>
    </div>
  )
}

export default PaymentPlan