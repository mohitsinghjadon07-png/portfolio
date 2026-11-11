import {
  FiTerminal, FiGlobe, FiShield, FiTarget, FiCloud, FiWifi, FiKey,
  FiCpu, FiCode, FiLayers, FiGithub,
} from 'react-icons/fi'

/* ------------------------------------------------------------------
   EDIT ME. Everything shown on the site comes from this file.
   - linkedin / email: leave '' to hide them, or paste your real value.
   - resumeFile: put your PDF in /public (e.g. public/resume.pdf) and set
     resumeFile: '/resume.pdf' to show a Download Resume button.
------------------------------------------------------------------- */
export const site = {
  name: 'Mohit Singh Jadon',
  location: 'Indore, Madhya Pradesh, India',
  github: 'https://github.com/mohitsinghjadon07-png',
  linkedin: '',
  email: '',
  resumeFile: '',
}

export const roles = [
  'Cybersecurity Enthusiast',
  'Developer',
  'Cloud Learner',
  'Problem Solver',
]

export const stats = [
  { value: 4, label: 'Featured projects' },
  { value: 2, label: 'Live demos online' },
  { value: 2, label: 'Security & cloud tracks' },
  { value: 2, label: 'Year of B.Tech in Cyber Security' },
]

export const projects = [
  {
    id: 'roadmind',
    name: 'ROADmind',
    art: 'road',
    tag: 'Hackathon prototype',
    summary:
      'An adaptive path-planning and collision-avoidance concept for autonomous vehicles driving on unstructured Indian roads.',
    details:
      'Covers sensing, perception, detection, tracking, prediction, risk assessment, free-space estimation, path planning and adaptive navigation.',
    tags: ['Python', 'Pygame', 'NumPy'],
    live: null,
    repo: null, // add the repository URL here when ready
  },
  {
    id: 'ecotrace',
    name: 'EcoTrace',
    art: 'eco',
    tag: 'Sustainability concept',
    summary:
      'A web platform concept for AI-assisted waste identification, recycling guidance, collection discovery and reward-based engagement.',
    details: 'Aims to make the right disposal choice quick and a little rewarding.',
    tags: ['Web platform', 'AI-assisted', 'Sustainability'],
    live: null,
    repo: 'https://github.com/mohitsinghjadon07-png/ecotrace',
  },
  {
    id: 'raksha',
    name: 'RAKSHA',
    art: 'radar',
    tag: 'Dashboard concept',
    summary:
      'A disaster-response dashboard concept designed to support situational awareness and disaster-related information.',
    details: 'Brings the information responders need into a single view.',
    tags: ['Dashboard', 'Situational awareness', 'Web'],
    live: 'https://raksha-rrfl.onrender.com',
    repo: null,
  },
  {
    id: 'penguin',
    name: 'Penguin Array DSA Simulator',
    art: 'bars',
    tag: 'Educational tool',
    summary:
      'An interactive educational project that visualizes array operations and sorting algorithms step by step.',
    details: 'Built to make data structures and algorithms easier to see and understand.',
    tags: ['Web', 'Algorithms', 'Visualization'],
    live: 'https://mohitsinghjadon07-png.github.io/Penguin-Array-DSA-Simulator/',
    repo: null,
  },
]

export const skills = [
  { name: 'Python', note: 'Pygame and NumPy prototypes', icon: FiTerminal, group: 'Build' },
  { name: 'Web development', note: 'Dashboards and simulators', icon: FiGlobe, group: 'Build' },
  { name: 'Software development', note: 'Hackathon projects', icon: FiCode, group: 'Build' },
  { name: 'Data structures and algorithms', note: 'Array and sorting visualizer', icon: FiLayers, group: 'Build' },
  { name: 'Cybersecurity', note: 'Fundamentals and ethical hacking', icon: FiShield, group: 'Secure' },
  { name: 'Ethical hacking', note: 'Learning how attacks work', icon: FiTarget, group: 'Secure' },
  { name: 'Networking', note: 'Core concepts', icon: FiWifi, group: 'Secure' },
  { name: 'Cryptography', note: 'Core concepts', icon: FiKey, group: 'Secure' },
  { name: 'AWS and cloud computing', note: 'Cloud Practitioner Essentials', icon: FiCloud, group: 'Cloud' },
  { name: 'Security in the cloud', note: 'AWS PartnerCast session', icon: FiShield, group: 'Cloud' },
  { name: 'Pygame and NumPy', note: 'Simulation and perception logic', icon: FiCpu, group: 'Cloud' },
  { name: 'Git and GitHub', note: 'Project hosting', icon: FiGithub, group: 'Cloud' },
]

export const skillGroups = [
  { key: 'Build', title: 'Build', blurb: 'Languages and the things I make with them.' },
  { key: 'Secure', title: 'Secure', blurb: 'Learning how systems break and how to protect them.' },
  { key: 'Cloud', title: 'Cloud and tools', blurb: 'Where it runs and how I ship it.' },
]

export const tools = ['Python', 'Pygame', 'NumPy', 'AWS', 'Git', 'GitHub', 'GitHub Pages', 'Render']

export const learning = [
  { title: 'Cybersecurity fundamentals', body: 'Core ideas behind threats, defenses and safe system design.' },
  { title: 'Python programming', body: 'From scripts to simulations with Pygame and NumPy.' },
  { title: 'Web development', body: 'Building interactive dashboards, tools and learning aids.' },
  { title: 'Networking and cryptography', body: 'How data moves and how it is kept private.' },
  { title: 'AWS Cloud Practitioner Essentials', body: 'Cloud concepts, core AWS services and how they fit together.' },
  { title: 'AWS PartnerCast: Security Essentials', body: 'Security in the Cloud, with a focus on shared responsibility.' },
]

export const focus = [
  'Building a strong base in cybersecurity and ethical hacking',
  'Going deeper on AWS and secure cloud design',
  'Shipping small, useful web and Python projects',
  'Taking part in hackathons and student tech initiatives',
]
