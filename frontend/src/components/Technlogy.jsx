import JS from "../assets/JS.png";
import Next from "../assets/next.svg";
import Re from "../assets/React.png";
import node from "../assets/node.png";
import Sol from "../assets/SOL.png";
import ang from "../assets/angular.png";
import php from "../assets/PHP.png";
import rby from "../assets/Ruby.png";
import lrv from "../assets/laravel.png";

const Technlogy = () => {
  return (
    <>
      <div className="flex items-center justify-center p-10  bg-coffee">
        <h1 className="font-bold text-4xl">Technlogy We Use</h1>
      </div>
      <div className="flex  relative overflow-x-hidden animate-marquee whitespace-nowrap items-center p-10 justify-center space-x-4">
        <div className="h-35  w-36">
          <img src={JS} alt="" className="rounded-full" />
        </div>
        <div className=" h-35  w-36">
          <img src={Next} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36  ">
          <img src={Re} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={node} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={Sol} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={ang} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36  ">
          <img src={php} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={rby} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={lrv} alt="" className="rounded-full" />
        </div>
      </div>

      <div className="flex absolute top-0 py-12  animate-marquee2 whitespace-nowrap items-center p-10 justify-center space-x-4">
        <div className="h-35  w-36">
          <img src={JS} alt="" className="rounded-full" />
        </div>
        <div className=" h-35  w-36">
          <img src={Next} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36  ">
          <img src={Re} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={node} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={Sol} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={ang} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36  ">
          <img src={php} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={rby} alt="" className="rounded-full" />
        </div>
        <div className="h-35  w-36 ">
          <img src={lrv} alt="" className="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Technlogy;
