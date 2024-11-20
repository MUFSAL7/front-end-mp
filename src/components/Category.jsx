//category right
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCateogory, deleteCategory, deleteVideos, getAllCategory, getSingleVideo, updateCategory } from '../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import VideoCard from './VideoCard';



function Category({ setDelVideoCard,deleVideoResponseFromCtgry}) {
  const [show, setShow] = useState(false);
  const [Category, setCategory] = useState("")
  const [allCategory, setAllCategory] = useState([])
  console.log(Category);
  console.log(allCategory);





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getCategory()
  }, [deleVideoResponseFromCtgry])


  const handleAddCategory = async () => {
    if (Category) {
      try {
        const result = await addCateogory({ Category, allVideos: [] })
        console.log(result);
        setCategory("")
        handleClose()
        getCategory()

      }
      catch (err) {
        console.log(err);

      }
    }

    else {
      toast.warning("please fill the field")

    }
  }

  const getCategory = async () => {
    try {
      const result = await getAllCategory()
      // state updating method calling 
      setAllCategory(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }

  // delete
  const deleCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId)
      getCategory()

    }
    catch (err) {
      console.log(err);

    }
  }

  // drop fn
  const videoDropped = async (e, categoryId) => {
    console.log(`category id ${categoryId}`);

    const videoId = e.dataTransfer.getData("videoId")
    console.log(`drag started with video id:${videoId} and dropped in category id:${categoryId}`);

    // de structuring 
    const { data } = await getSingleVideo(videoId)
    console.log(data);

    const selectedCategory = allCategory.find(item => item.id == categoryId)
    // adddi details
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    // passing details to api call for storing
    await updateCategory(categoryId, selectedCategory)
    getCategory()

    //delete
    const result = await deleteVideos(videoId)
    setDelVideoCard(result.data)


  }

  // preventing hover on drag
  const dragOverStart = (e) => {
    e.preventDefault()
  }

  // 
  const dragStarted =(e,videoDetails,categoryId)=>{
    const shareData={videoDetails,categoryId}
    e.dataTransfer.setData("shareData",JSON.stringify(shareData))
    console.log(shareData);

    
  }
   // preventing hover on drag
  //  const drgOverStart = (e) => {
  //   e.preventDefault()

  // }




  return (
    <>

      <div className='container row mt-5'>
        <div className='d-flex jjustify-content-between col-md-10'>
          <h6 className='mt-5 fs-5'>All Categories</h6>
        </div>
        <div className='col-md-2 mt-5'>
          <button onClick={handleShow} className='btn btn-warninig mb-1'><i class="fa-solid fa-plus"></i></button>

        </div>

      </div>
      <div className='container-fluid mt-3'>
        {
          allCategory.length > 0 ?

            allCategory?.map(category => (

              <div draggable={true} droppable={true} onDragOver={(e) => dragOverStart(e)} onDrop={(e) => videoDropped(e, category.id)} className='border border-light border-3 rounded p-3 mb-3'>
                <div className="d-flex justify-content-between">
                  <h6 className='text-dark'>{category.Category}</h6>
                  <button onClick={() => deleCategory(category.id)} className='btn' ><i class="fa-solid fa-trash" style={{ color: 'red' }}> </i></button>

                </div>
                <div className='row mt-3'>
                 {
                  category.allVideos.length>0 &&

                  category.allVideos.map(video=>(

                     <div droppable={true} onDragStart={e=>dragStarted(e,video,category.id)} onDragOver={e=>dragOverStart(e)}  className='col-lg-6'>
                    <VideoCard displayData={video} insideCategory={true}/>

                  </div>

                  ))
                 
                 }

                </div>

              </div>


            ))

            :
            <div className='text-danger fw-bold fs-3'>Category not added yet</div>
        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInputCaptio"
            label="Caption"
            className="mb-3"
          >
            <Form.Control onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
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

export default Category