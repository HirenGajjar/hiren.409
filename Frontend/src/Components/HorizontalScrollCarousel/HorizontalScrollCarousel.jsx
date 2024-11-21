import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Example = () => {
  return (
    <div id="About" className="bg-white">
      <div className="flex h-48 items-center justify-center">
        <h2 className="font-poppins uppercase text-3xl  mx-auto md:text-6xl lg:text-8xl   text-black">
          About
        </h2>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth;
      setCardWidth(width);
    };

    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);
    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const totalWidth = cardWidth * cards.length;

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{
            x,
            width: `${totalWidth}px`,
            display: "flex",
            gap: "1rem",
          }}
          className="flex"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} cardWidth={cardWidth} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, cardWidth }) => {
  return (
    <div
      key={card.id}
      className="group font-montserrat relative h-screen overflow-hidden "
      style={{ width: `${cardWidth}px` }}
    >
      <div className="absolute inset-0 z-0 "></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center p-6 text-center text-black">
        <p className="text-4xl font-bold">{card.title}</p>
        <p className="text-xl font-medium text-black">{card.subtitle}</p>
      </div>
      <motion.div
        style={{
          backgroundImage: `url(${
            card.url || "https://via.placeholder.com/450"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></motion.div>
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "2024-2022",
    subtitle: "Life in Canada (Post-Graduate Studies)",
    id: 1,
    url: "https://source.unsplash.com/450x450/?canada",
  },
  {
    title: "2022-2020",
    subtitle: "Software Engineer",
    id: 2,
    url: "https://source.unsplash.com/450x450/?software,engineer",
  },
  {
    title: "2020-2016",
    subtitle: "Bachelor's of Engineering",
    id: 3,
    url: "https://source.unsplash.com/450x450/?engineering,graduation",
  },
  {
    title: "2016-2014",
    subtitle: "High School",
    id: 4,
    url: "https://source.unsplash.com/450x450/?highschool,learning",
  },
  {
    title: "2014 and Before",
    subtitle: "Schooling",
    id: 5,
    url: "https://source.unsplash.com/450x450/?childhood,dreams",
  },
];
