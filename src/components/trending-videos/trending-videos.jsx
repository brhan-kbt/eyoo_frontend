/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React, { useEffect, useState } from "react";
import cloud from "../../assets/Cloud.png";
import halfArrow from "../../assets/halfArrow_.png";
import axiosClient from "../../axios";

const TrendingVideos = () => {
  
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
    <section className="mt-[5rem] mx-[3rem] mb-[14rem] z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
        <div className="relative h-80" >
          {/* <video src=></video> */}
            <iframe className="w-full z-30 h-full object-contain absolute inset-0"  src={contents.video_link_1} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>         
        </div>
        
        <div className="relative h-80" >
            <iframe className="w-full z-30 h-full object-contain absolute inset-0"  src={contents.video_link_2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>         
        </div>
      </div>
      <div className="relative m:h-[250px] m:w-[500px] mx-auto ">
        <img src={cloud} alt="cloud" className="h-[600px] -mt-[19rem] z-0" />
        <img src={halfArrow} alt="halfArrow" className="h-[100px] m:h-[200px] absolute top-0 ml-[9.2rem] mt-[18rem] m:mt-[16rem] left-0 z-10" />
      </div>

    </section>
  );
};

export default TrendingVideos;
