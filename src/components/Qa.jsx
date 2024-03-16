import React from 'react'

const Qa = ({qtitle,date,module}) => {
  return (
<div className='d-flex flex-column pro-ord'>
      <h3>{qtitle}</h3>
      <div className='d-flex pro-ord-div'>
        <div style={{minWidth:"150px"}} >
          <span className='d-flex'><h5>MODULE : </h5> &nbsp;&nbsp;&nbsp; {module}</span>
          <span className='d-flex'><h5>DATE : </h5>&nbsp;&nbsp;&nbsp;{date}</span>
        </div>
        <div className='d-flex flex-column'>
          <button className='blk-btn' style={{marginLeft:'auto'}}>VIEW REPLY</button>
        </div>
      </div>
    </div>
  )
}

export default Qa
