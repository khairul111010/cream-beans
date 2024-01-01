import Leaders from "../components/Leaders";
import dipu from "../assets/leaders/dipu.png";
import piash from "../assets/leaders/piash.png";
import shamim from "../assets/leaders/shamim.png";
const leaders = [
  {
    name: "Abdur Rahman",
    position: "Chairman",
    link: "https://www.linkedin.com/in/mdabdurrahmann",
    image: shamim,
  },
  {
    name: "Khairul Hasan",
    position: "CEO",
    link: "https://www.linkedin.com/in/imkhairulhasan",
    image: dipu,
  },
  {
    name: "Piash Tanjin",
    position: "CTO",
    link: "https://www.linkedin.com/in/tanjinalam",
    image: piash,
  },
];

function About() {
  return (
    <div className="h-screen w-full">
      <div className="font-bold text-4xl text-center py-8">Our Leaders</div>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-between max-w-[80%] mx-auto">
        {leaders.map((i, index) => (
          <Leaders
            key={index}
            name={i.name}
            image={i.image}
            position={i.position}
            link={i.link}
          />
        ))}
      </div>
      <div className="md:text-3xl text-center py-16 italic">
        Our goal is to help your business{" "}
        <span className="font-bold text-primary md:px-2">GROW</span> by providing
        you software that will make your work faster and easier.
      </div>
    </div>
  );
}

export default About;
