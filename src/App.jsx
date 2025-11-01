import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Vanta from "./components/Vanta";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <>
      <Vanta />
      <Container>
        <section id="Hero"><Hero /></section>
        <section id="Who"><Who /></section>
        <section id="Works"><Works /></section>
        <section id="Experience"><Experience /></section>
        <section id="Projects"><Projects /></section>
        <section id="Contact"><Contact /></section>
        <Footer /> 
      </Container>
    </>
  );
}

export default App;
