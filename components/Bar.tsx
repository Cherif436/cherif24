import { ISkill } from "@/lib/types"
import { motion } from "framer-motion"
import { FunctionComponent } from "react"

const Bar:FunctionComponent<{ data:ISkill }> = ({data: {Icon, level, name}}) => {
  const variants = {
    initial: {
      width: 0 
    },
    animate: {
      width: level,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }
    }
  }
  return (
    <div className="my-2 text-white border rounded-full border-sky/50 blue:bg-sky-200 dark:bg-black-500">
      <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-sky-950 to-sky-800 dark:from-gray-950 dark:to-gray-800" style={{width: level}} variants={variants} initial="initial" animate="animate">
        <Icon className="mr-3 text-white" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar