import "../../styles/Home.css";
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
      <div>
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
