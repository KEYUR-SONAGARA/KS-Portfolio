import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Oasis Infobyte",
    date: "May2024 - June2024",
    responsibilities: [
      "Implemented reusable components.",
      "Worked on the performance of web applications.",
      "Generated new ideas for better user experience.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "CODTECH",
    date: "Feb2025 - present",
    responsibilities: [
      "Will develop diverse web applications while enhancing technical expertise and creativity.",
      "Will explore emerging web development technologies to stay updated and innovative.",
      "Will create responsive, user-friendly, & high-performance websites.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
