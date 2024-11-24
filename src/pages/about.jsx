import React from "react";
import Abounav from "../components/abouts page/abounav";
import "../components/abouts page/aboutnav.css";
import MeetTheFounders from "../components/abouts page/meetTheFounders";
import VideoPlayer from "../components/abouts page/aboutvedio";
import Footer from "../components/home/footer";
import "../components/home/footer.css";
import AboutFooterhero from "../components/abouts page/aboutsfooterhero";
import "../components/abouts page/aboutsfooterhero.css";
import Trusthero from "../components/home/trusthero";
import "../components/home/trusthero.css";
import Abouttest from "../components/abouts page/abouttest";

export default function About() {
  return (
    <div>
      <Abounav />
      <Abouttest />
      <Trusthero />
      <MeetTheFounders />
      <VideoPlayer />
      <AboutFooterhero />
      <Footer />
    </div>
  );
}
