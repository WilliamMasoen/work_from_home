import "../../styles/Skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

interface Skill {
  id: string;
  logo: any;
  name: string;
}

function Skills() {
  const SkillsList: Skill[] = [
    {
      id: "html-logo",
      logo: FaHtml5,
      name: "HTML",
    },
    {
      id: "css-logo",
      logo: FaCss3Alt,
      name: "CSS",
    },
    {
      id: "javascript-logo",
      logo: IoLogoJavascript,
      name: "JavaScript",
    },
    {
      id: "typescript-logo",
      logo: SiTypescript,
      name: "TypeScript",
    },
    {
      id: "react-logo",
      logo: FaReact,
      name: "React",
    },
  ];

  return (
    <>
      <div className="skills-box">
        <h1 className="skills-header">Skills/Tools</h1>
        {/* <p className="skills-content">skills to pay the bills.</p> */}
        <div className="skills-list">
          {SkillsList.map((skill) => {
            return (
              <div className="skills-list-item">
                <skill.logo className="skills-logo" id={skill.id} />
                <p className="skills-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
