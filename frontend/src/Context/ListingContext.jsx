import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react';
import { authDataContext } from './AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const listingDataContext = createContext();


function ListingContext({ children }) {
  let navigate = useNavigate()
  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")
  let [frontendImage1, setFrontendImage1] = useState(null)
  let [frontendImage2, setFrontendImage2] = useState(null)
  let [frontendImage3, setFrontendImage3] = useState(null)
  let [backendImage1, setBackendImage1] = useState(null)
  let [backendImage2, setBackendImage2] = useState(null)
  let [backendImage3, setBackendImage3] = useState(null)
  let [rent, setRent] = useState("")
  let [city, setCity] = useState("")
  let [landmark, setLandmark] = useState("")
  let [category, setCategory] = useState("")
  let [adding, setAdding] = useState(false)
  let [updating, setUpdating] = useState(false)
    let [deleting, setDeleting] = useState(false)


  let [listingData, setListingData] = useState([])
  let [newListData, setNewListData] = useState([])
  let [cardDetails,setCardDetails]=useState(null)
let [searchData,setSearchData]=useState([])

  let { serverUrl } = useContext(authDataContext)

  const handleAddListing = async () => {
    setAdding(true);
    try {
      let formData = new FormData();
      formData.append("title", title)
      formData.append("image1", backendImage1)
      formData.append("image2", backendImage2)
      formData.append("image3", backendImage3)
      formData.append("description", description)
      formData.append("rent", rent)
      formData.append("city", city)
      formData.append("landmark", landmark)
      formData.append("category", category)
      let result = await axios.post(serverUrl + "/api/listing/add", formData, { withCredentials: true });
      console.log(result);
      setAdding(false);

      navigate("/")
      toast.success("AddListing Successfully");
      
      setTitle("")
      setDescription("")
      setFrontendImage1(null)
      setFrontendImage2(null)
      setFrontendImage3(null)
      setBackendImage1(null)
      setBackendImage2(null)
      setBackendImage3(null)
      setRent("")
      setCity("")
      setLandmark("")
      setCategory("")


    } catch (error) {
      setAdding(false);
      console.log(error);
    }
  }

const handleViewCard=async (id)=>{
  try{
      let result=await axios.get(serverUrl+`/api/listing/findlistingByid/${id}`,{withCredentials:true})
      console.log(result.data);
      setCardDetails(result.data);
      navigate("/viewcard")
  }catch(error){
    console.log(error);
  }
}


  const handleSearch=async(data)=>{
    try{ 
        let result=await axios.get(serverUrl+`/api/listing/search?query=${data}`)
        setSearchData(result.data)
    }catch(error){
      setSearchData(null)
      console.log(error)
    }
  }




  const getListing = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/listing/get", { withCredentials: true })
      setListingData(result.data)
      setNewListData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
     getListing();
  },[adding,updating,deleting])

  let value = {
    title, setTitle,
    description, setDescription,
    frontendImage1, setFrontendImage1,
    frontendImage2, setFrontendImage2,
    frontendImage3, setFrontendImage3,
    backendImage1, setBackendImage1,
    backendImage2, setBackendImage2,
    backendImage3, setBackendImage3,
    rent, setRent,
    city, setCity,
    landmark, setLandmark,
    category, setCategory,
    handleAddListing,
    adding, setAdding,
    listingData, setListingData,
    newListData, setNewListData,
    handleViewCard,
    cardDetails,setCardDetails,
    updating, setUpdating,
    deleting, setDeleting,
    getListing,handleSearch,
    searchData,setSearchData
  }

  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  )
}

export default ListingContext
