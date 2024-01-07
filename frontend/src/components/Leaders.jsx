import { FaLinkedin } from "react-icons/fa";

const Leaders = ({ name, position, link, image }) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col items-center gap-2 px-4 py-2">
      <div>
        <img src={image} alt="" className="md:h-64 md:w-64 h-48 w-48 object-cover rounded-full"/>
      </div>
      <div className="md:text-xl text-base">
        {name}
      </div>
      <div className="italic font-medium text-gray-800 ">
       - {position}
      </div>
      <div className="py-4">
        <a href={link}><FaLinkedin className="text-xl"/></a>
      </div>
    </div>
  );
};

export default Leaders;
