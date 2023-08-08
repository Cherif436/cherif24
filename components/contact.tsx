"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import SubmitBtn from './submit-btn';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section id="contact" ref={ref} className="mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,35rem)]" initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}>
      <SectionHeading>Contact me</SectionHeading>
      <form className="" action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          
          setTimeout(() => {
            alert("Your e-mail has been sent and I will make sure to answer you as soon as possible.");
          }, 2000)
          
        }}>
        
          <div className="mb-4">
            <label htmlFor="senderName" className="block mb-1 text-sm text-gray-600 dark:text-white">Last name</label>
            <input type="text" name="senderName" placeholder="John" required className="w-full px-4 my-3 transition-all border rounded-lg h-14 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none hover:bg-sky-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="senderPrenom" className="block mb-1 text-sm text-gray-600 dark:text-white">First name</label>
            <input type="text" name="senderPrenom" placeholder="Doe" required className="w-full px-4 my-3 transition-all border rounded-lg h-14 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none hover:bg-sky-50" />
          </div>
        
        <div className="mb-4">
          <label htmlFor="senderEmail" className="block mb-1 text-sm text-gray-600 dark:text-white">E-mail</label>
          <input type="email" name="senderEmail" placeholder="xyz@exemple.com" required className="w-full px-4 my-3 transition-all border rounded-lg h-14 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none hover:bg-sky-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="senderSubject" className="block mb-1 text-sm text-gray-600 dark:text-white">Subject</label>
          <input type="text" name="senderSubject" placeholder="Message subject" required className="w-full px-4 my-3 transition-all border rounded-lg h-14 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none hover:bg-sky-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm text-gray-600 dark:text-white">Message</label>

          <textarea placeholder="Your message" name="message" className="w-full h-40 p-4 my-3 mb-6 transition-all border rounded-lg dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none hover:bg-sky-50" />
        </div>
        <div className="mb-4">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  )
}
