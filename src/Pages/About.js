import React from 'react'

import './service.css'
import about from "../images/about.png"
import ansul from "../images/profile.png"
import ayush from "../images/ayush.png"
import asis from "../images/asis.png"
import mission from "../images/mission.png"
import aboutd from "../images/aboutd.png"
import comuniti from "../images/comuniti.png"
import Layout from "../Layout/Layout"
const About = () => {
  return (
    
    <Layout title={"About Page"} >
        
        <div >
        <div className='seo mt-3 '>
<div className='seo-l '>
<h2 className='sec-h2 mt-5'>LETS KNOW MORE ABOUT US</h2>
<p className='mt-4'>Welcome to A3codder, a pioneering academic solutions provider committed to empowering college students with innovative tools and services. At A3codder, we strive to revolutionize the educational journey by offering comprehensive and cutting-edge solutions that foster academic success and personal growth.</p>

</div>
<div className='seo-r '>
 <img src={about}alt="Seo img"  className='seo-img3 mg'/>
</div>

</div>
 <img src={aboutd}alt="Seo img"  className='seo-img2 mg'/> 
        </div>

        <h2 className='pro-h2 mt-5'>OUR MISSION & VISION</h2>
<div className='seo mt-4'>
<div className='seo-l '>
<div className='mr'><img src={mission}alt="Seo img"  className='seo-img'/></div>
</div>
<div className='seo-r r'>


<p><pri>Our mission  is to transform the way students approach learning by providing a diverse range of tools and resources. Through our platform, students can access  interactive resources, personalized guidance, and support.
We prioritizeinnovation, constantly seeking new ideas and technologies to enhance traditional learning methods and deliver transformative educational experiences.
</pri></p>


</div>

</div>
<h2 className='sec-h2 mt-5'>OUR TEAM </h2>
<div className='about'> 
<div>
<img src={asis}alt="Seo img"  className='about-img'/>
<p className='about-p'>MARKETING HEAD</p>
</div>
<div>
<img src={ansul}alt="Seo img"  className='about-img r3'/>
<p className='about-p'>CEO<br/>TECHNICAL & DEVELOPMENT HEAD</p>
</div>
<div>
<img src={ayush}alt="Seo img"  className='about-img'/>
<p className='about-p'>DESIGNING & DEVELOPMENT HEAD</p>

</div>
</div>

<div className='pp'>
<h2 className='pro-h2 mt-4'>JOIN OUR COMMUNITY</h2>
<p className='pp'>Unleash potential in our knowledge-driven community, fostering transformative academic solutions. Join us now!</p>
<button className='btn2 '>Join Now</button>
<div className='mr'><img src={comuniti}alt="Seo img"  className='seo-img2'/> </div>
</div>

    </Layout>
  )
}

export default About