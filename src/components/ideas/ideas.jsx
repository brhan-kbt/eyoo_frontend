import React from "react";
import Frame from "../../assets/Frame 3.png";
import { VscArrowRight } from "react-icons/vsc";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from "axios";
import axiosClient from "../../axios";

const Ideas = () => {
  
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
 
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if ( email !=='' && name !=='' && message!=='') {
  //     openModal();
  //   }
  // }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    date: new Date(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post('/ideas', formData);
      openModal();
      setFormData({
        name: '',
        email: '',
        idea: '',
        date: ''
      });
    } catch (error) {
      console.error(error);
      alert('Error submitting data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
  <>
    <div className="md:mx-[5rem] my-[5rem] ">
      <div data-aos="fade-up" data-aos-duration="3000" className="underline decoration-[#FFA600] px-[0.8rem] text-xl md:text-[32px] mb-2 text-black font-bold">
        Give Your Ideas
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-duration="3000">
          <div className="flex-col z-40 px-[0.8rem]" data-aos="zoom-out-right">
           <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-[0.5rem]">
                <div>
                  <input
                    type="text"
                    // value={name}
                    // onChange={(event) => setName(event.target.value)}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    name="name"
                    class="
                          form-control
                          block
                          w-full
                          rounded-[10px]
                          px-3
                          py-3
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:outline-none
                        "
                    id="exampleFormControlInput1"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    // value={email}
                    // onChange={(event) => setEmail(event.target.value)}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    name="email"
                    class="
                        form-control
                        block
                        w-full
                        rounded-[10px]
                        px-3
                        py-3
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white  focus:outline-none
                        "
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
              </div>
            <div className="w-full mb-1 ">
              <textarea
                // value={message}
                // onChange={(event) => setMessage(event.target.value)}
                value={formData.idea}
                onChange={handleChange}
                name="idea"
                className="
                          form-control
                          block
                          w-full
                          px-3
                          py-3
                          resize-none
                          text-base
                          font-normal
                          rounded-[10px]
                          text-gray-700
                          bg-white bg-clip-padding
                          transition
                          m-0
                          h-[52vh]
                          focus:text-gray-700 focus:bg-white focus:outline-none
                        "
                id="exampleFormControlTextarea1"
                rows="17"
                placeholder="Type Here..."
              ></textarea>


              <div className=" flex justify-end p-3 -mt-[5rem] bottom-[2rem] right-[1rem]">
                <button
                  type="submit"
                  className=" inline-flex items-center rounded-full border bg-[#FFD154] px-2 py-1 font-bold text-black focus:outline-none focus:ring "
                >
                  <span className="font-inter text-[20px] leading-[42px] font-bold mr-5 ml-1">
                    Send
                  </span>
                  <div className="text-white h-[35px] w-[35px]">
                    <VscArrowRight className="h-full w-full" />
                  </div>
                </button>

              </div>
              
            </div>
            </form>
          </div>
       
        <div className="flex justify-center" data-aos="zoom-out-left">
          <img
            src={Frame}
            className='rounded-[10px]'
            alt="winner_photo"
            class="w-full object-cover"
          />
        </div>
      </div>
    </div>

    
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={closeModal}>
    <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center">
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
                as="h3"
                className="flex justify-center text-[35px] font-bold leading-[50px] text-gray-900"
            >
                መልክቶን ስለላኩልን እናመሰግናለን!
            </Dialog.Title>
            <div className="mt-2">
                <p className="flex justify-center text-[50px] text-gray-500">
                🤗
                </p>
            </div>

            <div className="mt-4">
                <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
                >
                Got it, thanks!
                </button>
            </div>
            </Dialog.Panel>
        </Transition.Child>
        </div>
    </div>
    </Dialog>
    </Transition>
    </>
  );
};

export default Ideas;
