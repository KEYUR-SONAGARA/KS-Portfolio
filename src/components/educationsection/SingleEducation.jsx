import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleEducation = ({name, school, year, align, image}) => {
  return (
    <motion.div
    variants={fadeIn("top", 0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"} justify-end sm:flex-col`}
  >
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}>
        <div>
            <h2 className="md:text-3xl sm:text-2xl text-orange">{school}</h2>
            <h2 className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}>{name}</h2>
            <h2 className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}>{year}</h2>
        </div>
        <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
            <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
            <img src={image} alt="Education Image" className="w-full h-full"/>
        </div>
    </div>
    </motion.div>
  );
};

export default SingleEducation