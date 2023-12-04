import React from 'react'
import { motion } from "framer-motion"

const Button = () => {
  const handleDownload = () => {
    const pdfUrl = '/pdf/CV_Aryo.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'myDownloadedFile.pdf';
    link.click();
  };

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.button 
      onClick={handleDownload} 
      className="btn btn-secondary rounded-full text-md md:text-lg"
      whileHover={
        {
          scale: 1.1,
          boxShadow: "5px 5px 0px"
        }
      }
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      Download CV
    </motion.button>
  );
}

export default Button

