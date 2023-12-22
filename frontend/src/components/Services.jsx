import aws from "../assets/aws.svg";
import blockchain from "../assets/blockchain.svg";
import mobile from "../assets/mobile.svg";
import mvp from "../assets/mvp.svg";
import ui from "../assets/ui.svg";
import web from "../assets/web.svg";
import ServiceCard from "./ServiceCard";

const cards = [
  {
    image: web,
    title: "Web Development",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
  {
    image: mvp,
    title: "MVP",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
  {
    image: mobile,
    title: "Mobile App Development",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
  {
    image: blockchain,
    title: "Blockchain Development",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
  {
    image: aws,
    title: "DevOps",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
  {
    image: ui,
    title: "UI/UX",
    description:
      "We provide high quality software development at your need. You will be able to develop any kind software with fast pace and efficiency",
  },
];

const Services = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-4 gap-8 md:max-w-[80%] max-w-[90%] mx-auto">
      {cards.map((item, index) => {
        return (
          <ServiceCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
};
export default Services;
