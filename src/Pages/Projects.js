import React from 'react'
import CountUp from "react-countup";
import './home.css'
const Projects = () => {
  
  let a = <CountUp end={500}
  duration={6}/>
  var b =<CountUp end={100}
  duration={6}/>
  var c =<CountUp end={500}
  duration={6}/>
  return (
    <>
    <div className='pro'>
    <h2 id="product" className='sec-h2 mt-5'>OUR PROJECTS</h2>
    <div className='cardd'>
    <div className="card-cont">

<div className='card'>
<img src="/gpa.png" alt="Logo"  className='gpa'/>
<p className='sec-p'>GPA CALCULATOR</p>

</div>

<div className='card'>
<img src="/compiler.png" alt="Logo"  className='gpa'/>
<p className='sec-p'>COMPILER</p>

</div>
<div className='card'>
<img src="/coming.png" alt="Logo"  className='gpa'/>
<p className='sec-p'>COMMING SOON.....</p>

</div>

</div>
    </div>

    <h2 className='sec-h2 mt-5 '>OUR SERVICES</h2>
    <div className='mt-3 '>
    <div id="carouselExampleIndicators" className="carousel slide cr " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpHiew9eLSbUoDZ-ZwY8D5SvQcqGccORyKA&usqp=CAU" className=" d-block crous " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpHiew9eLSbUoDZ-ZwY8D5SvQcqGccORyKA&usqp=CAU" className=" d-block crous " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpHiew9eLSbUoDZ-ZwY8D5SvQcqGccORyKA&usqp=CAU" className=" d-block crous " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='mt-5 box'>
  <div className='circle'>
    <p className='circle-p'>{a} +</p>
    <p className='circle-p1'>Project Complete</p>

  </div>
  <div className='circle'>
  <p className='circle-p'>{b} %</p>
    <p className='circle-p1'>Satisfaction</p>

  </div>
  <div className='circle'>
  <p className='circle-p'>{c} +</p>
    <p className='circle-p1'>Happy Clients</p>

  </div>


</div>
    </div>
    <div id='sec'>
<h2 className='sec-h2 mt-4'>GET IN TOUCH WITH US</h2>
<div className='form mt-4'>
<div className='form-t '>
  <h3 className='mt-4' >ADDRESS</h3>
  <p className='i1'><i class="fa-solid fa-location-dot"></i>  Gndec Ludhiana,Punjab, 141006</p>
  <p className='i2'><i class="fa-solid fa-phone-volume"></i> 8968118060</p>
  <p className='i3'><i class="fa-regular fa-envelope"></i>  palansul1@gmail.com</p>
</div>

<div className='form-i'>
  <label>Name</label><br/>
  <input type='text' placeholder='Enter Your Name' /><br/>
  <label>Email</label><br/>
  <input type='email' placeholder='Enter Your Email' /><br/>
  <label>Contact</label><br/>
  <input type='number' placeholder='Enter Your Phone Number' /><br/>
  <label>Comments</label><br/>
  
  <textarea name="postContent"placeholder='Give Your Valuable Comments....' rows={5} cols={40 } /><br/>
  <button className='btn1 mt-3'>Submit</button>
</div>
</div>

</div>
</div>
    </>
  )
}

export default Projects;

// "https://wallpapercave.com/wp/wp7208440.jpg"
// "https://www.teahub.io/photos/full/257-2572022_victorias-secret-models-hd.jpg"
// "https://p4.wallpaperbetter.com/wallpaper/539/836/28/holiday-miraculous-secret-victoria-wallpaper-preview.jpg"