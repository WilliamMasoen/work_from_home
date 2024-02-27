import "../../styles/Home.css";
import Divider from "../../components/Divider.tsx";
import Nav from "../../components/Nav.tsx";
import Carousel from "./Carousel.tsx";
import Description from "./Description.tsx";
import Profile from "./Profile.tsx";
import Skills from "./Skills.tsx";
import Footer from "../../components/Footer.tsx";

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <div>
        <Nav />
      </div>

      {/* Quote Carousel */}
      {/* first-page-element refers to the first element on the page, */}
      {/* since the navigation bar has the style 'position: fixed', which */}
      {/* technically removes the element from the normal page flow. */}
      <div className="first-page-element">
        <Carousel />
      </div>

      {/* Home Content */}
      <div>
        <Description />
      </div>

      {/* Profile */}
      <div>
        <Profile />
      </div>

      {/* Skills/Tools */}
      <div>
        <Skills />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
