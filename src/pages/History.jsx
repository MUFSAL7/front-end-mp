import React, { useState ,useEffect} from 'react'
getAllHistory
import Table from 'react-bootstrap/Table';
import { deleteHistory, getAllHistory, getHistory } from '../services/allAPI';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
ToastContainer
Link
deleteHistory
getHistory
useState





function History({displayData}) {
  console.log(displayData);
  

  const [videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);


  const getHistory=async()=>{
    try{
      const result=await getAllHistory()
      setVideoHistory(result.data)
      console.log(result);
      
    }
    catch(err){
      console.log(err);
      
    }
  }
  

  useEffect(() => {
    getHistory()
  }, [])
  

  // deleting history 
  const clickRemoveHistory=async(videoid)=>{
    try{
      const result=await deleteHistory(videoid)
      // setVideoHistory((prevideo)=> prevideo.filter((idh)=> idh.id !==videoid))
      getHistory()
      toast.warning(`deleted success fully`)
      console.log(result);
      
      
    }
    catch(err){
      console.log(err);

    }
    

  };





  return (
   <>
   <div className="container w-100">
   <Link to={'/home'} className='d-flex text-dark fw-bold fs-6 mt-5' style={{ textDecoration: 'none' }}> 
   <i class="fa-solid fa-arrow-left"></i>
   </Link>

    <div className='table mt-4 border border-hover border-white'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#id</th>
          <th>Name</th>
          <th>URL</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {
          videoHistory.map((idh,index)=>{
            return(
              <tr key={index}>
              <td>{index + 1}</td>
              <td>{idh.caption}</td>
              <td> <a href={idh.youtubeUrl}>{idh.youtubeUrl}</a></td>
              <td>{idh.formatedDate}</td>
              <td>
                <button className='btn btn-outline-info ms-5 ' onClick={()=>clickRemoveHistory(idh.id)}>
                <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>

   </div>
   <ToastContainer
position="top-center"
autoClose={3999}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Zoom
/>
   </>
  )
}

export default History