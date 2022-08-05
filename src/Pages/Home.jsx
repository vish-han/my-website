import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
    <Navbar/>
<div className="container">
<div className="left">
    <div className="intro">
<div className="hello">Hello👋</div>
<div className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et earum temporibus impedit corrupti officia. Fugit, quam aspernatur mollitia voluptate est ipsam iusto harum. Libero, hic. Nam ea perspiciatis voluptas aperiam deleniti labore voluptate obcaecati.</div>
<div className="in-touch">get in touch</div>
    </div></div>
<div className="right"></div>
</div>
    </div>
  )
}

export default Home