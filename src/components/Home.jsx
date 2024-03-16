import React from 'react'
import Herosection from './Herosection'
import Topstd from './Topstd'
import Review from './Review'
import Services from './Services'
import Homestats from './Homestats'


const Home = () => {

  return (
    <div style={{width:"100%"}}>
      <Herosection/>
      <Services/>
      <Homestats/>
      <Topstd/>
      <Review />
    </div>
  )
}

export default Home
