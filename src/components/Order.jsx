import React from 'react'

const Order = ({id,name,date,addr}) => {
  return (
    <div className='d-flex flex-column pro-ord'>
      <h3>ORDER #{id}</h3>
      <div className='d-flex pro-ord-div' style={{flexWrap:"wrap"}}>
        <div>
          <span className='d-flex'><h5>PRODUCT NAME: </h5>&nbsp;&nbsp;&nbsp;  {name}</span>
          <span className='d-flex'><h5>DATE: </h5>&nbsp;&nbsp;&nbsp; {date}</span>
          <span className='d-flex'><h5>ADDRESS: </h5>&nbsp;&nbsp;&nbsp; {addr}</span>
        </div>
        <div className='d-flex flex-column'>
          <button className='blk-btn' style={{marginLeft:'auto'}}>VIEW DETAILS</button>
          <button className='blk-btn' style={{marginLeft:'auto'}}>TRACK ORDER</button>
          <button className='blk-btn' style={{marginLeft:'auto'}}>DOWNLOAD INVOICE</button>
        </div>
      </div>
    </div>
  )
}

export default Order
