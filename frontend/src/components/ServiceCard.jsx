const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg px-10 pb-10 pt-14 shadow transition-all duration-100 ease-in-out flex flex-col items-center gap-4">
      <div>
        <img src={image} alt="" srcSet="" className="h-14 w-auto" />
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
