import React from 'react'

const Signup = () => {
  return (
    <div className='form' style={{height:"500px"}}>
      <input type='text' placeholder='USERNAME'/>
      <input type='text' placeholder='PASSWORD'/>
      <div className='d-flex' style={{justifyContent:"center" , alignItems:"center"}}>
      <input type='number' placeholder='PHONE NUMBER'/>
      <button style={{width:"90px",height:"40px",marginLeft:"20px",fontSize:"13px",padding:"0"}}>SEND OTP</button>
      </div>
      <p>Didn't recieve an OTP? <a href="/">Resend</a></p>
      <input type='number' placeholder='ENTER OTP'/>
      <button>SIGN UP</button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  )
}

export default Signup
