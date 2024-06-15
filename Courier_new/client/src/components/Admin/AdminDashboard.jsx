import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
  const [oders, setOders] = useState([]);
  const [internationaloders, setInternationalOders] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
   
    axios
      .get("http://localhost:5001/oder")
      .then((response) => {
        setOders(response.data);
        
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);

  useEffect(() => {
   
    axios
      .get("http://localhost:5001/oder/international")
      .then((response) => {
        setInternationalOders(response.data);
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);

  useEffect(() => {
   
    axios
      .get("http://localhost:5001/oder/contacts")
      .then((response) => {
        setMessages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
       
      });
  }, []);
  
  return (
    <div className='p-5'> 
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-2">
        {/*domestic oders */}
  <div className=' border-slate-200 border-2  rounded-lg p-3'>
    <h1 className='font-medium text-red-500'>Domestic Oders</h1>
    <div className=''>
     
    {oders.map((oders ) => (<>  
      <Link to={`/rootadmin/dashboard/${oders._id}`} >
    <div className='bg-gray-200 border rounded-lg p-2 m-2 mt-3'> 
    
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-2">
        <div className='flex'>
        <div className='font-medium'>Sender :</div>{oders.sendername}
        </div>
        <div className='flex'>
        <div className='font-medium'>Receiver :</div>{oders.receivername} 
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-2">
        <div className='flex'>
        <div className='font-medium'>Weight :</div>{oders.weight} 
        </div>
        <div className='flex'>
        <div className='font-medium'>price :</div>LKR.{oders.price} 
        </div>
      </div>
    </div>
    </Link>
    </>))}
   
    </div>
  </div>
     {/*domestic oders end*/}
        {/*international oders */}
        <div className=' border-slate-200 border-2  rounded-lg p-3'>
    <h1 className='font-medium text-red-500'>International Oders</h1>
    <div className=''>
    {internationaloders.map((oders ) => (<>  
    <div className='bg-gray-200 border rounded-lg p-2 m-2 mt-3'> 
    
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-2">
        <div className='flex'>
        <div className='font-medium'>Sender :</div>{oders.sendername} 
        </div>
        <div className='flex'>
        <div className='font-medium'>Receiver :</div>{oders.receivername} 
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1  sm:grid-cols-2">
        <div className='flex'>
        <div className='font-medium'>Weight :</div>{oders.weight} 
        </div>
        <div className='flex'>
        <div className='font-medium'>price :</div>LKR.{oders.price} 
        </div>
      </div>
    </div>
    
    </>))}
    </div>
  </div>
    {/*international oders end */}
</div></div>
  )
}

export default AdminDashboard