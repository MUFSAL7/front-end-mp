import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideos, saveHistory } from '../services/allAPI';
saveHistory
deleteVideos


function VideoCard({ displayData, Dfn, insideCategory }) {
  console.log(displayData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {

    const { caption, youtubeUrl } = displayData

    const localTime = new Date();
    const formatedDate = localTime.toLocaleString();
    console.log(formatedDate);
    const historyData = { caption, youtubeUrl, formatedDate }
    console.log(historyData);

    try {
      await saveHistory(historyData)
    }
    catch (err) {
      console.log(err);

    }




    setShow(true)
  };

  // 
  const handleRemoveVideo = async (videoid) => {
    try {
      const result = await deleteVideos(videoid)
      console.log(result);
      Dfn(result.data)

    }
    catch (err) {
      console.log(err);

    }


  }
  // passing event and video id
  const dragStarted = (e, videoId) => {
    console.log(`drag completed ${videoId}`);

    // passing video id using dataTransfer.setData
    // dataTransfer is object and setData is method of that object
    // set data need string and value value = video id ,that means key value pair key should be string

    e.dataTransfer.setData("videoId", videoId)

  }

  return (
    <>
      <div className='container ' style={{ width: '100%' }}>
        <Card  draggable={true} onDragStart={(e) => dragStarted(e, displayData.id)} className='mb-2 ' style={{ width: '200px', height: '100%' }}>
          <Card.Img onClick={handleShow} style={{ height: '180px', width: '200px' }} variant="top" src={displayData?.imageUrl} />
          <Card.Body>
            <Card.Title>

              <div className='d-flex'>
                <p className=''>{displayData?.caption}</p>
{  
      !insideCategory &&

              <button className='btn' onClick={() => handleRemoveVideo(displayData?.id)} ><i class="fa-solid fa-trash"></i></button>

}  

              </div>



            </Card.Title>

          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{displayData?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe width="100%" height="450px" src={`${displayData?.youtubeUrl}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal.Body>

        </Modal>
      </div>
    </>
  )
}

export default VideoCard