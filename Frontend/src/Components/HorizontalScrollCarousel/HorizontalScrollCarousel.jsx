import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Example = () => {
  return (
    <div id="About" className="bg-white">
      {/* <div className="flex h-48 items-center justify-center">
        <h2 className="font-poppins uppercase text-3xl  mx-auto md:text-6xl lg:text-8xl   text-black">
          About
        </h2>
      </div> */}
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
      <div
        className="absolute left-[10px] top-[200px] border-t-2 border-black pt-4"
        style={{ transform: "rotate(90deg)" }}
      >
        <p className="lg:text-4xl text-2xl">{card.title}</p>
      </div>
      <div className="absolute left-[150px]  top-[130px]">
        <img
          src={`${card.img}`}
          className=" lg:w-[400px] lg:h-[250px] "
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    title: "2024-2022",
    subtitle: "Post-Graduate Studies",
    id: 1,
    para: "I came to canada in 2022 to complete the Post Graduate in Web design and Development from North Island College.",
    img: "https://www.nic.bc.ca/posts/images/5690-nic-cv-campus-resized.jpg",
  },
  {
    title: "2022-2020",
    subtitle: "Software Engineer",
    id: 2,
    para: "Back in India, I used to work for Atlas Tech as a Software Engineer.",
    img: "https://codeop.tech/wp-content/uploads/2023/11/arpad-czapp-H424WdcQN4Y-unsplash-scaled.jpg",
  },
  {
    title: "2020-2016",
    subtitle: "Bachelor's of Engineering",
    id: 3,
    para: "I Completed by bachelor of computer engineering in 2020 from Gujarat University.",
    img: "https://content.jdmagicbox.com/comp/gandhinagar-gujarat/p4/9999pxx79.xx79.110713113430.i6p4/catalogue/indus-institute-of-technology-and-engineering-kalol-gandhinagar-gujarat-colleges-7bwoata.jpg",
  },
  {
    title: "2016-2014",
    subtitle: "High School",
    id: 4,
    para: "",
    img: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/nepal-india_project_november_9.jpg",
  },
  {
    title: "2014",
    subtitle: "Schooling",
    id: 5,
    para: "",
    img: "https://www.podareducation.org/Uploads/content/2022-10-17--10-52-31-14_How-To-Select-The-Perfect-International-School-In-Gujarat-banner.jpg",
  },
];
