import React from "react";
import Header from "../header/header";
import GiveAway from "../giveaway/giveaway";
import TrendingVideos from "../trending-videos/trending-videos";
import Projects from "../projects/projects";
import Winners from "../winners/winners";
import Ideas from "../ideas/ideas";
import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";


function Home() {
  return (
    < >
    <Navigation/>
    <div className="flex flex-col bg-[#DCDCDC] overflow-hidden">
      <Header />
      <section id="giveaway">
        <GiveAway />
      </section>
      <section id="videos">
        <TrendingVideos />
      </section>

      <Projects />
      <Winners />
      <Ideas /> 
    </div>
    <section id="socials">
      <Footer/>
    </section>
    </>
  );
}

export default Home;
