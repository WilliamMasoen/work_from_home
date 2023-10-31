import "../../styles/Home.css";
import Nav from "../../components/Nav.tsx";
import Carousel from "./Carousel.tsx";
import Footer from "../../components/Footer.tsx";

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <div>
        <Nav />
      </div>
      {/* Quote Carousel */}
      <Carousel />
      {/* Home Content */}

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
