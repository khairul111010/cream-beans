import { FaLinkedin } from "react-icons/fa";

const Leaders = ({ name, position, link, image }) => {
  return (
    <div className="rounded-lg shadow-md flex flex-col items-center gap-2">
      <div>
        <img src={image} alt="" className="md:h-30 md:w-30 h-15 w-15 object-cover rounded-full"/>
      </div>
      <div className="text-3xl">
        {name}
      </div>
      <div className="italic font-medium text-gray-800 text-lg">
       - {position}
      </div>
      <div className="py-4">
        <a href={link}><FaLinkedin className="text-xl"/></a>
      </div>
    </div>
  );
};

export default Leaders;
