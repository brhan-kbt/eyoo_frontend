import React from "react";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/tiktok.png";
import Facebook from "../../assets/facebook.png";
import Telegram from "../../assets/telegram.png";
import Memento from "../../assets/emoji-eye-glass1.png";

const Footer = () => {
  return (
    <div className="relative bg-footer-bg  mx-[4rem] mb-[2.5rem] mt-[5rem] flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between w-full pt-[2rem] mx-[4rem]">
        <div className="flex flex-col  items-center  md:flex-row pl-1rem ml-[-5rem]">
          <p className="text-[30px] text-[#494949] md:mr-2">Follow Me</p>
         
         <div className="flex">
          <img src={Youtube} alt="Youtube" className="h-[37px] w-[37px] mr-2" />
          <img
            src={Instagram}
            alt="Instagram"
            className="h-[37px] w-[37px] mr-2"
          />
          <img src={Tiktok} alt="Tiktok" className="h-[37px] w-[37px] mr-2" />
          <img
            src={Facebook}
            alt="Facebook"
            className="h-[37px] w-[37px] mr-2"
          />
          <img
            src={Telegram}
            alt="Telegram"
            className="h-[37px] w-[37px] mr-2"
          />
          </div>
        </div>
        <div className="flex flex-col  md:flex-row  items-center mt-[3rem] ml-[-5rem]">
          <p className="text-[30px] text-[#494949]">Memento Mori</p>
          <img
            src={Memento}
            alt="Memento-Mori"
            className="h-[113px] w-[123px] ml-[-1rem]"
          />
        </div>
      </div>
      <div className="mx-auto text-[#000]">copyright@2015 Eyoo Company</div>
    </div>
  );
};

export default Footer;
