import React, { useRef, useEffect, useState } from "react";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas, useFrame } from "@react-three/fiber";
import { Linkedin, Github, Mail } from "lucide-react";

const Section = styled.section`
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const Left = styled.div`
  flex: 4.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 2;
  margin-left: 50px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-left: 0;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-left: 3px;
  margin-top: 20px;
  font-weight: 800;
  background: linear-gradient(45deg, #ffd9c1, #ffcb69, #ff4e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  line-height: 1.1;
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top:-4px;
  font-weight: bold;
  color: #ffffffcd;
  font-family: "Fira Code", monospace;
  position: relative;
`;

const CodeWrapper = styled.span`
  &::before {
    content: "<";
  }
  &::after {
    content: "/>";
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top:2px;

  a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 153, 0, 0.863);
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      background-color: #ff6600;
      color: #fff;
      transform: scale(1.2);
    }
  }
`;

const Right = styled.div`
  flex: 3.5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Img = styled.img`
  width: 90%;
  max-width: 550px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: 320px;
    width: 70%;
  }
`;

const MovingSphere = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.02;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[2.02, 64, 64]} />
      <MeshDistortMaterial color="#ff9900" distort={0.2} speed={1.5} roughness={0.05} />
    </mesh>
  );
};

const Hero = () => {
  const sectionRef = useRef();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKey((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi, I'm Sanjith Harpalla</Title>
          <Desc>
            <CodeWrapper>
              I build immersive web experiences with sleek design & stunning 3D visuals
            </CodeWrapper>
          </Desc>
          <Socials>
            <a
              href="https://www.linkedin.com/in/sanjith-sadananda-harpalla-a3769521b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ssharpalla2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a href="mailto:ssharpalla2002@gmail.com" aria-label="Send Email">
              <Mail size={24} />
            </a>
          </Socials>
        </Left>
        <Right>
          <CanvasWrapper>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <MovingSphere key={key} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </CanvasWrapper>
          <Img src="./img/coding.png" alt="Coding" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
