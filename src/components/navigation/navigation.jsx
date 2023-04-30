import  React,{useState} from "react";
import logo from "../../assets/eyoologo.png";
// eslint-disable-next-line
import cloud from "../../assets/Cloud2.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="relative z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-around h-16">
          <div className="flex items-center">
            <a href="/" className="text-[#000] font-bold">
              <img src={logo} className='h-20' alt="" srcset="" />
            </a>
          </div>
          <div className="hidden sm:block">
            <div className="ml-4 flex items-center">
               
              <a href="/" className="text-[#000] font-bold text-lg ml-6">
                HOME
              </a>
              <a href="#giveaway" className="text-[#000] font-bold text-lg ml-6">
                GIVEAWAY
              </a>
              <a href="#videos" className="text-[#000] font-bold text-lg ml-6">
                VIDEOS
              </a>
              <a href="#socials" className="text-[#000] font-bold text-lg ml-6">
                SOCIALS
              </a>
              {/* <a href="/question" className="text-[#ff3737] font-bold text-lg ml-6">
                QUESTIONS
              </a> */}
            </div>
          </div>
          <div>
          <div class="relative z-50">
            <div >
              <div class="">
                <img src={cloud} alt="" className="hidden md:block h-64 w-64 " />
              </div>
            </div>
          </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#000] inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-[#23675A] focus:outline-none focus:bg-[#23675A] focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="fixed top-0 left-0 bottom-0 flex justify-between flex-col w-1/2 max-w-sm py-6 px-6 bg-[#DCDCDC] overflow-y-auto">
         <div className="flex flex-col justify-between">
            <a href="#HOME" className="block text-[#000] font-bold text-lg py-2">
              HOME
            </a>
            <a href="#GIVEAWAY" className="block text-[#000] font-bold text-lg py-2">
              GIVEAWAY
            </a>
            <a href="#VIDEOS" className="block text-[#000] font-bold text-lg py-2">
              VIDEOS
            </a>
            <a href="#SOCIALS" className="block text-[#000] font-bold text-lg py-2">
              SOCIALS
            </a>
            <a href="/question" className="text-[#ff3737] font-bold text-lg block py-2">
                QUESTIONS
              </a>
          </div>
          <div>
          <a href="/" className="bottom-0">
                  <img src={logo} className='h-20' alt="" srcset="" />
          </a>
          </div>
        </div>
      </div>
   
   
    </nav>
    
  );
};

export default Navigation;

