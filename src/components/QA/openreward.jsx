import logo from "../../assets/eyoologo.png";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import axios from "axios";
import axiosClient from "../../axios";

export default function Early() {

   let [isOpen, setIsOpen] = useState(false)
   const [formData, setFormData] = useState({
    name: 'Subscriber',
    email: '',
    
  });

  const [errors,setErrors]=useState('');
   function closeModal() {
     setIsOpen(false)
   }

   function openModal() {
     setIsOpen(true)
   }
  //  const [email, setEmail] = useState('');
 
  //  const handleSubmit = (event) => {
  //    event.preventDefault();
  //    if ( email !=='') {
  //      openModal();
  //    }
  //  }
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
      setErrors(error.response.data.message);

      // alert('Error submitting data');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
              <div className="relative isolate overflow-hidden px-6 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                  <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        
                        <h3 className="mt-2 text-3xl flex justify-center font-bold tracking-tight text-[#34A187] sm:text-4xl"> ሲደርስ አሳውቁኝ!</h3>
                      
                          </div>
                          <div className="flex flex-col  justify-center items-center">
                            
                            {errors &&
                            <h2 className="text-red-500 font-bold">{errors}</h2>                            
                            }

                            <form onSubmit={handleSubmit}>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              name='email'
                              required
                              id="UserEmail"
                              placeholder="Enter Your Email Address"
                              class="rounded-xl md:w-[350px] px-6 border-gray-200 shadow-sm text-lg bg-white"
                            />
                            <button
                            type="submit"
                            class="rounded-xl mt-3 w-max border bg-[#23675A] font-bold text-white"
                            >
                              <span 
                              
                              class="font-inter text-[25px] px-10 leading-[50px] font-bold">
                                {" "}
                                
                                Notify Me{" "}
                              </span>
                            </button>
                            </form>

                            </div>
                      </div>
                      
                </div>
              
 

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
                BACK TO HOME
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



