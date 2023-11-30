import React from 'react'
import Projects from './Projects';
import './home.css';
import Layout from "../Layout/Layout"
const Home = () => {
  return (
   <Layout title={'Home A3'}>
<div className='home-main '>
<div style={{display:"flex"}}>
<div >
<p className='home-p'>Academic <br/>Solution With <br/>Innovative <br/>Ideas</p>
<button className='btn1'> Know More</button>
</div>
<div>
 <img src="/herosection-img.png" alt="Logo"  className='hero-img'/>  
</div>
</div>
{/* <section>
  <h2 className='sec-h2 '>OUR PROJECTS</h2>
</section> */}

</div>
<Projects/>
   </Layout>
  )
}

export default Home;



    
     
   