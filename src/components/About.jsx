import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[20px] max-w-3xl leading-[30px]"
      >
        As a final-year engineering student specializing in{" "}
        <span class="sm:text-battleGray font-extrabold">game development</span>, I am
        currently seeking opportunities for a{" "}
        <span class="sm:text-battleGray font-extrabold">final-year internship</span> in
        video game or computer development
        <br></br>
        <br></br>
        I have been coding beyond my studies for several years and I have actively
        participated in{" "}
        <span class="sm:text-battleGray font-extrabold">coding events and game jams</span>
        . For the past two years I have dedicated my free time to create video games,
        which you can explore some on this website and more on my profile at{" "}
        <a
          href="https://snibaw.itch.io"
          target="_blank"
          rel="noopener noreferrer"
          class="sm:text-battleGray font-extrabold"
          style={{ color: "#6B7A9A" }} 
        >
          snibaw.itch.io
        </a>
        .{" "}
        <br></br>
        <br></br>
        I am eager to learn and would be delighted to work in a team where I can
        develop my{" "}
        <span class="sm:text-battleGray font-extrabold">technical and soft skills</span>
        . I am sure that my motivation and zest for life will be a valuable asset to
        your team, so{" "}
        <span class="sm:text-battleGray font-extrabold">do not hesitate to contact me!</span>
        <br></br>
        <br></br>
        Ideally, I am looking for an internship starting between February and April
        that would last for{" "}
        <span class="sm:text-battleGray font-extrabold">24 weeks</span>.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
