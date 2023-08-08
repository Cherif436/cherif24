"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[42rem] border border-sky/30 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[32rem] hover:bg-sky-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3  group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        /> */}
        <div className="px-5 pt-4 pb-7">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl}
              alt="Projet web"
              quality={95}
              className="clearfix bg-cover h-80 hover:scale-110 justify-items-center group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3  group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            />
          </a>
          
          <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
          <p className="mt-2 mb-4 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            
            {tags.map((tag, index) => (
              <li
                className="bg-sky-800 hover:bg-sky-950 dark:bg-gray-700 px-2 py-2 text-[1.8rem] text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          
        </div>
        
      </section>
    </motion.div>
  );
}
