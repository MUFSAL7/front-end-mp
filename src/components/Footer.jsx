import React from 'react'
// import Footer from 'react-bootstrap/Footer';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='container mt-5 w-100' style={{height:'300px'}}>

      <div className='row'>
        <div className='col-md-5'>
            
          <div className='d-flex mb-2'>
            <i class="fa-solid fa-circle-play" style={{fontSize:"30px"}}></i>
    
            <h4 className='ms-2 mb-2'>MediaPlayer</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A commodi, tempore ipsum natus ea soluta quaerat officiis eaque perspiciatis mollitia debitis autem repellendus neque deserunt voluptate suscipit accusamus deleniti hic?
          </p>
          <p>
            code liecensed by luminar
          </p>
          <p>
            currently v5.3.2
          </p>

        </div>
        <div className='col-md-2 px-5'>
          <h3>Links</h3>
          <h6><Link to={'/'} style={{textDecoration:'none',color:'#fff'}}>Landing</Link></h6>
          <h6><Link to={'/home'} style={{textDecoration:'none',color:'#fff'}}>Home</Link></h6>
          <h6><Link to={'/history'} style={{textDecoration:'none',color:'#fff'}}>History</Link></h6>

        </div>
        <div className='col-md-2'>
          <h3>
            Guide
          </h3>
          <h6><a href=''>React</a></h6>
          <h6>React Router</h6>
          <h6>ReactBootstrap</h6>
        </div>
        <div className='col-md-2'>
        <h4>
            Contact Us
          </h4>
          <div className='d-flex'>
            <input type="text" className='rounded p-1' placeholder='Enter your email'/>
            <div className='f-5 px-2  rounded' style={{background:'#fff' ,}}><i class="fa-solid fa-arrow-right" style={{color:'#ff00ff' ,marginTop:'10px '}}></i></div>
          </div>
         <div className='mt-1 d-flex' >
            <div className='p-2'><i class="fa-brands fa-facebook"></i></div>
            <div className='p-2'><i class="fa-brands fa-twitter"></i></div>
            <div className='p-2'><i class="fa-brands fa-instagram"></i></div>
            <div className='p-2'><i class="fa-brands fa-linkedin"></i></div>
            <div className='p-2'><i class="fa-brands fa-github"></i></div>
            <div className='p-2'><i class="fa-solid fa-phone"></i></div>



           
         </div>

        </div>
        
      </div>
      <div className='d-flex  align-items-center justify-content-center'><p>Copyright &copy; july 2024 Batch,Media Player, Built with </p></div>


    </div>
  )
}

export default Footer