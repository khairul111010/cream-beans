import angular from "../assets/angular.svg";
import laravel from "../assets/laravel.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import nestjs from "../assets/nestjs.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import reactjs from "../assets/reactjs.svg";
import wordpress from "../assets/wordpress.svg";
import TechCard from "./TechCard";

const list = [
  {
    image: angular,
    title: "Angular Js",
  },
  {
    image: laravel,
    title: "Laravel",
  },
  {
    image: mongodb,
    title: "MongoDB",
  },
  {
    image: mysql,
    title: "MySQL",
  },
  {
    image: nestjs,
    title: "Nest JS",
  },
  {
    image: node,
    title: "Node JS",
  },
  {
    image: postgresql,
    title: "PostgreSQL",
  },
  {
    image: reactjs,
    title: "React JS",
  },
  {
    image: wordpress,
    title: "Wordpress",
  },
  {
    image: angular,
    title: "Angular Js",
  },
  {
    image: laravel,
    title: "Laravel",
  },
  {
    image: mongodb,
    title: "MongoDB",
  },
  {
    image: mysql,
    title: "MySQL",
  },
  {
    image: nestjs,
    title: "Nest JS",
  },
  {
    image: node,
    title: "Node JS",
  },
  {
    image: postgresql,
    title: "PostgreSQL",
  },
  {
    image: reactjs,
    title: "React JS",
  },
  {
    image: wordpress,
    title: "Wordpress",
  },
];
const Stacks = () => {
  return (
    <div class="relative h-24 overflow-x-hidden py-4 my-4">
      <ul class="absolute flex min-w-[200%] justify-around animate-marqueeToLeft hover:pause">
        {list.map((item, index) => {
          return <TechCard key={index} image={item.image} title={item.title} />;
        })}
      </ul>
    </div>
  );
};

export default Stacks;
