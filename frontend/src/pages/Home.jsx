import image from "../assets/gul.jpg";
// import ReactTyped from "react-typed";
function Home() {
  return (
    <div className="h-[1300px] relative">
      <div className=" relative">
        <img src={image} className="max h-1/3" alt="Cover Image" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Welcome to our Website</h1>
          <p className="text-lg">Explore and Discover Amazing Services</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
