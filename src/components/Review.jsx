import React from 'react'


const ReviewDiv = ({name , review})=>{
  return (
    <div className="student-card" style={{width:"300px"}}>
      <div className="student-info" style={{padding:"10px"}}>
        <h2 className="student-name">{name}</h2>
        <p className="student-review" style={{margin:"0"}}>{review}</p>
      </div>
    </div>
  );
}

const Review = () => {
  const arr = [
    {
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
    {
      name:"John Do",
      review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis magna euismod, fermentum est ac, tristique lacus."
  },
]
  return (<div className='topstd mt-5' data-aos="fade-right">
    <h3 className='sp-font' style={{color:" rgb(0, 98, 255)"}}>Reviews</h3>
      <div style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center"}}>
        {arr.map((data)=>{
        return <ReviewDiv name={data.name} review={data.review}/>
        })}
      </div>
    </div>
);
}

export default Review

