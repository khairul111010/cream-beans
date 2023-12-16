import image from "../assets/Cover.jpg";

function Home() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-center text-white p-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to our website!</h1>
        <h2 className="text-lg">Discover our amazing services.</h2>
        <p>Meet our talented team.</p>
      </div>
      <img
        src={image}
        alt="Description"
        className="w-full
       h-[80vh]"
      />
    </div>
  );
}

export default Home;
