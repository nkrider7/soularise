"use client"
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";


export const HoverImageLinks = () => {
  return (
    <section className="bg-myblack p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
		<h1 className="text-3xl md:text-3xl font-guzan text-white text-center">We Work With</h1>
        <Link
          heading="Hicks India"
          subheading="Learn what we do here"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmNAmrNGX9ArAKEAtX0fgx5SCmP3892QHaQ&s"
          href="https://www.hicksindia.in/"
        />
        <Link
          heading="Tour4You"
          subheading="We work with great people"
          imgSrc="https://c8.alamy.com/comp/2FRH549/travel-world-tour-vector-banner-design-travel-world-tour-text-with-travelling-and-adventure-elements-like-airplane-map-camera-and-compass-2FRH549.jpg"
          href="https://www.tour4you.in/"
        />
        <Link
          heading="Medihelp"
          subheading="Our work speaks for itself"
          imgSrc="https://img.freepik.com/free-vector/world-health-day-concept-healthcare-health-protection-global-international-event-april-flat-vector-illustration-design_1150-61870.jpg"
          href="https://medihelpglobal.com/"
        />
        <Link
          heading="Kesariya"
          subheading="We want cool people"
          imgSrc="https://fabvilla.in/cdn/shop/products/FAB-01APNAFABVILLAA.webp?v=1647435130"
          href="https://www.keysaria.com/"
        />
        <Link
          heading="MG365"
          subheading="Incase you're bored"
          imgSrc="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/marketing-pillar-page-marketing-overview_0.png"
          href="https://www.marketingguys365.com/"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

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
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
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
          className="relative z-10 block font-guzan text-4xl font-bold text-neutral-300 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
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
        <span className="relative z-10 mt-2 block font-inter text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
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
        <ArrowUpRight  className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};