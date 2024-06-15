import Nav from "../../components/Nav.tsx";
import Footer from "../../components/Footer.tsx";
import Countdown from "../../components/Countdown.tsx";
import "../../styles/Project.css";

// Set to 1 to display countdown, 0 otherwise
const countdownDisplay = 0;

function Project() {
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
          <p>Stay tuned for our projects! :)</p>
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
