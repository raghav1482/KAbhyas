import React from 'react'

const Services = () => {
  const services=[
    {
    img:'https://demo.athemes.com/sydney-lms/wp-content/uploads/sites/134/2022/06/Group-932.svg',
    name:'Full courses'
    },
    {
    img:'https://demo.athemes.com/sydney-lms/wp-content/uploads/sites/134/2022/06/Group-933.svg',
    name:'Tests'
    },
    {
    img:'https://demo.athemes.com/sydney-lms/wp-content/uploads/sites/134/2022/06/Group-934.svg',
    name:'Study Materials'
    },
    {
    img:'https://demo.athemes.com/sydney-lms/wp-content/uploads/sites/134/2022/06/Group-935.svg',
    name:'Organized classes'
    },
]
    return (
    <div className='services-con d-flex flex-column my-5' data-aos="fade-up" style={{justifyContent:"center",alignItems:"center"}}>
        <h3 className='sp-font' style={{color:" rgb(0, 98, 255)"}}>Boost your career with our services</h3>
        <p>Empower Your Future, Elevate Your Success with Our Services</p>
        <div className='d-flex services my-5' style={{width:"90%"}}>
        {services.map((data,index)=>{
        return(
            <div>
                <img src={data.img}/>
                <p style={{fontWeight:"500"}}>{data.name}</p>
            </div>
        )})}
        </div>
    </div>
  )
}

export default Services
