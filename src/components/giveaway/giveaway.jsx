import React, { useEffect } from "react";
import give from "../../assets/give.png";
import ellipse from "../../assets/ellipse.png";
import giftbox from "../../assets/giftbox.png";
import hotmart from "../../assets/hotmart.png";
import spoby from "../../assets/spoby.png";
import Countdown from "react-countdown";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from "axios";
import axiosClient from "../../axios";

// Renderer callback with condition
 const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
//   // Render a countdown


   return (
     // <div className="md:pl-[5rem] ">
    <>
     { !completed &&
     <div className="flex items-start rounded-3xl h-[10rem] md:h-[15rem]  w-min mt-[8rem] bg-[#23675A] font-bold font-mono">
        <div className="flex flex-row items-center md:gap-5  align-middle text-center auto-cols-max px-1 pt-6 pb-2">
         <div className="flex flex-col mt-[1rem] md:mt-[2.8rem] p-2 bg-[#23675A] rounded-box text-neutral-content">
           <span className="countdown drop-shadow-text_shadow font-mono text-[30px] md:text-[60px]">
             <span style={{ "--value": days }}></span>
           </span>
           days
         </div>
         <div className="flex flex-col mt-[1rem] md:mt-[2.8rem] p-2 bg-[#23675A] rounded-box text-neutral-content">
           <span className="countdown drop-shadow-text_shadow font-mono text-[30px] md:text-[60px]">
             :{" "}
             <span
               style={{
                 "--value": hours,
               }}
               className="pl-[2rem]"
             ></span>
           </span>
           <span className="pl-[2rem]">hours</span>
         </div>
         <div className="flex flex-col mt-[1rem] md:mt-[2.8rem] p-2 bg-[#23675A] rounded-box text-neutral-content">
           <span className="countdown drop-shadow-text_shadow font-mono text-[30px] md:text-[60px]">
             : <span style={{ "--value": minutes }} className="pl-[2rem]"></span>
           </span>
           <span className="pl-[2rem]">mins</span>
         </div>
         <div className="flex flex-col mt-[1rem] md:mt-[2.8rem] p-2 bg-[#23675A] rounded-box text-neutral-content">
           <span className="countdown drop-shadow-text_shadow font-mono text-[30px] md:text-[60px]">
             : <span style={{ "--value": seconds }} className="pl-[2rem]"></span>
           </span>
           <span className="pl-[2rem]">sec</span>
         </div>
       </div>
     </div>
        }
        {completed && <div className="flex items-center justify-center md:gap-2 font-bold  text-black text-3xl">
            <div>
                <h1>Question is Ready </h1>
                <h2>Check <a href="/question" className="text-[#23675A] underline underline-offset-2" target={'_blank'}>here!</a></h2>
            </div>
       </div>}

      </>
             
   );
 };

 const handleCountdownComplete=()=>{
// {completed && <div className="flex flex-row items-center md:gap-5  align-middle text-center auto-cols-max px-1 pt-6 pb-2">
//         <h1>Question is Ready </h1>
//         <h2>Check <a href="/question">here!</a></h2>
//       </div>}
 }
 
// const Completionist = () => <span>You are good to go!</span>;

// const renderer = ({ hours, minutes, seconds, completed }) => {
//   if (completed) {
//     return <Completionist />;
//   } else {
//     return <span>{hours}:{minutes}:{seconds}</span>;
//   }
// };

// function renderCountdown({ days, hours, minutes, seconds }) {
//   return (
//     <div>
//       <span>{days} days</span> 
//       <span>{hours} hours</span>
//       <span>{minutes} minutes</span>
//       <span>{seconds} seconds</span>
//     </div>
//   );
// }

