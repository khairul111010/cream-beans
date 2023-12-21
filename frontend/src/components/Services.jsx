import blockchainlogo from "../assets/Blkchain.png";
import PropTypes from "prop-types";
import webdev from "../assets/Web.jpg";
import app from "../assets/App.png";
import UI from "../assets/UI.png";
import QA from "../assets/QA.jpg";
import DEV from "../assets/Dev.svg";

function Card1({ heading, description, img, className }) {
  return (
    <div
      className={`flex gap-4 rounded-xl shadow-sm p-6 ${className} transform transition-transform hover:scale-105`}
    >
      <div className="min-w-max">
        {/* Use the img prop for the image */}
        <img
          src={img}
          alt="Icon"
          className="max-w-full h-auto w-12 text-[#DDA10C]" // Adjust the width (w-12) as needed
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="leading-8 text-gray-500 font-normal">{description}</p>
      </div>
    </div>
  );
}

Card1.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Services = () => {
  return (
    <>
      <div className="flex items-center justify-center   bg-coffee">
        <h1 className="font-bold text-4xl">What we do?</h1>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 bg-white p-3 sm:p-8">
        <Card1
          className="bg-[#fcf4ff]"
          heading="Blockchain Development"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={blockchainlogo}
        />
        <Card1
          className="bg-[#fefaf0]"
          heading="Web Development"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={webdev}
        />
        <Card1
          className="bg-[#fff4f4]"
          heading="Mobile App Development"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={app}
        />
        <Card1
          className="bg-[#f3faff]"
          heading="UI/UX"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={UI}
        />
        <Card1
          className="bg-[#fff4f4]"
          heading="Testing & QA"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={QA}
        />
        <Card1
          className="bg-[#f3faff]"
          heading="DevOps"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
          img={DEV}
        />
      </div>
    </>
  );
};
export default Services;
