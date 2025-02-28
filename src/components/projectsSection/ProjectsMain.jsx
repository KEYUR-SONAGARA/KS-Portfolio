import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "GitaSaar",
    year: "Feb2024",
    align: "right",
    image: "../../public/images/GitaSaar.png",
    link: "https://gitasaar.vercel.app/",
  },
  {
    name: "Pizza Castle",
    year: "Apr2024",
    align: "left",
    image: "../../public/images/Pizza Castle.png",
    link: "https://pizza-castle.vercel.app/",
  },
  {
    name: "Portfolio",
    year: "Feb2025",
    align: "right",
    image: "../../public/images/Portfolio.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
