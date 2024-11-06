import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const Project = () => {
  return (
    <section className="bg-white p-4 md:p-8 mb-20">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Outback Nursery"
          subheading="Frontend design & development"
          imgSrc="https://images.pexels.com/photos/6508545/pexels-photo-6508545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://outbacknursery-ez85uoswa-hirengajjars-projects.vercel.app/"
        />
        <Link
          heading="Design System"
          subheading="Component based design system"
          imgSrc="https://www.idsa.org/wp-content/uploads/2023/07/IDEA2023_Starbucks-Pro-Design-System.png"
          href="https://outbacknursery.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Link
          heading="Portfolio"
          subheading="Summer 2024 Project"
          imgSrc="https://sketchelements.com/wp-content/uploads/2019/10/tesla-mobile-app-concept.png"
          href="https://hirengajjar.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Link
          heading="Refine Dashboard"
          subheading="React.js + Tailwind"
          imgSrc="https://justboil.me/static/a7ee34cf5cfd0ff6a2cfd29549895d1c/34fe8/dark.png"
          href="https://github.com/HirenGajjar/dashboard-react"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Link
          heading="Paytm"
          subheading="MERN stack "
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJ43TyjN3MeZ3_eOXo1aQcyqzt_JG7h_E6Q&s"
          href="https://github.com/HirenGajjar/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};

const Link = ({
  heading,
  imgSrc,
  subheading,
  href,
  target = "_self",
  rel = "noopener noreferrer",
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500  md:py-8 "
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-black transition-colors duration-500  md:text-6xl my-10"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-black transition-colors duration-500 ">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl " />
      </motion.div>
    </motion.a>
  );
};

export default Project;
