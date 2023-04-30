import logo from "../../assets/eyoologo.png";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios";

export default function Question() {

   let [isOpen, setIsOpen] = useState(false)

   function closeModal() {
     setIsOpen(false)
   }

   function openModal() {
     setIsOpen(true)
   }
//    const [name, setName] = useState('');
//    const [phone, setPhone] = useState('');
  
//    const handleSubmit = (event) => {
//      event.preventDefault();
//      if ( name !=='' && phone !=='') {
//        openModal();
//      }
//    }
 const router=useNavigate();
    useEffect(() => {
        const now = new Date();
        const hour = now.getHours();

        if (hour < 18 || hour >= 19) {
            router('/early');
        }
    }, []);



   const [questions, setQuestions] = useState([]);

   useEffect(() => {
    axiosClient.get('/questions')
      .then(response => {
        const activeQuestions = response.data.filter(question => question.isActive);
        setQuestions(activeQuestions);
        console.log(activeQuestions);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  



  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      phone_number: phone,
      name: name,
      answers: answers,
    };
    console.log(data);
    axiosClient
      .post("/response", data)
      .then((response) => {
        console.log(response.data.message);
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAnswerChange = (event, id) => {
    const index = answers.findIndex((answer) => answer.id === id);
    if (index === -1) {
      setAnswers([...answers, { id: id, answer: event.target.value }]);
    } else {
      const newAnswers = [...answers];
      newAnswers[index] = { id: id, answer: event.target.value };
      setAnswers(newAnswers);

    //   console.log(answers);
    }
  };

  return (
<>
    <Navigation/>
    <div className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="flex justify-center">
                <img className="h-32" src={logo} alt="" srcset="" />
              </div>
              <h1 className="mt-2 text-3xl flex justify-center font-bold tracking-tight text-gray-900 sm:text-4xl">ከስር ያሉትን ጥያቄዎች ይመልሱ</h1>
                
              {questions.map((question, index) => (
                <ul class="font-medium ">
                    <p className="mt-6 text-[35px] leading-8 text-gray-700 mb-5">
                       {question.question}
                    </p>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input 
                                id={question.choice_a} 
                                type="radio" 
                                onChange={(event) => handleAnswerChange(event, question.id)}
                                value={question.choice_a}
                                name={question.question} class="w-9 h-9 "
                                />

                                <label for={question.choice_a} class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">{question.choice_a}</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input 
                                id={question.choice_b} 
                                type="radio" 
                                onChange={(event) => handleAnswerChange(event, question.id)}
                                value={question.choice_b}
                                name={question.question} class="w-9 h-9 "
                                />

                                <label for={question.choice_b} class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">{question.choice_b}</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input 
                                id={question.choice_c}
                                type="radio" 
                                value={question.choice_c}
                                onChange={(event) => handleAnswerChange(event, question.id)}
                                name={question.question} class="w-9 h-9 "
                                />

                                <label for={question.choice_c} class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">{question.choice_c}</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input 
                                id={question.choice_d} 
                                type="radio" 
                                value={question.choice_d}
                                onChange={(event) => handleAnswerChange(event, question.id)}
                                name={question.question} class="w-9 h-9 "
                                />

                                <label for={question.choice_d} class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">{question.choice_d}</label>
                            </div>
                        </li>
                        {/* <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q2a2" type="radio" value="" name="q1" class="w-9 h-9"/>
                                <label for="q2a2" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">2</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q3a3" type="radio" value="" name="q1" class="w-9 h-9"/>
                                <label for="q3a3" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">3</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q4a4" type="radio" value="" name="q1" class="w-9 h-9"/>
                                <label for="q4a4" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">4</label>
                            </div>
                        </li> */}
                </ul>
              ))}
                {/* <ul class="font-medium ">
                    <p className="mt-6 text-[35px] leading-8 text-gray-700 mb-5">
                        2. የመጀመሪያው ተጠቃቂ ስም ማን ነው?
                    </p>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q2a1" type="radio" value="" name="q2" class="w-9 h-9 "/>
                                <label for="q2a1" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">እዩ</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q2a2" type="radio" value="" name="q2" class="w-9 h-9"/>
                                <label for="q2a2" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">ቤቢ</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q2a3" type="radio" value="" name="q2" class="w-9 h-9"/>
                                <label for="q2a3" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">ሄልን</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q2a4" type="radio" value="" name="q2" class="w-9 h-9"/>
                                <label for="q2a4" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">ብሩኪ</label>
                            </div>
                        </li>
                </ul>

                <ul class="font-medium ">
                    <p className="mt-6 text-[35px] leading-8 text-gray-700 mb-5">
                    3. በዛሬ ቪዲዮ ላይ የማንን ታዋቂ ሰው ስም ጠራው?
                    </p>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="lq3a1" type="radio" value="" name="q3" class="w-9 h-9 "/>
                                <label for="lq3a1" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">MIKO MIKE</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q3a2" type="radio" value="" name="q3" class="w-9 h-9"/>
                                <label for="q3a2" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">ABRELO</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q3a3" type="radio" value="" name="q3" class="w-9 h-9"/>
                                <label for="q3a3" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">ESHETU MELESE</label>
                            </div>
                        </li>
                        <li class="w-full ">
                            <div class="flex items-center pl-3">
                                <input id="q3a4" type="radio" value="" name="q3" class="w-9 h-9"/>
                                <label for="q3a4" class="w-full py-3 ml-2 text-l font-medium text-gray-900 dark:text-gray-300">NEBIL NUR</label>
                            </div>
                        </li>
                </ul> */}

                <form onSubmit={handleSubmit}>
           
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        id="full-name"
                        autoComplete="given-name"
                        placeholder="ሙሉ ስም"
                        className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <div className="mt-2">
                        <input
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                        id="phone"
                        placeholder="ስልክ"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                
                <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#FFD154] mt-6 px-3 py-2 text-sm font-semibold text-white hover:bg-[#FFD154]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                SEND
              </button>

            </div>
            </form>

        </div>
      </div>
    </div>
    <Footer/>

    
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
            <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
                as="h3"
                className="flex justify-center text-[35px] font-bold leading-[50px] text-gray-900"
            >
                መልስዎ ተልኮአል!
            </Dialog.Title>
            <div className="mt-2">
                <p className="flex justify-center text-[30px] text-gray-500">
                አሸናፊዎችን  ነገ ጠዋት 3፡00 እናሳውቃለን
                </p>
            </div>

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

  )
}



