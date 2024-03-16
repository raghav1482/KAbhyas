import React from 'react'

const Homestats = () => {
  return (
    <div className='homestats'>
      <img src="https://demo.athemes.com/sydney-lms/wp-content/uploads/sites/134/2022/06/Mask-group_1.png"/>
      <div className='d-flex flex-column stat-div' data-aos="fade-left">
        <h3 className='sp-font' style={{color:" rgb(0, 98, 255)"}}>Mentoring program designed with care</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div className='d-flex' style={{flexWrap:"wrap"}}>
            <div><h3>180+</h3><p>Enrolled</p></div>
            <div><h3>225+</h3><p>Completion</p></div>
            <div><h3>100%</h3><p>Satisfaction</p></div>
        </div>
      </div>
    </div>
  )
}

export default Homestats
