import React from "react";
import winnerPic from "../../assets/eyasu.png";

const WinnerCard = ({data}) => {
  return (
    <div>
        <figure class="lg:flex bg-slate-100 rounded-xl p-4 md:p-5 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-30 md:h-auto md:rounded-lg rounded-full mx-auto" src={data.photo} alt="" />
          <div class="pt-6 md:p-4  text-center space-y-4">
              <p class="text-lg font-medium">
              {data.name}
              <p>
                Win <span className="text-yellow_chips font-bold">{data.cardBirr} card</span>
              </p>
              </p>
            <p className="font-medium">
              {data.email}
            </p>
          </div>
        </figure>
    </div>
  );
};

export default WinnerCard;
