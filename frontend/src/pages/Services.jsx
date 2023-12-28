// Services.js
import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import {
  FaCubes,
  FaMobileAlt,
  FaShieldAlt,
  FaPalette,
  FaCheckDouble,
  FaTools,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Blockchain Development",
    description: (
      <>
        <p>
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Blockchain development tailored to your requirements.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Responsive and innovative solutions.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaCubes,
    imageUrl:
      "https://www.chainalysis.com/wp-content/uploads/2022/02/bloggraphic-blockchains-01-1-948x517.png",
  },
  {
    id: 2,
    title: "Web Development",
    description: (
      <>
        <p>
          We create modern and responsive web projects tailored to your needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Tailored solutions for your specific requirements.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Responsive and user-friendly web development.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    imageUrl:
      "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?cs=srgb&dl=pexels-pixabay-276452.jpg&fm=jpg",
  },

  {
    id: 3,
    title: "Mobile App Development",
    description: (
      <>
        <p>
          We create modern and responsive mobile applications tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Tailored solutions for your specific mobile app requirements.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Responsive and user-friendly mobile app development.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaMobileAlt,
    imageUrl:
      "https://images.spiceworks.com/wp-content/uploads/2023/10/12122423/mobile-app-development.jpg",
  },

  {
    id: 4,
    title: "Cyber Security",
    description: (
      <>
        <p>
          We provide modern and robust cybersecurity solutions tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Comprehensive security measures to safeguard your digital assets.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Proactive threat detection and response strategies.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaShieldAlt,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygKl2VfctjD2JmH3gs2zfRfOfibTCWwKMUg&usqp=CAU",
  },

  {
    id: 5,
    title: "UI/UX Design",
    description: (
      <>
        <p>
          We create modern and responsive UI/UX designs for a variety of
          projects.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Innovative design solutions that captivate your audience.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            User-centric interfaces for seamless interactions.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),

    icon: FaPalette,
    imageUrl:
      "https://www.exposit.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Blog_cover-109-1024x386.jpeg.webp",
  },
  {
    id: 6,
    title: "Testing & QA",
    description: (
      <>
        <p>
          We specialize in comprehensive testing and quality assurance for
          diverse projects, ensuring optimal performance and reliability.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Rigorous testing methodologies for robust project outcomes.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Quality assurance protocols tailored to project requirements.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaCheckDouble,
    imageUrl: "https://blog.pbbg.com/content/images/2021/01/QA-service.png",
  },
  {
    id: 7,
    title: "DevOps Service",
    description: (
      <>
        <p>
          We provide modern and responsive DevOps services tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Customized solutions for your business.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Cutting-edge technology and expertise.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaTools,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const handleServiceClick = (service) => {
    setSelectedService(selectedService === service ? null : service);
  };

  useEffect(() => {
    // Set the initial selected service to "BlockChain Development"
    setSelectedService(servicesData[0]);
  }, []);

  return (
    <div className="container mx-auto mt-8 mb-10 text-center bg-cover bg-center relative">
      <h1
        className="text-4xl font-bold mb-8 text-white"
        style={{
          backgroundImage:
            'url("https://www.shutterstock.com/image-photo/business-technology-target-set-goals-260nw-1859956336.jpg")',
        }}
      >
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="p-2 border rounded transition-all hover:bg-red-100 hover:shadow-lg"
          >
            <button
              className={`text-sm font-bold focus:outline-none ${
                selectedService === service ? "text-red-500" : ""
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service.title}
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="mt-8 flex justify-center items-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <div className="w-1/2 pr-4">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedService.title}
                </h2>
                <p>{selectedService.description}</p>
              </div>
              <div className="w-1/2">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  className="rounded-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
