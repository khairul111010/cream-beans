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
    title: "BlockChain Development",
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
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
          </li>
          {/* Add more list items with icons as needed */}
        </ul>
      </>
    ),
    icon: FaPalette,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    id: 6,
    title: "Testing & QA",
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
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
          We create modern and responsive Blockchain projects tailored to your
          needs.
        </p>
        <ul className="list-none pl-4">
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            One line of notes here.
          </li>
          <li className="flex items-center mb-2">
            <IconContext.Provider value={{ className: "text-green-500 mr-2" }}>
              <FaCheckDouble />
            </IconContext.Provider>
            Another line of notes here.
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
