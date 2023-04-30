import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosClient from "../../axios";
import WinnerCard from "../common/winner-card";

const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    axiosClient.get('/winners')
      .then(response => {
        setWinners(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  const handleSeeMore = () => {
    setDisplayCount(displayCount + 4);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-text-blue text-[60px] md:text-[100px] drop-shadow-text-shadow font-bold tracking-tighter mb-[6rem]">
        WINNERS
      </div>
      <div class="flex flex-wrap justify-center px-10">
        {winners.slice(0, displayCount).map((data) => {
          return (
            <div data-aos="fade-up" data-aos-duration="3000" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
              <WinnerCard data={data}/>
            </div>
          );
        })}
      </div>
      {displayCount < winners.length && 
        <button onClick={handleSeeMore} className="text-text-blue z-50 mt-8 mb-16 py-2 px-4 rounded-full border border-text-blue hover:bg-text-blue hover:text-white transition-colors duration-300">
          See More
        </button>
      }
    </div>
  );
};

export default Winners;


   {/* <div data-aos="fade-up" data-aos-duration="3000" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
          <WinnerCard />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
          <WinnerCard />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
          <WinnerCard />
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
          <WinnerCard />
        </div> */}
