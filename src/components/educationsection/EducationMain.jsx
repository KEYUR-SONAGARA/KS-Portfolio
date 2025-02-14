import SingleEducation from './SingleEducation'
import EducationText from './EducationText'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Education = [
    {
        school: "A.D.Patel Institute of Technology, Anand",
        name: "Bachelor of Engineering - Information Technology",
        year: "Sep2021-present",
        align: "right",
        image: "../public/images/ADIT.jpg",
    },
    {
    school: "Abhijat Vidhyavihar, Ahmedabad",
    name: "12th Grade",
    year: "Apr2020-Mar2021",
    align: "left",
    image: "../../public/images/Abhijat.jpeg",
    },
    {
    school: "Shikhar Public School, Dhrangadhra",
    name: "10th Grade",
    year: "Apr2018-Mar2019",
    align: "right",
    image: "../../public/images/Shikhar.jpg",
    },
]

const EducationMain = () => {
  return (
    <div id="education" className="max-w-[1200px] mx-auto px-4">
        <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        >
            <EducationText/>
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {Education.map((item,index)=>{
                return <SingleEducation key={index} 
                    school={item.school} 
                    name={item.name} year={item.year} 
                    align={item.align} 
                    image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default EducationMain
