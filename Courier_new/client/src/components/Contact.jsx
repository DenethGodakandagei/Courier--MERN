import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/oder/contacts", {
        name,
        email,
        message,
      });

      toast.success("Message Sent", {
        position: toast.POSITION.TOP_CENTER,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("An error occurred. Please check the console for details.", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="container my-24 mx-auto md:px-6" id="contact">
        <h1 className="text-3xl lg:text-4xl text-red-500 font-extrabold text-center p-6">
          Contact Us
        </h1>

        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-2 py-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-gray-60 dark:shadow-black/20 md:px-12 lg:-mr-14 m-6">
                    <h2 className="mb-12 text-3xl font-bold text-red-500">
                      Contact us
                    </h2>
                    <form onSubmit={onSubmit} className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-1 mb-1">
                        <div className="w-full px-1">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-name"
                          >
                            Name
                          </label>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-name"
                            type="text"
                            aria-label="Name"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-email"
                          >
                            E-mail
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-email"
                            type="email"
                            aria-label="E-mail"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-message"
                          >
                            Message
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-18 resize-none"
                            id="grid-message"
                            aria-label="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                          <button
                            className="shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                        <div className="md:w-2/3"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0 m-5">
                  <div className="relative h-[400px] sm:h-[600px] rounded-lg shadow-lg dark:shadow-black/20">
                    <iframe
                      src="https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="absolute left-0 top-0 h-full w-full rounded-lg sm:w-30"
                      frameBorder="0"
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex="0"
                      title="Google Maps"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
