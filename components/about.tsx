"use client"

import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
        <SectionHeading>About me</SectionHeading>
        <div className="items-center justify-center py-2">
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">Bonjour et bienvenue sur mon portfolio !</h5>
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">After graduating with a business degree, I decided to pursue my passion for programming. I enrolled at the <strong>Paul Hankar Institute</strong> in Brussels and I learned front-end web development, I acquired knowledge and many skills through projects carried out in different languages ​​< strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>PHP</strong> and <strong>MySQL</strong> as well as the <strong> library Reactjs</strong>. My favorite part of programming is the problem solving aspect. I like the feeling of finally finding a solution to a problem. Focusing on coding with <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong> and <strong>MongoDB</strong>. I am also familiar with <strong>TypeScript</strong>. I am always looking to learn new technologies. I am currently looking for a full time position as a web developer</h5>
          <h5 className="my-3 font-medium text-gray-700 dark:text-white/75">You will see in this portfolio, my skills, my background and all the projects I have been able to achieve.</h5>
        </div>
    </motion.section>
  )
}
