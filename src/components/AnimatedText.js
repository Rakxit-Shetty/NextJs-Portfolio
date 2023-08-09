import React from 'react'
import { delay, motion } from "framer-motion";
const qoute={
    initial:{
        opacity:0.2
    },
    animate:{
        opacity:1,
        transition:{delay:0.5}
    }
}

const AnimatedText = ({text, className=""}) => {
  return (
    <div className={`overflow-hidden mx-auto w-full flex text-center justify-center items-center`}>
        <motion.h1 className={`${className} text-dark p-1 inline-block w-full font-bold capitalize text-8xl`}
        variants={qoute}
        initial="initial"
        animate="animate"
        >
        {text}
            </motion.h1>
        </div>
  )
}

export default AnimatedText