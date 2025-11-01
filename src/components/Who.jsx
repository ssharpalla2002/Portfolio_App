import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Who1 from "./Who1";

const Section = styled.section`
  height: 100vh;
  display: flex;
  scroll-behavior: smooth;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 40px;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 106, 0, 0.33);
  border: 7px solid rgba(255, 140, 0, 0.4);
  border-radius: 20px;
  padding: 23px 30px;
  max-width: 480px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 12px 30px rgba(255, 140, 0, 0.5), 0 0 12px rgba(255, 106, 0, 0.4);
    border-color: #ff95007b;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

const CanvasWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  background: linear-gradient(15deg, #ff9900d1, #ffbe3cd0, #ff8000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Desc = styled.p`
  margin-top: 11px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffffca;
  line-height: 1.5;
`;

const FDesc = styled.p`
  font-weight: 900;
  font-size: 19px;
  background: linear-gradient(15deg, #aeebffc5, #d6faf9dd, #ffffffa2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 15px;
`;

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Who = () => {
  return (
    <Section>
      <Container>
        <Left
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={slideLeft}
        >
          <CanvasWrapper>
            <Who1 />
          </CanvasWrapper>
        </Left>

        <Right
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={slideRight}
        >
          <Card>
            <Title>Introduction</Title>
            <Desc>
              I'm a skilled software developer with expertise in Node.js, React.js, SQL and REST APIs.
              <br />
              I collaborate closely with clients to develop scalable backend architectures, multithread
              <br />
              applications, real-time data processing systems with high performance and low latency.
            </Desc>
            <FDesc>Let's work together to bring your ideas to life!</FDesc>
          </Card>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
