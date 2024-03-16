import React from 'react'

const Cart = () => {
  const total = '2000/-';
  const qtitle='PRODUCT TITLE';
  const module = 'MODULE NAME';
  const date='10-03-2024';
  const quantity=1;
    return (
        <div className='profile-con' style={{width:"70%",margin:"70px auto"}}>
            <div className='d-flex' style={{width:'100%',justifyContent:"space-between",flexWrap:"wrap"}}>
            <h3>TOTAL: {total}</h3>
            <button className='blk-btn'>CHECKOUT</button>
            </div>
            <div className='d-flex flex-column pro-ord' style={{marginTop:"40px"}} >
                <h3>{qtitle}</h3>
                <div className='d-flex' style={{width:"100%",justifyContent:"space-between"}}>
                    <div>
                    <span className='d-flex'><h5>MODULE : </h5>  {module}</span>
                    <span className='d-flex'><h5>DATE : </h5> {date}</span>
                    </div>
                    <div className='d-flex flex-column'>
                    <input type="number" value={quantity} className='blk-btn' style={{maxWidth:"80px",marginLeft:'auto'}}/>
                    <button className='blk-btn' style={{marginLeft:'auto'}}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cart
