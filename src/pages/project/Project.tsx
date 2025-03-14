import Nav from "../../components/Nav.tsx";
import Footer from "../../components/Footer.tsx";
import Countdown from "../../components/Countdown.tsx";
import "../../styles/Project.css";
import BirthdayCake from "../../assets/images/project_thumbnail/birthday-cake.jpeg";

interface Project {
  thumbnail: any;
  title: string;
  url: string;
  github: string;
}

// Set to 1 to display countdown, 0 otherwise
const countdownDisplay = 0;

function Project() {
  const ProjectsList: Project[] = [
    {
      thumbnail: BirthdayCake,
      title: "Birthday Cake",
      url: "https://main.d586n1eogx5fk.amplifyapp.com",
      github: "https://github.com/WilliamMasoen/birthday_cake",
    },
  ];

  return (
    <>
      <div id="project-page">
        {/* Navigation Bar */}
        <div id="nav-bar">
          <Nav />
        </div>

        {/* Project Countdown */}
        <div
          id={
            countdownDisplay >= 1
              ? "countdown-container-active"
              : "countdown-container-inactive"
          }
        >
          <Countdown />
        </div>

        <div
          id={
            countdownDisplay < 1 ? "placeholder-active" : "placeholder-inactive"
          }
        >
          {/* <p>Stay tuned for our projects! :)</p> */}
          <div className="project-container">
            {ProjectsList.map((project) => {
              return (
                <div className="project">
                  <div className="project-thumbnail-container">
                    <img
                      src={project.thumbnail}
                      alt=""
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-content-container">
                    <div className="project-title">{project.title}</div>
                    <div className="project-link">
                      <button>
                        <a id="url" href={project.url} target="_blank">
                          Link
                        </a>
                      </button>
                    </div>
                    <div className="project-link">
                      <button>
                        <a id="url" href={project.github} target="_blank">
                          GitHub
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Project;
