import React, { useRef, useEffect, useState } from 'react';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas, useFrame } from '@react-three/fiber';

// --- Styled Components ---

const Section = styled.section`
  height: 100vh;
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
`;

const Left = styled.div`
  flex: 4.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, #ffd9c1, #ffcb69, #ff4e00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  line-height: 1.1;
`;

const Desc = styled.p`
  font-size: 20px;
  background: linear-gradient(10deg, #ffffff, #ffffffb5, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  position: relative;
  overflow: hidden;
`;


const Img = styled.img`
  width: 600px;
  height: 540px;
  object-fit: contain;
  position: relative;
  z-index: 1;
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
  z-index: 1;
`;

// --- Moving 3D Sphere ---

const MovingSphere = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.02;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 1]}>
      <sphereGeometry args={[2.05, 64, 64]} />
      <MeshDistortMaterial color="#ff9900" distort={0.2} speed={1.5} roughness={0.05} />
    </mesh>
  );
};

// --- Main Hero Component ---

const Hero = () => {
  const sectionRef = useRef();
  const [key, setKey] = useState(0); // 👈 force re-render key

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Change key to trigger re-render → restart animation
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
              ~I build immersive web experiences with sleek design & stunning 3D visuals
          </Desc>
        </Left>

        <Right>
          <CanvasWrapper>
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <MovingSphere />
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
