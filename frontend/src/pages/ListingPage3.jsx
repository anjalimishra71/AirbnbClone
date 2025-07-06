import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';
function ListingPage3() {
  let navigate = useNavigate();

  let {
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
    adding,setAdding
  } = useContext(listingDataContext)
  return (
    <div>
      <div className='w-[100%] h-[100vh] bg-white flex items-center justify-center gap-[10px] flex-col relative overflow-auto'>

        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[5%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={() => navigate("/listingpage2")}><FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" /></div>

        <div className='w-[95%] flex items-start justify-start text-[25px] md:w-[80%] mb-[10px]'>
          <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
            {`In ${landmark.toUpperCase()}, ${city.toUpperCase()}`}
          </h1>

        </div>

        <div className='w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[80%] md:flex-row'>
          <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white] bg-[red]'>
            <img src={frontendImage1} alt='' className='w-[100%]' />
          </div>

          <div className='w-[100%] h-[50%] flex items-center justify-center md:w-[50%] md:h-[100%] md:flex-col'>

            <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
              <img src={frontendImage2} alt='' className='w-[100%]' />
            </div>

             <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
              <img src={frontendImage3} alt='' className='w-[100%]' />
            </div>

          </div>
        </div>
          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}</div>
          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px] text-gray-800'>{`${description.toUpperCase()}`}</div>
          <div className='w-[95%] flex items-start justify-start text-[18px] md:w-[80%] md:text-[25px]'>{`Rs.${rent}/day`}</div>


         <div className='w-[95%] h-[50px] flex items-center justify-start px-[110px]'>
          <button className='px-[50px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg' onClick={handleAddListing} disabled={adding}>{adding?"adding....":"Add Listing"}</button>
         </div>

      </div>

    </div>
  )
}

export default ListingPage3
