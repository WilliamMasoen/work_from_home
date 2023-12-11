import Nav from "../../components/Nav.tsx";
import Footer from "../../components/Footer.tsx";
import "../../styles/Project.css";

function Project() {
  return (
    <>
      <div id="project-page">
        {/* Navigation Bar */}
        <div id="nav-bar">
          <Nav />
        </div>

        <div className="project-text">
          <p>Stay tuned for our projects :)</p>
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
