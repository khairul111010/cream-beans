import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Clutch from "../assets/clutch.svg";
import Fiverr from "../assets/fiverr.svg";
import Hero from "../assets/hero.svg";
import Upwork from "../assets/upwork.svg";
import Services from "../components/Services";
import Technlogy from "../components/Technlogy";
const Home = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const heroBannerRef = useRef(null);
  const sublineRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const hasPlayed = JSON.parse(
      sessionStorage.getItem(import.meta.env.VITE_HASPLAYEDHEADLINE)
    );
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      if (!hasPlayed) {
        t1.from(headlineRef.current, {
          xPercent: -100,
          ease: "power4.out",
          delay: 0.3,
        })
          .to(headlineRef.current, {
            zIndex: -50,
          })
          .from([sublineRef.current, buttonRef.current], {
            opacity: 0,
            ease: "power4.out",
            delay: 0.1,
            stagger: 0.6,
            onComplete: function () {
              sessionStorage.setItem(
                import.meta.env.VITE_HASPLAYEDHEADLINE,
                true
              );
            },
          });

        t2.from(heroBannerRef.current, {
          opacity: 0,
          ease: "power4.out",
          delay: 0.4,
        });
      }
    }, [heroRef]);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="max-w-[90%] flex items-center mx-auto md:grid grid-cols-2 md:max-w-[80%] overflow-hidden content-center py-4">
        <div
          ref={heroRef}
          className="flex flex-col justify-center gap-6 flex-grow"
        >
          <h1
            ref={headlineRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            We{" "}
            <span className="font-bold text-primary">
              develop, fix <span className="font-normal text-black">&</span>{" "}
              maintain
            </span>{" "}
            web and mobile application softwares for your{" "}
            <span className="font-bold text-secondary">business</span>
          </h1>

          <h3 ref={sublineRef}>
            We create strong, user-friendly mobile and web apps to boost your
            business growth and achieve your goals seamlessly
          </h3>

          <button
            ref={buttonRef}
            onClick={() => navigate("/discuss")}
            className="cursor-pointer bg-primary px-3 py-2 text-white hover:bg-white hover:text-secondary border hover:border-secondary rounded-md w-fit"
          >
            Let&apos;s discuss
          </button>
        </div>
        <div ref={heroBannerRef} className="hidden md:block">
          <img
            src={Hero}
            alt="We develop, fix & maintain software for your business"
            title="We develop, fix & maintain software for your business"
          />
        </div>
      </div>
      <Services />
      <Technlogy />
      <div className="md:max-w-[80%] max-w-[90%] mx-auto border py-3 md:py-10 rounded-lg bg-brown-200/20 mb-6">
        <div className="text-center md:text-xl text-sm">
          We are also <span className="text-primary font-bold">available</span>{" "}
          on
        </div>
        <div className="flex items-center justify-center gap-16 rounded-lg md:py-10 md:px-3 py-3 px-7">
          <div>
            <img src={Upwork} alt="" className="h-11 w-auto" />
          </div>
          <div>
            <img src={Clutch} alt="" className="h-11 w-auto" />
          </div>
          <div>
            <img src={Fiverr} alt="" className="h-11 w-auto" />
          </div>
        </div>
      </div>

      <div className="md:max-w-[80%] max-w-[90%] mx-auto">
        <div className="mt-7"></div>
      </div>
    </>
  );
};

export default Home;
