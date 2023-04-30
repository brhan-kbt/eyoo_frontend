import React from "react";
import Card from "../common/card";
import project from "../../assets/project.png";


const Projects = () => {
  return (

  <div className="relative ">

  <div class="inset-0 mb-[225px] -mt-[300px] md:-mb-[150px] md:mt-0 flex items-center justify-center ">
    <img class="h-28 Zindex " src={project} alt="Project" />
  </div>

   <div className="grid grid-cols-2 grid-rows-2 gap-4 z-0">
      <div className=" h-[1000px] row-span-2 rounded-full bg-yellow_chips_two blur-2xl z-0">
      </div>
      <div className="rounded-full h-[1000px] bg-white blur-2xl z-0">
      </div>
     </div> 
 


  <div className="my-[3rem]  w-full -mt-[2200px] m:-mt-[1800px] ">
   
    <div className="flex flex-wrap justify-center gap-20  justify-items-center">
      <div data-aos="zoom-out-right" data-aos-duration="3000" className="h-[493px] z-50 rounded-[20px] w-[328px]" ><Card title={0} /></div>
      <div data-aos="fade-up" data-aos-duration="3000" className="h-[555px] z-50 w-[328px] md:w-[369px]" ><Card title={1}/></div>
      <div data-aos="zoom-out-left" data-aos-duration="3000" className="h-[493px] z-50 w-[328px]"><Card title={0}/></div>
    </div>
  </div>
</div>



  );
};

export default Projects;
