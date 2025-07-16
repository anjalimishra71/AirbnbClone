import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useContext } from 'react';
import { userDataContext } from '../Context/UserContext';
import Card from '../Component/Card';

function MyBooking() {
    let navigate = useNavigate();
    let {userData}=useContext(userDataContext)  



    return (
        <div className='w-[100vw] min-h-[100vh] flex items-center justify-start gap-[50px] flex-col gap-[10px] relative'>
            <div className="w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center " onClick={() => navigate("/")}><FaArrowLeftLong className="w-[25px] h-[25px] text-[white]" /></div>


            <div className='w-[60%] h-[10%] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] px-[20px] rounded-md text-[#613b3b] font-semibold mt-[white] md:w-[600px] text-nowrap mt-[20px]'>MY Booking</div>
            <div className='w-[100%] h-[90%] flex items-center justify-center gap-[25px] flex-wrap mt-[30px]'>
                    {userData.booking.map((list) => (
                    <Card title={list.title} landmark={list.landmark} city={list.city} image1={list.image1} image2={list.image2} image3={list.image3} rent={list.rent} id={list._id} isBooked={list.isBooked} ratings={list.ratings} host={list.host}/>))}
            </div>



        </div>
    )
}

export default MyBooking
