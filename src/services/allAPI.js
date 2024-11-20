// this file used to save video
// save video api called by add.jsx
// call common api call

import commonAPI from "./commandAPI";
import SERVER_URL from './server_url';

commonAPI

// export key word used fore export multiple
export const addVideos = async (videodetails) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, videodetails)
}

// api call for get  all videos
// no need argument 
// "get" use http method

export const getAllVideos=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// video delete

export const deleteVideos=async(videoid)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoid}`,{})
}

//  save history api call

export const saveHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,video)
}

// gte api history
export const getAllHistory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}
// 
export const getHistory =async(video)=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,video)
}

//delete History
export const deleteHistory = async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
}
//Categoryadding
export const addCateogory = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/allCategory`,categoryDetails)
}

//getCategory
export const getAllCategory = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allCategory`,"")
}
//deleteCategory
export const deleteCategory = async (categoryId) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allCategory/${categoryId}`,{})
}

// api call for geting single video details
export const getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`,"")
}

// api call for update category
export const updateCategory = async (categoryId,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/allCategory/${categoryId}`,categoryDetails)
}
// get details of category
export const getDetailsOfSingleCategory = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/allCategory/${categoryId}`,"")
}
