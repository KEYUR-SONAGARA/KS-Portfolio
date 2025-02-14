import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="mb-6">
        Hi, I’m Keyur, a passionate front-end developer skilled in HTML, CSS, JavaScript, and React.
        I've built several personal projects, including a responsive portfolio website, which you can find on my GitHub.
        I'm constantly learning and staying updated with modern web technologies.
        While I may not have professional experience yet, I’m eager to contribute, grow, and collaborate on building impactful user experiences.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
      <a
        href="https://drive.google.com/file/d/1fmgb6y7T8brW8IKFQEW7Jv99hdWTW-A0/view?usp=drive_link"
        download
        className="bg-cyan-500 text-white px-6 py-3 rounded-xl hover:bg-cyan-600 transition-all duration-300">
        Download Resume
      </a>
      </button>
    </div>
  );
};

export default AboutMeText;
