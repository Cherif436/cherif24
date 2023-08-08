"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { cms, database, languages, skillsData, tools } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Bar from "./Bar";
import { FaCode, FaDatabase, FaTools } from "react-icons/fa"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 w-[min(100%,35rem)] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div>
          <h5 className="flex my-3 text-2xl font-medium"><FaCode className="mr-2 dark:text-white" /> Languages</h5>
          <div className="my-2">
            {
              languages.map((language) => <Bar data={language} key={language.name} />)
            }
          </div>
        </motion.div>
        <motion.div>
          <h5 className="flex my-3 text-2xl font-medium"><FaTools className="mr-2 dark:text-white" /> Tools</h5>
          <div className="my-2">
            {
              tools.map(tool => <Bar data={tool} key={tool.name} />)
            }
          </div>
          <h5 className="flex my-3 mt-5 text-2xl font-medium"><FaDatabase className="mr-2 dark:text-white" /> Database</h5>
          <div className="my-2">
            {
              database.map(datab => <Bar data={datab} key={datab.name} />)
            }
          </div>
          <h5 className="flex my-3 mt-5 text-2xl font-medium"> CMS</h5>
          <div className="my-2">
            {
              cms.map(c => <Bar data={c} key={c.name} />)
            }
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}