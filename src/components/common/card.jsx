import tiktok from "../../assets/tiktok.png";
import { VscArrowRight } from "react-icons/vsc";
const Card = (props) => {
 
  return (
    <div class={`flex ${props.title===1?'md:h-[521px] -mt-[1.5rem]':''} `}>
      <div class={`bg-white ${props.title===1?'rounded-t-3xl ':'rounded-t-3xl md:rounded-t-[100px]'} rounded-b-xl shadow-2xl`}>
        <div className="flex justify-center py-5">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              src={tiktok}
              alt=""
              className="h-[80px] w-[80px] mx-auto my-auto"
            />
          </a>
        </div>
        <div class="flex flex-col p-6 items-center">
          <h5 class="text-gray-900  font-medium mb-2 text-6xl">50k </h5>
          {props.title===1 &&
          <h5 class="text-gray-900  font-medium mb-2 text-6xl">አንድ አመት</h5>
          }
          <p class="text-gray-700 text-base mb-16">
            ይህ 1 አመት የተሰኘው የYoutube ቻናላችን ነው በዚ ቻናል በየቀኑ ለ365 ቀናት ቪዲዮ ይለቀቃል ፡፡
            በየቀኑ ዘና ፈታ የሚያረጉ ቪዲዮ እና ሽልማቶች አሉን ፡ይህ ቻናል ከ365 ቀናት ቦሃላ ከYoutube ላይ
            ሰለሚጠፋ ይህ እድል ሳያመልጣቹ ይህን ታሪካዊ ቻናል ሰብስክራይብ በማረግ ቤተሰብ ይሁኑ::
          </p>
          <a
            href="www.google.com"
            className={`inline-flex ${props.title===1?'-mt-[1.5rem]':''} items-center rounded-full border bg-[#FFD154] px-8 py-1 font-bold text-black focus:outline-none focus:ring `}
          >
            <span className="font-inter text-[20px] leading-[42px] font-bold mr-5">
              FOLLOW NOW
            </span>
            <div className="text-white h-[40px] w-[40px]">
              <VscArrowRight className="h-full w-full" />
            </div>
          </a>
        </div>
      </div>
    </div>
    
  );
};


export default Card;
