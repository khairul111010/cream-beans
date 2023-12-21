import blockchainlogo from "../assets/Blkchain.png";
import PropTypes from "prop-types";
import webdev from "../assets/Web.jpg";
import app from "../assets/App.png";
import UI from "../assets/UI.png";
import QA from "../assets/QA.jpg";
import DEV from "../assets/Dev.svg";
import web from "../assets/web.svg";
import mvp from "../assets/mvp.svg";
import mobile from "../assets/mobile.svg";
import blockchain from "../assets/blockchain.svg";
import aws from "../assets/aws.svg";
import ui from "../assets/ui.svg";



const Services = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 mt-4 gap-8 md:max-w-[80%] max-w-[90%] mx-auto overflow-hidden">
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={web} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">Web Development</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={mvp} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">MVP</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={mobile} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">Mobile App Development</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={blockchain} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">Blockchain Development</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={aws} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">DevOps</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
      <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
        <div>
          <img src={ui} alt="" srcset="" className="h-14 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-2xl font-semibold mb-2">UI/UX</h1>
          <p className="text-center">We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency</p>
        </div>
      </div>
    </div>
  );
};
export default Services;
