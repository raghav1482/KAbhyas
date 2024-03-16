import React from 'react'

const Aboutcon = ({img , desc})=>{
    return(   
    <div className='class-div d-flex' style={{width:"60%"}}>
        <img src={img} data-aos="fade-right" data-aos-offset="100"/>
        <div data-aos="fade-left" data-aos-offset="100">
        <p>{desc}</p>
        </div>
    </div>
);
}

const Aboutus = () => {
    const arr = [
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://executiveacademy.at/fileadmin_synced_assets/_processed_/1/1/csm_banner-exed-people-culture-management-1600x579_60b50d0838.jpg"
        },
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://media.istockphoto.com/id/1588289977/photo/happy-black-females-student-during-a-class-in-lecture-hall-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=jB10xXsegX5G8DwRGp0tC0q8pnNnU3XlHFsj9gxeqmE="
        },
        {
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://st2.depositphotos.com/3591429/5995/i/450/depositphotos_59954731-stock-photo-large-group-of-people.jpg"
        },
    ]
  return (
    <div className='class'>
        {
            arr.map((dat)=>{return <Aboutcon img={dat.img} desc={dat.desc}/>})
        }
    </div>
  )
}

export default Aboutus
