import React from 'react'
import "./css/embla.css"
import "./css/sandbox.css"
import EmblaCarousel from './Emb'


const Topstd = () => {
  const arr = [
    {
      image:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=996&t=st=1710322688~exp=1710323288~hmac=0c05909c31fe0265a86e9165d87467a247ef744463599b88c7f3448d6f82407b",
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      image:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=996&t=st=1710322688~exp=1710323288~hmac=0c05909c31fe0265a86e9165d87467a247ef744463599b88c7f3448d6f82407b",
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      image:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=996&t=st=1710322688~exp=1710323288~hmac=0c05909c31fe0265a86e9165d87467a247ef744463599b88c7f3448d6f82407b",
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      image:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=996&t=st=1710322688~exp=1710323288~hmac=0c05909c31fe0265a86e9165d87467a247ef744463599b88c7f3448d6f82407b",
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      image:"https://img.freepik.com/free-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_140725-42636.jpg?w=996&t=st=1710322688~exp=1710323288~hmac=0c05909c31fe0265a86e9165d87467a247ef744463599b88c7f3448d6f82407b",
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
  ]
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  return (
    <div className='topstd mt-5'>
         <h3 className='sp-font' style={{color:" rgb(0, 98, 255)"}}>Student Success Stories</h3>
         <p>"Student Voices: Testimonials and Feedback"</p>
      {/* <div style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center"}}>
        {arr.map((data)=>{return <StudentCard name={data.name} photo={data.image} review={data.review}/>})}
      </div>  */}
      <EmblaCarousel slides={arr} options={OPTIONS}/>
    </div>
  )
}


export default Topstd
