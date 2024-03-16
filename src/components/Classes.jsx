import React from 'react'


const ClassCom = ({title,desc,img})=>{
    return(<>
    <div className='class-div d-flex' data-aos="fade-down" data-aos-offset="200">
        <img src={img}/>
        <div className='d-flex flex-column' style={{flexWrap:"wrap"}}>
            <h3 className='sp-font'>{title}</h3>
            <p>{desc}</p>
            <a href="#" className='active' style={{width:"max-content",padding:"10px 20px",color:"white"}}>Practice</a>
        </div>
    </div>
    </>)
}


const Classes = () => {
    const arr = [
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=jB10xXsegX5G8DwRGp0tC0q8pnNnU3XlHFsj9gxeqmE="
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=jB10xXsegX5G8DwRGp0tC0q8pnNnU3XlHFsj9gxeqmE="
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=jB10xXsegX5G8DwRGp0tC0q8pnNnU3XlHFsj9gxeqmE="
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=jB10xXsegX5G8DwRGp0tC0q8pnNnU3XlHFsj9gxeqmE="
        }
    ]
  return (
    <div className='class'>
        {
            arr.map((dat)=>{return <ClassCom title={dat.title} img={dat.img} desc={dat.desc}/>})
        }
    </div>
  )
}

export default Classes
