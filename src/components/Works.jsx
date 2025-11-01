import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
`;

const StarImage = styled(motion.img)`
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(255, 200, 100, 0.5));
`;

const MotionCard = styled(motion.div)`
  background: rgba(255, 149, 0, 0.367);
  width: 340px;
  border-radius: 25px;
  border: 8px solid #ff950074;
  padding: 25px 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.35s ease-in-out, border-color 0.35s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SchoolCard = styled(MotionCard)``;
const CollegeCard = styled(MotionCard)``;

const TitleRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const CircleWrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ff8000;
`;

const LogoCircle = styled(motion.img)`
  width: 90%;
  height: 90%;
  object-fit: contain;
  border-radius: 50%;
`;

const Title = styled(motion.h1)`
  font-family: "Dancing Script", cursive;
  color: #ffffffdb;
  font-size: clamp(2rem, 5vw, 3.5rem);
  background: linear-gradient(45deg, #ffae62d2, #ffcb69, #ffae00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1.5px;
  line-height: 1.2;
`;

const Text = styled(motion.span)`
  font-size: 13px;
  font-weight: 600;
  color: #ffffffcc;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
  margin-top:2px;
`;

const Text1 = styled(motion.span)`
  font-size: 13px;
  font-weight: 600;
  color: #ffffffdd;
  letter-spacing: 0.5px;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.25);
  margin-top:2px;
`;

const TextRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 5px;
`;

const SubTitle = styled(motion.h2)`
  font-size: 24px;
  font-weight: 700;
  color: #ffffffc3;
  margin-bottom: 10px;
`;

const ManImage = styled(motion.img)`
  flex: 0.4;
  max-height: 500px;
  object-fit: contain;
  filter: drop-shadow(0 0 30px rgba(255, 149, 0, 0.4));
  margin: 0 -40px;
`;

const leftVariant = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 },
  },
};


const popVariant = {
  hover: { textShadow: "0px 0px 3px rgba(255, 255, 255, 0.429)" },
};

const manHoverVariant = {
  hover: {
    scale: 1.05,
    filter: "drop-shadow(0 0 60px rgba(255,149,0,0.9))",
    transition: { duration: 0.3 },
  },
};

const Works = () => {
  return (
    <Section>
      <Container>
        <CollegeCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={rightVariant}
          whileHover={{
            y: -0,
            x: 8,
            scale: 1.03,
            boxShadow: "0 12px 30px rgba(255,149,0,0.5)",
            borderColor: "#ff7b009e",
          }}
        >
          <TitleRow variants={popVariant} whileHover="hover">
            <CircleWrapper variants={popVariant}>
              <LogoCircle src="/img/vit.png" alt="VIT Logo" />
            </CircleWrapper>
            <Title variants={popVariant}>College</Title>
          </TitleRow>

          <SubTitle variants={popVariant} whileHover="hover">
            Vellore Institute of Technology
          </SubTitle>

          <TextRow variants={popVariant} whileHover="hover">
            <Text>B.Tech | CSE Core &nbsp;</Text>
            <StarImage src="/img/star.png" alt="Star Icon" />
            <Text1>&nbsp;CGPA: 8.19/10 &nbsp; &nbsp;</Text1>
          </TextRow>
        </CollegeCard>

        <ManImage
          src="/img/proj.png"
          alt="Standing Man"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={manHoverVariant}
          whileHover="hover"
        />

        <SchoolCard
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={leftVariant}
          whileHover={{
            y: 0,
            x: -8,
            scale: 1.03,
            boxShadow: "0 12px 30px rgba(255,149,0,0.6)",
            borderColor: "#ff7b009c",
          }}
        >
          <TitleRow variants={popVariant} whileHover="hover">
            <CircleWrapper variants={popVariant}>
              <LogoCircle src="/img/dmis.png" alt="DMIS Logo" />
            </CircleWrapper>
            <Title variants={popVariant}>School&nbsp;</Title>
          </TitleRow>

          <SubTitle variants={popVariant} whileHover="hover">
            Doha Modern Indian School
          </SubTitle>

          <TextRow variants={popVariant} whileHover="hover">
            <Text>&nbsp; Class XII | PCMC &nbsp;</Text>
            <StarImage src="/img/star.png" alt="Star Icon" />
            <Text1>&nbsp; Score: 88.2%  &nbsp; &nbsp;</Text1>
          </TextRow>
        </SchoolCard>
      </Container>
    </Section>
  );
};

export default Works;
