import React from 'react'

const Tests = ({testname,date,modname,dur,marks}) => {
  return (
<div className='d-flex flex-column pro-ord'>
      <h3>{testname}</h3>
      <div className='d-flex pro-ord-div'>
        <div>
        <span className='d-flex'><h5>MODULE NAME :</h5>&nbsp;&nbsp;&nbsp;{modname}</span>
          <span className='d-flex'><h5>DATE : </h5>&nbsp;&nbsp;&nbsp; {date}</span>
          <span className='d-flex'><h5>MARKS : </h5>&nbsp;&nbsp;&nbsp; {marks}</span>
          <span className='d-flex'><h5>DURATION : </h5>&nbsp;&nbsp;&nbsp; {dur}</span>
        </div>
        <div className='d-flex flex-column'>
          <button className='blk-btn' style={{marginLeft:'auto'}}>START</button>
        </div>
      </div>
    </div>
  )
}

export default Tests
