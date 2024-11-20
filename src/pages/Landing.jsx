import React from 'react'
import Mediaimage from '../assets/music-beat.gif'
import Catogory from '../assets/ctgry.png'
import History from '../assets/history.png'
import Settings from '../assets/settings.png'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import History from './History';


function Landing() {
  return (

  <div className='container mb-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 '>
         <div className='mt-5'>
            <h3>
              WELCOME TO <span>MEDIA PLAYER</span>
            </h3>
           <div >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ab at perferendis aliquid necessitatibus magni incidunt veritatis omnis reprehenderit fugiat ea eveniet, impedit culpa maxime vel, obcaecati enim earum libero?
              </p>
              <Link to={'/home'} className='btn btn-info mt-3'> Let's Play
              </Link>
           </div>
         </div>
        </div>
        <div className='col-md-6'>
          <img src={Mediaimage} alt="" />
         </div>
      </div>

      <div className='row mt-5 mb-5'>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
         <Card.Img style={{background:'#d9d9d9'}} variant="top" src={History} />
         <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
         <Card.Img style={{background:'#d9d9d9'}} variant="top" src={Catogory} />
         <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
         <Card.Img style={{background:'#d9d9d9'}} variant="top" src={Settings} />
         <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
        </div>

      </div>


      <div className=' w-100 border border-white rounded border-3 p-5 mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h3 >Simple Fast and Powerfull</h3>
            <div className='text-white mt-5'>
              <p><span className='px-1 fw-boldm fs-5'>Play everithing:</span>Lorem ipsum dolor sit  Lorem ipsum dolor sit atuLorem ipsum dolor sit atu</p>
              <p><span className='px-1 fw-boldm fs-5'>Play everithing:</span>Lorem ipsum dolor sit  Lorem ipsum dolor sit atuLorem ipsum dolor sit atu</p>
              <p><span className='px-1 fw-boldm fs-5'>Play everithing:</span>Lorem ipsum dolor sit  Lorem ipsum dolor sit atuLorem ipsum dolor sit atu</p>


            </div>
          </div>
          <div className='col-md-6'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YVkUvmDQ3HY?si=046YpjCgK2oj3_7R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
      </div>



  </div>





  )
}

export default Landing