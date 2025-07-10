import Booking from "../model/bookingModel.js"
import Listing from "../model/listingModel.js"
import User from "../model/userModel.js"

export const createBooking=async(req,res)=>{
    try{
      let {id}=req.params
      let {checkIn,checkOut,totalRent}=req.body
      let listing=await Listing.findById(id)
      if(!listing){
        return res.status(404).json({message:"Listing is not found"})
      }

      if(new Date(checkIn)>=new Date(checkOut)){
     return res.status(404).json({message:"invalid checkIn/checkOut date"})
      }

      if(listing.isBooked){
       return res.status(404).json({message:"Listing is already Booked"})
      }

      let booking=await Booking.create({
        checkIn,
        checkOut,
        totalRent,
        host:listing.host,
        guest:res.userId,
        listing:listing._id
      })
      let user=await User.findByIdAndUpdate(res.userId,{
        $push:{booking:listing}
      },{new:true})

      if(!user){
          return res.status(404).json({message:"User is not found"})
      }
      listing.guest=res.userId
      listing.isBooked=true
      await listing.save()
      return res.status(201).json(booking)
    }catch(error){
      return res.status(500).json({message:`booking created ${error}`})

    }
}