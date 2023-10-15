import "./styles/Home.css";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

function Home() {
  const QuotesList = [
    "Carpe Diem.",
    "Quote2",
    "Quote3",
    "Quote4",
    "Quote5",
    "Quote6",
  ];

  return (
    <>
      <div>
        <Nav />
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
      ;
    </>
  );
}

export default Home;
