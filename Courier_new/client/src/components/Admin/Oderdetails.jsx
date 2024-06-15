import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const Oderdetails = () => {
  const [oders, setOders] = useState([]);
  const { id } = useParams();
  useEffect(() => {
   
    axios
      .get(`http://localhost:5001/oder/${id}`)
      .then((response) => {
        setOders(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);

  return (
    <div className='p-5'> 
    <div class="grid gap-4 grid-cols-2">
      {/*sender details */}
<div className=' border-slate-200 border-2  rounded-lg p-3'>
  <h1 className='font-medium text-red-500'>sender details </h1>
  <div className=''>
   

  <div className='bg-gray-200 border rounded-lg p-2 m-2 mt-3'> 
  
    <div class="grid gap-4 grid-cols-2">
      <div className='flex'>
      <div className='font-medium'>Sender :</div>{oders.sendername}
      </div>
      <div className='flex'>
      <div className='font-medium'>Receiver :</div>{oders.receivername} 
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div className='flex'>
      <div className='font-medium'>Weight :</div>{oders.weight} 
      </div>
      <div className='flex'>
      <div className='font-medium'>price :</div>LKR.{oders.price} 
      </div>
    </div>
  </div>
 
 
  </div>
</div>
   {/*sender details end*/}
      {/*receiver details  */}
      <div className=' border-slate-200 border-2  rounded-lg p-3'>
  <h1 className='font-medium text-red-500'>receiver details </h1>
  <div className=''>

  <div className='bg-gray-200 border rounded-lg p-2 m-2 mt-3'> 
  
    <div class="grid gap-4 grid-cols-2">
      <div className='flex'>
      <div className='font-medium'>Receiver :</div>{oders.receivername} 
      </div>
      <div className='flex'>
      <div className='font-medium'>Receiver :</div>{oders.receivername} 
      </div>
    </div>
    <div class="grid gap-4 grid-cols-2">
      <div className='flex'>
      <div className='font-medium'>Weight :</div>{oders.weight} 
      </div>
      <div className='flex'>
      <div className='font-medium'>price :</div>LKR.{oders.price} 
      </div>
    </div>
  </div>
  
 
  </div>
</div>
  {/*receiver details  end */}
</div></div>
  )
}

export default Oderdetails