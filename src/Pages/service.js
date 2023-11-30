import React from 'react'
import seo from "../images/seo.png"
import web from "../images/web.png"
import project from "../images/project.png"
import Layout from "../Layout/Layout"
import './service.css'
const Service = () => {
  return (
    <Layout title={"Our Services"}>
<h2 className='pro-h2 mt-3'>DIGITAL MARKETING</h2>
<div className='seo mt-3'>
<div className='seo-l'>
<p>In the dynamic digital realm, standing out is paramo unt. Our Digital Marketing service empowers your brand, captivating your audience and fostering loyalty. Through data-driven methods and inventive strategies, we amplify  </p>
<ul>
    <h4>Your online presence</h4>
    <li>
    Tailored Campaigns  
    </li>
    <li>
    Social Media Engagement
    </li>
    <li>
    ROI-Focused
    </li>
</ul>
<button className='btn1'>Contact Us</button>
</div>
<div className='seo-r'>
<div className='mr'><img src={seo}alt="Seo img"  className='seo-img'/></div>
</div>

</div>

{/* web */}
<h2 className='pro-h2 mt-5'>WEB DEVELOPMENT AND DESIGNING</h2>
<div className='seo mt-3'>
<div className='seo-l mr'>
<img src={web}alt="Seo img"  className='seo-img'/>
</div>
<div className='seo-r'>


<p>Crafting Digital Experiences for College Students
Your website is your brand's virtual storefront. Our Web Design & Development service ensures it's enticing, functional, and tailored for students.



</p>
<ul>
    <h4>What sets us apart</h4>
    <li>
    User-Centric Designs:  
    </li>
    <li>
    Branding Consistency:
    </li>
    <li>
    Cutting-Edge Technology:
    </li>
</ul>
<button className='btn1'>Contact Us</button>
</div>

</div>

{/* contact */}
<h2 className='pro-h2 mt-3'>PROJECT HANDLING AND GUIDENCE</h2>
<div className='seo mt-4 mb-5'>
<div className='seo-l'>
<p> College life is brimming with academic challenges, especially intricate projects demanding time, effort, and expertise. Our Student Project Handling service is custom-tailored to alleviate their academic journey, offering adept guidance and support to ensure their projects shine.


</p>
<ul>
    <h4>Our approach</h4>
    <li>
    Subject-Matter Experts
    </li>
    <li>
    Project Customization 
    </li>
    <li>
    Punctual Delivery 
    </li>
</ul>
<div className='mrr'><button className='btn1'>Contact Us</button></div>
</div>
<div className='seo-r mr'>
<img src={project}alt="contact"  className='seo-img'/>
</div>

</div>

    </Layout>
  )
}

export default Service;