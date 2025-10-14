import { img } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";




export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Full Stack Developer", icon: backend },
  { title: "Frontend Developer", icon: mobile },
  { title: "Cricketer & Team Captain", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  
];

const experiences = [
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "Pimpri Chinchwad University",
    icon: "/pcu.png",
    iconBg: "#383E56",
    date: "Aug 2023 – Present",
    points: [
      "Currently pursuing B.Tech with a CGPA of 8.40.",
      "Exploring full-stack web development and IoT-based solutions.",
      "Finalist in multiple national-level hackathons and ideation competitions.",
    ],
  },
  {
    title: "Science with Information Technology",
    company_name: "Jai Hind Junior College",
    icon: "/jhs.jpg",
    iconBg: "#E6DEDD",
    date: "2021 – 2023",
    points: [
      "Achieved 76% aggregate.",
      "Developed strong foundation in programming and logical reasoning.",
    ],
  },
  {
    title: "High School Education",
    company_name: "Alphonsa High School",
    icon: "/ahs.jpg",
    iconBg: "#383E56",
    date: "Completed in 2021",
    points: [
      "Graduated with 88%.",
      "Excelled in academics and extracurricular leadership roles.",
    ],
  },
];

const testimonials = [
  {
    
    testimonial:
      "Soham’s leadership and technical skills stood out during hackathons. His ability to design, develop, and deploy full-stack apps quickly was impressive.",
    name: "Hackathon Jury Member",
    designation: "Organizer",
    company: "Avaniya 3.0 – JSPM’s",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "A disciplined individual with both coding talent and sportsmanship. Leading by example, Soham motivates his team on and off the field.",
    name: "Sports Faculty",
    designation: "Coach",
    company: "Pimpri Chinchwad University",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

const projects = [
  {
    name: "DrishtiX",
    description:
      "A deployed platform where users can share and browse innovative ideas, integrated with Sanity.io CMS and Sentry for bug tracking.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "Sanity.io", color: "green-text-gradient" },
    ],
    image: '/dristix.jpg',
    source_code_link: "https://github.com/Soham-18shinde/DrishtiX",
  },
  {
    name: "ShelfMart",
    description:
      "A business analytics dashboard with Pareto visualization to identify top-selling products and optimize inventory decisions.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: '/shelfmart.png',
    source_code_link: "https://github.com/Soham-18shinde/ShelfMart",
  },
  {
    name: "MedInsure AI",
    description:
      "Simplifies health insurance claims using a digital interface—built with HTML, CSS, and JavaScript for an accessible user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: "/medinsure'.jpg",
    source_code_link: "https://github.com/Soham-18shinde/MedInsureAI",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
