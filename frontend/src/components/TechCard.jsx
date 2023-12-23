const TechCard = ({ image, title }) => {
  return (
    <li className="font-bold px-3 flex flex-col items-center justify-center">
      <div>
        <img src={image} alt={title} className="h-10 w-auto" />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </li>
  );
};

export default TechCard;
