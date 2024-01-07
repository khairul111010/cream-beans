import IndustryCard from "./IndustryCard";
import ecommerce from '../assets/ecommerce.svg'
import fintech from '../assets/fintech.svg'
import agriculture from '../assets/agriculture.svg'
import health from '../assets/health.svg'
import clothing from '../assets/clothing.svg'
import restaurant from '../assets/restaurant.svg'
import dental from '../assets/dental.svg'
import blockchain from '../assets/blockchain.svg'
import ai from '../assets/ai.svg'
const initialNodes = [
  {
    image: ecommerce,
    title: "E-commerce",
    description:
      "Collaboratively gathering customer needs, assessing scope, and developing project requirements.",
  },
  {
    image: fintech,
    title: "Fintech",
    description:
      "Settling on conditions, parameters, and agreements before starting a project.",
  },
  {
    image: agriculture,
    title: "Agriculture",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: health,
    title: "Health",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: clothing,
    title: "Clothing",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: restaurant,
    title: "Restaurant",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: dental,
    title: "Dental",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: blockchain,
    title: "Blockchain",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
  {
    image: ai,
    title: "Artificial Intellegence",
    description:
      "Developing interactive models and visual concepts to describe the functioning and organization of the software.",
  },
];
const Industry = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-0 mt-4">
      {initialNodes.map((item) => {
        return <IndustryCard data={item} />;
      })}
    </div>
  );
};

export default Industry;
