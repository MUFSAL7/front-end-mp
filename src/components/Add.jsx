import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideos } from '../services/allAPI';
addVideos

function Add({addfunction}) {
  const [videoDetails, setVideoDetails] = useState({ caption: "", imageUrl: "", youtubeUrl: "" })
  console.log(videoDetails);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isInvalidUrl, setInvalidUrl] = useState(false)

  const getEmnbedurl = (link) => {
    if (link.includes('v=')) {
      let videoId = link.split("v=")[1].slice(0, 11)
      
      console.log(videoId);
      setVideoDetails({ ...videoDetails, youtubeUrl: `https://www.youtube.com/embed/${videoId}` })
      setInvalidUrl(false)


    }
    else {
      setVideoDetails({ ...videoDetails, youtubeUrl: "" })
      setInvalidUrl(true)
    }
  }

  const handleUpload =async() => {
    const { caption, imageUrl, youtubeUrl } = videoDetails
    // is valid all field 
    if (caption && imageUrl && youtubeUrl) {

      // console.log("api call");

      try{
        const result=await addVideos(videoDetails)
        console.log(result);
        addfunction(result.data)
        toast.success(`${result.data.caption} is added to your caption `)
        handleClose()
        setVideoDetails({ caption: "", imageUrl: "", youtubeUrl: "" })
        
      
      }
      catch(err){
        console.log(err);
        
      }

    }
    else {
      toast.warning("please fill the field")
    }
  }



  return (
    <>
      <div className="container mt-3 mb-3">
        <div className='d-flex align-items-center'>
          <button onClick={handleShow} className='ms-3 b-1 btn btn-warning fs-5 rounded-circle '><i class="fa-solid fa-plus"></i></button>
          <h5 className='ms-2'>Add New</h5>

        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details.</Modal.Title>
        </Modal.Header>
        <p className='ms-3'>Please fill the form..</p>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputCaption"
            label="Video caption"
            className="mb-3"
          >
            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="video caption.." />
          </FloatingLabel>
          {/* img url */}
          <FloatingLabel
            controlId="floatingInputImage"
            label="Image"
            className="mb-3"
          >
            <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} type="text" placeholder="image url" />
          </FloatingLabel>

          {/* youtube url */}
          <FloatingLabel
            controlId="floatingInputYoutube"
            label="Youtube url"
            className="mb-3"
          >
            <Form.Control onChange={e => getEmnbedurl(e.target.value)} type="text" placeholder="youtube url" />
          </FloatingLabel>
          {
            isInvalidUrl && <div className='text-danger fw-bold'>invalid input</div>
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Add