import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Summary = () => {
  const [orders, setOrders] = useState(null);
  const [formData, setFormData] = useState({
    sendername: '',
    sendernumber: '',
    senderaddress: '',
    receivername: '',
    receivernumber: '',
    receiveraddress: '',
    weight: '',
    price: ''
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5001/oder/${id}`) // Fixed the typo
        .then((response) => {
          setOrders(response.data);
          setFormData({
            sendername: response.data.sendername || '',
            sendernumber: response.data.sendernumber || '',
            senderaddress: response.data.senderaddress || '',
            receivername: response.data.receivername || '',
            receivernumber: response.data.receivernumber || '',
            receiveraddress: response.data.receiveraddress || '',
            weight: response.data.weight || '',
            price: response.data.price || ''
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5001/oder/international/${id}`) // Fixed the typo
        .then((response) => {
       
          setFormData({
            sendername: response.data.sendername || '',
            sendernumber: response.data.sendernumber || '',
            senderaddress: response.data.senderaddress || '',
            receivername: response.data.receivername || '',
            receivernumber: response.data.receivernumber || '',
            receiveraddress: response.data.receiveraddress || '',
            weight: response.data.weight || '',
            price: response.data.price || ''
          });
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
      {orders && orders.id ? (
        <div>Loading...</div>
      ) : (
        <>
          <form className="summary">
            <fieldset>
              <legend>Sender Details</legend>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.sendername}
                onChange={(e) => setFormData({ ...formData, sendername: e.target.value })}
              />
              <label htmlFor="number">Phone Number:</label>
              <input
                type="text"
                id="Number"
                name="Number"
                value={formData.sendernumber}
                onChange={(e) => setFormData({ ...formData, sendernumber: e.target.value })}
              />
              <label htmlFor="Address">Address:</label>
              <textarea
                id="Address"
                name="Address"
                value={formData.senderaddress}
                onChange={(e) => setFormData({ ...formData, senderaddress: e.target.value })}
              />
            </fieldset>

            <fieldset>
              <legend>Receiver Details</legend>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.receivername}
                onChange={(e) => setFormData({ ...formData, receivername: e.target.value })}
              />
              <label htmlFor="number">Phone Number:</label>
              <input
                type="text"
                id="Number"
                name="Number"
                value={formData.receivernumber}
                onChange={(e) => setFormData({ ...formData, receivernumber: e.target.value })}
              />
              <label htmlFor="Address">Address:</label>
              <textarea
                id="Address"
                name="Address"
                value={formData.receiveraddress}
                onChange={(e) => setFormData({ ...formData, receiveraddress: e.target.value })}
              />
            </fieldset>

            <fieldset>
              <legend>Package Details</legend>
              <label htmlFor="weight">Weight:</label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              />
               <label htmlFor="Price">Price:</label>
              <input
                type="text"
                id="Price"
                name="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </fieldset>
        

            <Link to="/"><input className="mb-3 bg-green-500" type="submit" value="Done" /></Link>
          </form>
        </>
      )}
    </>
  );
};

export default Summary;
