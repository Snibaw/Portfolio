import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  Nulo,
  Astro,
  Tank,
  Realities,
  PaintWar,
  space,
  caju,
  sainte,
  inflexsys,
  tsp,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'National competitive examination',
    company_name: 'Lycee Camille Jullian',
    icon: caju,
    iconBg: 'white',
    date: 'Sep 2019 - Aug 2021',
  },
  {
    title: 'Engineering student in computer science and microelectronics',
    company_name: 'Ecole des Mines de Saint Etienne',
    icon: sainte,
    iconBg: 'white',
    date: 'Sep 2021 - Aug 2023',
  },
  {
    title: 'Web Developer Intern',
    company_name: 'InfleXsys Merignac France',
    icon: inflexsys,
    iconBg: 'white',
    date: 'Jan 2022 - Feb 2022',
  },
  {
    title: 'Engineering student in Game Development',
    company_name: 'Third year engineer at Telecom SudParis',
    icon: tsp,
    iconBg: 'white',
    date: 'Sep 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Nulo-Baby',
    description: 'A 2D platformer created during a school project in collaboration with a friend. The aim of this project was to develop a game with our own physics engine that could be played with a controller on both Windows and the web.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Nulo,
    repo: 'https://github.com/Snibaw/PlatformerDeveloppement1',
    demo: 'https://snibaw.itch.io/nulobaby',
  },
  {
    id: 'project-2',
    name: 'Astro-Shift',
    description:
      'A 2D Endless Runner Game for mobile and windows. In this game I used Unity URP and focused on the visual aspect of the game.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: Astro,
    repo: 'https://github.com/Snibaw/AstroShift-URP',
    demo: 'https://snibaw.itch.io/astro-shift',
  },
  {
    id: 'project-3',
    name: 'Tank-Madness',
    description: 'I tried to recreate WII Play\'s 2D tank game. I was able to create intelligent enemies for the game and add aiming aids in the mobile version.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Tank,
    repo: 'https://github.com/Snibaw/Game-Tank',
    demo: 'https://snibaw.itch.io/tank',
  },
  {
    id: 'project-4',
    name: 'Realities',
    description: `A 3D game made with a group of 3 for a 24h game jam (we won !). The theme was "Psychadelic" and I was in charge of the development on Unity.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Realities,
    repo: 'https://github.com/Snibaw/GameJam-28-08-2023',
    demo: 'https://snibaw.itch.io/realities',
  },
  {
    id: 'project-5',
    name: 'Paint War',
    description:
      'A school project in a group of three involved creating an OpenGL-based 3D paint war game. We implemented techniques such as Ray-Marching to display players on the screen and simulate physics interactions between the players\' blobs.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: PaintWar,
    repo: 'https://github.com/Snibaw/Paint-War-Project-OpenGL',
    demo: 'https://github.com/Snibaw/Paint-War-Project-OpenGL',
  },
];

export { services, technologies, experiences, projects };
