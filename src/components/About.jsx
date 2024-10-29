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
        <h2 className={styles.sectionHeadText}>À propos de moi</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[20px] max-w-3xl leading-[30px]"
      >
        En tant que jeune ingénieur diplomé en {" "}
        <span class="sm:text-battleGray font-extrabold">informatique </span>
         avec une spécialisation dans {" "}
        <span class="sm:text-battleGray font-extrabold">le développement de jeux vidéo</span>
        , je suis actuellement à la recherche d'un {" "}
        <span class="sm:text-battleGray font-extrabold">premier emploi </span> 
          dans ce domaine.
        <br></br>
        <br></br>Cela fait plusieurs années que je code en dehors de mes études et que je participe à des {" "}
        <span class="sm:text-battleGray font-extrabold">concours de programmation et des game jams</span>
          . Au cours des trois dernières années, j'ai consacré mon temps libre à la création de jeux vidéo, que vous pouvez découvrir sur mon profil{" "}
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
          Je suis très motivé pour apprendre et je serais ravie de travailler dans une équipe où je pourrais
          développer à la fois mes compétences{" "}
        <span class="sm:text-battleGray font-extrabold">techniques et mes softs skills</span>
          . Je suis convaincu que ma motivation et ma joie de vivre seront un atout précieux pour votre équipe, donc{" "}
        <span class="sm:text-battleGray font-extrabold"> n'hésitez pas à me contacter !</span>
        <br></br>
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
