import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          x: isEven ? '-100%' : '100%',
          transition: { duration: 0.5 }
        },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.5 }
        }
      }}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <motion.div
        initial={{ x: isEven ? '-100%' : '100%' }}
        animate={controls}
        variants={{
          hidden: { x: isEven ? '-100%' : '100%', opacity: 0 },
          show: { x: '0%', opacity: 1, transition: { duration: 0.5 } }
        }}
        className='relative w-full md:w-3/5'
      >
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
        />
      </motion.div>

      <motion.div
        initial={{ x: isEven ? '100%' : '-100%' }}
        animate={controls}
        variants={{
          hidden: { x: isEven ? '100%' : '-100%', opacity: 0 },
          show: { x: '0%', opacity: 1, transition: { duration: 0.5 } }
        }}
        className={`w-full md:w-3/5 px-6 md:p-16 flex flex-col items-center justify-center text-center`}
      >
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Achievement</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
