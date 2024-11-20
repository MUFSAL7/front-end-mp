//view left
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import { addVideos, getAllVideos, getDetailsOfSingleCategory, updateCategory } from '../services/allAPI';
addVideos
updateCategory
getDetailsOfSingleCategory
getAllVideos
useEffect

function View({addState,delVideosVideoCard,setDeleVideoResponseFromCtgry}) {
  const [allVideos, setAllvideos] = useState([])
  const [deleteVideosResponse,setDeleteVideo]=useState("")


  useEffect(() => {
    getallvideos()
  }, [ addState,deleteVideosResponse,delVideosVideoCard])
  console.log(allVideos);


  const getallvideos = async () => {
    try {
      const result = await getAllVideos()
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setAllvideos(result.data)
      }

    } catch (err) {
      console.log(err);


    }
  }

  const dragOverView=(e)=>{
    e.preventDefault()
  }
  const handleCategoryVideo=async(e)=>{
    // dstruchturing a object to string
    const {videoDetails,categoryId}=JSON.parse(e.dataTransfer.getData("shareData"))
    console.log(videoDetails,categoryId);
    
    // api call

    try {

      // dstructuring
      const {data}=await getDetailsOfSingleCategory(categoryId)
      console.log(data);
      console.log(data.allVideos);
      

      // updating and storing none darged element
      const  selectedCategoryVideoList = data.allVideos.filter(video=>video.id!=videoDetails.id)
      console.log(selectedCategoryVideoList);

      const {id,category}=data

      const categoryResult = await updateCategory(categoryId,{id,category,allVideos:selectedCategoryVideoList})
      setDeleVideoResponseFromCtgry(categoryResult.data)
      await addVideos(videoDetails)
      getAllVideos()
      

      
    } catch (err) {
      
      console.log(err);
       
      
    }


  }


  return (
    <>
    <div className='d-flex flex-column '>
      <h4 className='mb-3 m-5 ms-4 fs-5'>All videos</h4>
    
      <Row className='border border-1 rounded-top ms-4 '  droppable={true} onDragOver={(e)=>dragOverView(e)} onDrop={(e)=>handleCategoryVideo(e)}>
        {
          allVideos.length > 0 ?
            allVideos?.map(video => (

              <Col key={video?.id} lg={4} md={6} sm={12} >

                <VideoCard displayData={video} Dfn={setDeleteVideo} />
              </Col>
            ))
            :
            <div className='text-danger fw-bold fs-3'> nothing</div>
        }
      </Row>
      </div>

    </>

  )
}

export default View