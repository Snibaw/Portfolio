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
  fishing,
  tsp,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'À propos',
  },
  {
    id: 'projects',
    title: 'Mes projets',
  },
  {
    id: "work",
    title: "Mon expérience",
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
    title: 'Classes préparatoires PCSI/PC',
    company_name: 'Lycee Camille Jullian',
    icon: caju,
    iconBg: 'white',
    date: 'Sep 2019 - Août 2021',
  },
  {
    title: 'Étudiant ingénieur en informatique et microélectronique',
    company_name: 'Ecole des Mines de Saint Etienne',
    icon: sainte,
    iconBg: 'white',
    date: 'Sep 2021 - Août 2023',
  },
  {
    title: 'Stage en développement web',
    company_name: 'InfleXsys Merignac France',
    icon: inflexsys,
    iconBg: 'white',
    date: 'Jan 2022 - Fev 2022',
  },
  {
    title: 'Étudiant ingénieur en développement de jeux vidéo',
    company_name: 'Telecom SudParis en troisieme annee',
    icon: tsp,
    iconBg: 'white',
    date: 'Sep 2023 - Fev 2024',
  },
  {
    title: 'Stagiaire en développement de jeux vidéo',
    company_name: 'Fishing Cactus',
    icon: fishing,
    iconBg: 'white',
    date: 'Fev 2024 - Août 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Save The Color',
    description: 'J\'ai créé ce jeu avec 7 étudiants et nous avons remporté le prix du jury 🥳. Il s\'agit d\'un jeu de plateforme dans lequel vous pouvez colorer l\'environnement pour lui donner des effets et progresser dans le jeu. J\'ai travaillé sur la physique du jeu et les effets des différents blocs.',
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
    repo: 'https://github.com/Snibaw/UniJam',
    demo: 'https://szakon.itch.io/color',
  },
  {
    id: 'project-2',
    name: 'Astro-Shift',
    description:
      'Un Endless Runner en 2D pour mobile et Windows. Pour ce projet, j\'ai utilisé Unity URP et je me suis concentré sur l\'aspect visuel du jeu.',
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
    description: 'J\'ai essayé de recréer mon jeu préféré de la Wii, un jeu de tanks en 2D. J\'ai eu l\'occasion de créer des IA en tant qu\'ennemis et d\'ajouter des aides à la visée dans la version mobile.',
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
    description: `Un jeu 3D réalisé avec 2 autres étudiants pour une game jam de 24h (nous avons gagné !). Le thème était « Psychadelic » et j\'étais en charge du développement sur Unity.`,
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
      'Dans le cadre d\'un projet scolaire, nous avons crée en groupe de trois un jeu de bataille de peinture multijoueur en 3D basé sur OpenGL. Nous avons mis en œuvre des techniques telles que le Ray-Marching pour afficher les joueurs à l\'écran et simuler les interactions physiques entre les blobs des joueurs.',
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
