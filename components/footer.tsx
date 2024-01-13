import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs font-bold">
        &copy; {new Date().getFullYear()} Cherif MERZOUD.
      </small>
      {/* <p className="text-xs">
        <span className="font-semibold">Site réalisé avec React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel.</span>
      </p> */}
    </footer>
  )
}
