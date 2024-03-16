import React from 'react'

const ProdCom = ({title,desc,img})=>{
    return(<>
    <div className='class-div d-flex'>
        <img src={img} style={{width:"300px",height:"300px"}} data-aos="fade-right" data-aos-offset="100"/>
        <div className='d-flex flex-column' style={{flexWrap:"wrap"}} data-aos="fade-left" data-aos-offset="100">
            <h3 className='sp-font'>{title}</h3>
            <p>{desc}</p>
            <h4>$43</h4>
            <a href="#" className='active' style={{width:"max-content",padding:"10px 20px",color:"white"}}>Add to cart</a>
        </div>
    </div>
    </>)
}


const Products = () => {
    const arr = [
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://rukminim2.flixcart.com/image/850/1000/kzegk280/regionalbooks/z/j/0/complete-study-material-for-upsc-civil-services-prelims-mains-original-imagbezwzatkyrhc.jpeg?q=90&crop=false"
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://rukminim2.flixcart.com/image/850/1000/kzegk280/regionalbooks/z/j/0/complete-study-material-for-upsc-civil-services-prelims-mains-original-imagbezwzatkyrhc.jpeg?q=90&crop=false"
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://rukminim2.flixcart.com/image/850/1000/kzegk280/regionalbooks/z/j/0/complete-study-material-for-upsc-civil-services-prelims-mains-original-imagbezwzatkyrhc.jpeg?q=90&crop=false"
        },
        {
            title:'Lorem ipsum dolor sit amet, consectetur',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper justo id elit ultricies, non tempor nunc gravida. Vivamus sodales nisl nec ex venenatis, nec pellentesque nulla commodo. Donec nec nibh eu mauris finibus blandit. Integer vehicula aliquam purus, et vehicula odio consequat id. Nulla facilisi. Suspendisse potenti.',
            img:"https://rukminim2.flixcart.com/image/850/1000/kzegk280/regionalbooks/z/j/0/complete-study-material-for-upsc-civil-services-prelims-mains-original-imagbezwzatkyrhc.jpeg?q=90&crop=false"
        },
        
    ]
  return (
    <div className='class'>
        <input type='text'/>
        {
            arr.map((dat)=>{return <ProdCom title={dat.title} img={dat.img} desc={dat.desc}/>})
        }
    </div>
  )
}

export default Products
