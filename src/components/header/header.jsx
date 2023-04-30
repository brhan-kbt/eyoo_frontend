import React, { useEffect, useState } from "react";
import group from "../../assets/Property.png";
import notification from "../../assets/notification.png";
import axiosClient from "../../axios";



const Header = () => {
  
const [contents, setContents] = useState([]);
useEffect(() => {
  axiosClient.get('/contents')
    .then(response => {
      const contentsData = response.data;
      const latestContent = contentsData.reduce((prev, current) => {
        return (prev.updatedAt > current.updatedAt) ? prev : current
      });
      setContents(latestContent);
      console.log(latestContent);
    })
    .catch(error => {
      console.error(error);
    });
}, []);
  return (
   
    <section>
    
    <div class="relative zIndex" >
      <div data-aos="fade-up" data-aos-duration="3000" className="flex md:justify-end z-101 items-center justify-center xs:mr-0 mt-8 md:mr-20 text-[#9B9993] text md:text-[30px] font-bold leading-[30px]">
          GOAL ON YOUTUBE THIS YEAR
        </div>
    </div>
      <div class=" flex max-w-screen px-6 sm:px-8 md:px-8 w-full justify-center h-auto -mt-10">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 w-[100%] h-auto items-center">
          <div  className="col-span-1 overflow-hidden pl-[1.5rem] rounded-lg  md:order-last font-body ">
            <img data-aos="zoom-out-left" data-aos-duration="3000" alt="Party" src={group} class="h-full w-full object-cover z-50" />
          </div>

          <div class="lg:py-5 col-span-1 text-text-blue flex-col xxs:justify-center">
            <h2 data-aos="fade-up" data-aos-duration="3000" class=" font-inter xxs:justify-center text-[50px] font-bold leading-[60px]">
              {contents.daily_quote}
            </h2>

            <a
              href="www.google.com"
              data-aos="fade-up" data-aos-duration="3000"
              class="mt-8 inline-flex items-center  rounded-xl border bg-[#23675A] px-8 py-3 font-bold hover:bg-[#DCDCDC] hover:border-[#23675a] hover:text-[#23675a] text-white focus:outline-none focus:ring "
            >
              <span class="flex text-[20px] font-inter md:text[-30px] lg:text-[35px] leading-[42px] font-bold mr-[15px] hover:text-[#23675a] ">
                {" "}
                Subscribe Now{" "}
              </span>
              <img src={notification} alt="logo" className="h-[30px] md:h-[55px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
