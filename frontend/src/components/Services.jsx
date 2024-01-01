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
      "Craft stunning and functional websites tailored to your specifications. Our web development services prioritize high-quality software solutions delivered with speed and efficiency.",
  },
  {
    image: mvp,
    title: "MVP",
    description:
      "Leverage our expertise to swiftly develop your Minimum Viable Product (MVP). Our high-quality software development ensures a rapid and efficient MVP delivery tailored to your unique requirements.",
  },
  {
    image: mobile,
    title: "Mobile App Development",
    description:
      "Create cutting-edge mobile applications that meet your needs. Our mobile app development services prioritize high-quality software solutions delivered with speed and efficiency.",
  },
  {
    image: blockchain,
    title: "Blockchain Development",
    description:
      "Explore the revolutionary world of blockchain technology with our development services. We provide high-quality software solutions with a focus on speed and efficiency in blockchain development.",
  },
  {
    image: aws,
    title: "DevOps",
    description:
      "Improve your development and operational efficiency with our DevOps solutions. We provide high-quality software development services with a commitment to speed and efficiency in DevOps practices.",
  },
  {
    image: ui,
    title: "UI/UX",
    description:
      "Enhance user experiences with our UI/UX design expertise. We provide high-quality software development services with a focus on creating intuitive and efficient user interfaces.",
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
