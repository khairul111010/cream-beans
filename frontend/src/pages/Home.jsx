import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const hasPlayed = JSON.parse(
      sessionStorage.getItem(import.meta.env.VITE_HASPLAYEDHEADLINE)
    );
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      if (!hasPlayed) {
        t1.from(headlineRef.current, {
          xPercent: -100,
          ease: "power4.out",
          delay: 0.3,
        }).from([sublineRef.current, buttonRef.current], {
          opacity: 0,
          ease: "expo.inOut",
          delay: 0.4,
          stagger: 0.6,
          onComplete: function () {
            sessionStorage.setItem(
              import.meta.env.VITE_HASPLAYEDHEADLINE,
              true
            );
          },
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="max-w-[90%] overflow-hidden md:max-w-[80%] mx-auto h-[25vh] md:h-[30vh] flex flex-col justify-center gap-6 -z-50"
      >
        <h1 ref={headlineRef} className="text-3xl md:text-6xl">
          We{" "}
          <span className="font-bold text-primary">
            develop, fix <span className="font-normal text-black">&</span>{" "}
            maintain
          </span>{" "}
          software for your{" "}
          <span className="font-bold text-secordary">business</span>
        </h1>

        <h3 ref={sublineRef}>
          We create strong, user-friendly mobile and web apps to boost your
          business growth and achieve your goals seamlessly
        </h3>

        <div ref={buttonRef}>
          <Link
            className="bg-primary px-3 py-2 text-white hover:bg-secordary transition-all duration-300 rounded-md w-fit"
            to={"/discuss"}
          >
            Let's discuss
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
