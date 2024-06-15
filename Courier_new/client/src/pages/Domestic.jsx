import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import about from "../assets/about.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Domestic = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");

  const [sendername, setSendername] = useState("");
  const [sendernumber, setSendernumber] = useState("");
  const [senderaddress, setSenderaddress] = useState("");

  const [receivername, setReceivername] = useState("");
  const [receivernumber, setReceivernumber] = useState("");
  const [receiveraddress, setReceiveraddress] = useState("");

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick1 = () => {
    if (weight <= 0) {
      toast.error("Enter Package Weight !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsActive1(true);
      setIsActive2(true);
    }
  };
  const handleClick2 = () => {
    if (sendername === "" || sendernumber === "" || senderaddress === "") {
      toast.error("Enter All Sender Details !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setIsActive3(true);
      setIsActive2(false);
    }
  };
  const handleClick3 = () => {
    
    const data = {
      weight,
      price,
      sendername,
      sendernumber,
      senderaddress,
      receivername,
      receivernumber,
      receiveraddress,
    };
  
  
    axios
      .post("http://localhost:5001/oder", data)
      .then((response) => {  
        const newreqId = response.data.id;
        console.log(newreqId);
        navigate(`/order/${newreqId}`)     
        toast.success(" success ", {
          position: toast.POSITION.TOP_CENTER,
        });
        
      })
      .catch((error) => {
        alert("An error check console");
        console.log(error);
      });
  };
 

  const [price, setPrice] = useState();

  useEffect(() => {
    const calculateAmount = () => {
      if (weight === 1) {
        setPrice(350);
      } else if (weight === 0) {
        setPrice(0);
      } else if (5 >= weight) {
        setPrice(350 + weight * 100);
      } else {
        setPrice(500 + weight * 150);
      }
    };

    calculateAmount();
  }, [weight]);

  return (
    <div>
      <NavBar />
      <ToastContainer />
      <div className="container  mx-auto md:px-6">
        <section className="background-radial-gradient mb-32">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div className="h-[300px] mt-12 lg:mt-0 ">
                  {/* amount count */}
                  <div className={isActive1 ? "activeamount" : ""}>
                    <div className="max-w-sm mx-auto max-h-sm pr-4">
                      <h2 className="text-2xl font-bold  mb-2">
                        Island Wide Delivery Service
                      </h2>

                      <div className="py-5">
                        <span className="font-bold ">Weight (Kg) :-</span>
                      </div>

                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <input
                          type="number"
                          className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none"
                          required
                          value={weight}
                          onChange={(e) => setWeight(Number(e.target.value))}
                        />
                      </div>
                      <div className="p-4"></div>

                      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                      <div className="flex -mx-2 mb-2 py-2 ">
                        <span className="p-2 text-2xl ">
                          Amount : LKR.{price}
                        </span>
                      </div>

                      <div className="flex grid  justify-items-end ">
                        <button
                          onClick={handleClick1}
                          className="ml-10 bg-black text-white p-2 rounded-xl"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* amount count end */}
                  {/* sender details */}
                  <div className={isActive2 ? "activesender" : "sender"}>
                    <form className="max-w-sm mx-auto max-h-sm mr-5 sm:ml-[105px]">
                      <h2 className="text-2xl font-bold  mb-2">
                        Sender Details
                      </h2>
                      <div className="mb-5">
                        <label
                          htmlFor="Name"
                          className="block mb-2 text-sm font-medium "
                        >
                          Name
                        </label>
                        <input
                          type="Name"
                          id="Name"
                          className="shadow-sm bg-gray-50 border "
                          value={sendername}
                          onChange={(e) => setSendername(e.target.value)}
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="PhoneNumber"
                          className="block mb-2 text-sm font-medium "
                        >
                          Contact Number
                        </label>
                        <input
                          type="number"
                          id="PhoneNumber"
                          className="shadow-sm bg-gray-50 border "
                          value={sendernumber}
                          onChange={(e) =>
                            setSendernumber(Number(e.target.value))
                          }
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="Address"
                          className="block mb-2 text-sm font-medium "
                        >
                          Address
                        </label>
                        <textarea
                          rows="4"
                          cols="50"
                          id="Address"
                          className="shadow-sm bg-gray-50 border max-w-md mx-auto"
                          value={senderaddress}
                          onChange={(e) => setSenderaddress(e.target.value)}
                        />
                      </div>
                      <div className="flex grid  justify-items-end ">
                        <div
                          onClick={handleClick2}
                          className="ml-10 bg-black text-white p-2 rounded-xl cursor-pointer"
                        >
                          Next
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* sender details  end*/}
                  {/* Receiver details */}
                  <div className={isActive3 ? "activeReceiver" : "Receiver"}>
                    <form className="max-w-sm mx-auto max-h-sm mr-5 sm:ml-[105px] mt-[-425px]">
                      <h2 className="text-2xl font-bold  mb-2">
                        Receiver Details
                      </h2>
                      <div className="mb-5">
                        <label
                          htmlFor="Name"
                          className="block mb-2 text-sm font-medium "
                        >
                          Name
                        </label>
                        <input
                          type="Name"
                          id="Name"
                          className="shadow-sm bg-gray-50 border "
                          value={receivername}
                          onChange={(e) => setReceivername(e.target.value)}
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="PhoneNumber"
                          className="block mb-2 text-sm font-medium "
                        >
                          Contact Number
                        </label>
                        <input
                          type="number"
                          id="PhoneNumber"
                          className="shadow-sm bg-gray-50 border "
                          value={receivernumber}
                          onChange={(e) =>
                            setReceivernumber(Number(e.target.value))
                          }
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor="Address"
                          className="block mb-2 text-sm font-medium "
                        >
                          Address
                        </label>
                        <textarea
                          rows="4"
                          cols="50"
                          id="Address"
                          className="shadow-sm bg-gray-50 border max-w-md mx-auto"
                          value={receiveraddress}
                          onChange={(e) => setReceiveraddress(e.target.value)}
                        />
                      </div>

                      <div className="flex grid  justify-items-end ">
                        <button
                          type="button"
                          onClick={handleClick3}
                          className="ml-10 bg-black text-white p-2 rounded-xl"
                        >
                        Oder Done
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Receiver details  end*/}
                </div>
                <div className="mt-10  item-center   lg:mb-0">
                  <img src={about} alt="delivery" className="   relative  " />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Domestic;
