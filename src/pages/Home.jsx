import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {
  const [addVideoResponse,setAddVideoResponse]=useState("")

  // deleting after drag and drop
  const [delVideosVideoCard,setDelVideoCard]=useState("")

  // the update info passing to child view,category
  const [deleVideoResponseFromCtgry,setDeleVideoResponseFromCtgry]=useState("")
  

  return (
    <>
      <div className='container d-flex justify-content-between my-4'>
        {/* placing add selector  */}
        <Add  addfunction={setAddVideoResponse}  />
        <Link to={'/history'} className='text-warning fw-bold fs-10' style={{ textDecoration: 'none' }}> 

          <div>
          <h6 className='d-flex  text-warning fw-bold fs-10'> Watch<span className='ms-1'>History</span></h6>
          </div>

        </Link>
      </div>
      <div className='row container-fluid my-5'>
        <div className='col-md-6 d-flex  justify-content-center mt-5 mb-5'>
          <View addState={addVideoResponse}  delVideosVideoCard={delVideosVideoCard}  setDeleVideoResponseFromCtgry={setDeleVideoResponseFromCtgry} />
        </div>
        <div className='col-md-6'>
          <Category  setDelVideoCard={setDelVideoCard} deleVideoResponseFromCtgry={deleVideoResponseFromCtgry} />
        </div>
      </div>
    </>
  )
}

export default Home