const GiveAway = () => {
  let [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    name: 'Subscriber',
    email: '',
    
  });

  const [errors,setErrors]=useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post('/subscribers', formData);
      openModal();
      setFormData({
        name: '',
        email: '',
      });
    } catch (error) {
      console.error(error.response.data.message);
      setErrors(error.response.data.message)
      // alert('Error submitting data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  // const [email, setEmail] = useState('');
 
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if ( email !=='') {
  //     openModal();
  //   }
  // }

  // const [date,setDate]=useState('');
  // const currentTime = new Date();
  // currentTime.setSeconds(currentTime.getSeconds() + 20);
  // const futureTime = currentTime.toISOString();
  const [targetDate, setTargetDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);
  
  const isBetween6and7 = (date) => {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 18, 0, 0);
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 0, 0);
    return date >= start && date < end;
  };
  
  const setTargetTime = () => {
    const currentDate = new Date();
    const targetTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 18, 0, 0);
    if (currentDate.getHours() >= 18 && currentDate.getHours() < 19) {
      setTargetDate(null);
      setCompleted(true);
    } else if (currentDate.getHours() >= 19) {
      targetTime.setDate(targetTime.getDate() + 1);
      setTargetDate(targetTime);
      setCompleted(false);
    } else {
      setTargetDate(targetTime);
      setCompleted(false);
    }
  };
  
  useEffect(() => {
    setTargetTime();
  }, []);
  
  
  useEffect(() => {
    setTargetTime();
    
    const interval = setInterval(() => {
      const currentDate = new Date();
      if (isBetween6and7(currentDate)) {
        setCompleted(true);
      }
    }, 1000);
  
    return () => clearInterval(interval);
   
  }, [targetDate]);
  


  useEffect(() => {


    axiosClient.get('/questions')
      .then(response => {
        const sortedQuestions = response.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        // setDate(sortedQuestions[0].startDate);
        // setTargetDate(sortedQuestions[0].startDate);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  //  console.log("co:"+completed);

  return (
    <>
    <div className="w-[100%] mt-[10rem] md:mt-[4rem] ">
      <div className="bg-inner-bg  bg-contain relative w-full overflow-x-clip">
        {/* Giveaway */}

        <div className="md:h-[257px] md:w-[257px] bg-primary rounded-full flex justify-center items-center absolute left-[-9.5rem] top-[-6rem]">
          <div className="h-[210px] w-[210px] bg-white rounded-full mx-auto"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-[100px] w-[230px] object-cover md:w-[400px]  absolute top-[-2rem]  md:top-[-4.2rem] z-20">
            <img src={ellipse} alt="ellipse" />
          </div>
          <div className="h-[900px] w-[180px] object-cover md:w-[300px] md:h-[284px] absolute top-[-1rem] md:top-[-2rem]  z-20">
            <img src={give} alt="giveaway" />
          </div>
        </div>
       
        <div className="flex flex-col flex-wrap items-center mt-[5rem] " data-aos="fade-up" data-aos-duration="3000">
          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center items-center">
            <div className="flex flex-col  items-center md:items-start">
              {/* <Countdown
              className="flex flex-col w-full flex-wrap md:justify-center items-center"
                  date={new Date("2023-04-18 00:00:55.387451+03")}
                  renderer={renderer}
                /> */}


                <Countdown
                      date={targetDate}
                      renderer={renderCountdown}
                    />
              
                {/* <Countdown className="flex flex-col w-full flex-wrap md:justify-center items-center"
                date={Date.now() + 100000000000}
                renderer={renderer}
              /> */}



                <form onSubmit={handleSubmit}>
                <div className="flex my-7 flex-row md:mt-[4.5rem] justify-center md:justify-start">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    class="rounded-l-xl w-[200px]  md:w-[350px] md:px-6 border-gray-200 shadow-sm md:text-lg bg-white"
                  />
                  <button
                    type="submit"
                    class="rounded-r-xl w-max inline-flex items-center border bg-[#23675A] md:font-bold text-white"
                  >
                    <span class="font-inter text-[25px] px-5 md:px-10 leading-[20px] md:leading-[60px] md:font-bold">
                      {" "}
                      Notify Me{" "}
                    </span>
                  </button>
                  </div>
                  </form>
                  {errors &&
                  <h2 className="text-red-500 font-bold">{errors}</h2>                  
                  }
            </div>
            <div >
              <div className="flex flex-col w-full flex-wrap md:justify-center items-center gap-10">
                  <div className=" flex mb-[4rem] md:-mr-[13rem] mt-[2rem] md:-mt-[8rem]">
                    <img className="w-full  md:h-[450px]" src={giftbox} alt="giftbox" />
                </div>
                {/* <div> */}
                <a
                href={`${completed?'/question':'/early'}`}                
                  class="w-max md:ml-[15.5rem] inline-flex z-9 items-start rounded-xl border bg-[#23675A] font-bold text-white "
                >
                  <span  class="font-inter text-[25px] px-12 leading-[60px] font-bold">
                    {" "}
                    Open Reward{" "}
                  </span>
                </a>
                {/* </div> */}
              </div>
          </div>
          </div>
          
          {/* <div className="flex"> */}
            <div className="flex flex-col mt-[4rem] md:flex-row items-center">
                <div className="w-[150px] md:w-[572px] ">
                  <img src={spoby} alt="sponsored by" />
                </div>
                
                <div className="w-[250px] md:h-[114px] md:w-[356px]  md:ml-[13rem]">
                  <img src={hotmart} alt="hotmart" />
                </div>
              </div>
          </div>
      </div>
    </div>

  
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <Dialog.Panel className="w-full max-w-md p-6 z-100 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
                as="h3"
                className="flex justify-center text-[35px] font-bold leading-[50px] text-gray-900"
            >
               ተመዝግበዋል እናመስግናለን!
            </Dialog.Title>

            <div className="mt-4">
                <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#23675A] border border-transparent rounded-md hover:bg-[#23675A]/80"
                onClick={closeModal}
                >
                Close
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

export default GiveAway;
