"use client"

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [articleNum, setArticleNum] = useState(4);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      
      <div>
        {projectsData.slice(0, articleNum).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <button className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-full shadow outline-none bg-sky-800 group hover:bg-sky-950 dark:bg-gray-900 bg-gradient-to-r active:bg-sky-900 hover:shadow-lg focus:outline-none" type="button" onClick={() => setArticleNum(articleNum + 2)}><em className='animate-pulse'>Voir plus</em></button>
      </div>
      
    </section>
  )
}
