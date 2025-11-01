import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
`;

const Title = styled(motion.h1)`
  font-family: "Dancing Script", cursive;
  font-size: 3.5rem;
  text-align: center;
  background: linear-gradient(90deg, #ffa200, #ff6a00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CarouselWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 700px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(motion.div)`
  width: 130%;
  height: 70%;
  background: linear-gradient(160deg, rgba(40, 40, 40, 0.412), rgba(20, 20, 20, 0));
  border: 7px solid #ffa200;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 162, 0, 0.3);
  padding: 25px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SubTitle = styled.h2`
  font-size: 1.3rem;
  margin: 2px;
  color: #ffd580;
  text-align: center;
`;

const Company = styled.h3`
  font-size: 1.1rem;
  color: #ffb341;
  margin-bottom: 10px;
  margin-top: 5px;
`;

const Description = styled.ul`
  color: #fff;
  font-size: 0.75rem;
  line-height: 1;
  text-align: left;
  margin-top: 8px;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin-bottom: 8px;
    opacity: 0.9;
    position: relative;

    &::marker {
      color: #ffa200;
    }
  }
`;

const NavButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff9500, #ff5e00);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 162, 0, 0.4);
  transition: 0.3s ease;
  position: absolute;
  z-index: 10;

  &:hover {
    scale: 1.15;
    box-shadow: 0 0 25px rgba(255, 162, 0, 0.7);
  }

  &:active {
    scale: 0.95;
  }
`;

const LeftButton = styled(NavButton)`
  left: -50px;
`;

const RightButton = styled(NavButton)`
  right: -50px;
`;

const Separator = styled.hr`
  width: 93%;
  border-radius:50px;
  border-top: 4px solid rgba(255, 162, 0, 0.907);
  margin: 10px 0 15px 0;
`;

const experiences = [
    {
    title: "Vice President",
    company: "Toastmasters International",
    description: [
      "Led mentorship programs developing communication skills.",
      "Managed club operations and executive leadership coordination.",
      "Represented club professionally in district-level conferences.",
    ],
    image: "/img/s2.png",
  },
  {
    title: "Core Committee Member",
    company: "IET-VIT",
    description: [
      "Organized event logistics and coordinated hackathons.",
            "Led workshops and backend development training sessions.",
      "Mentored peers in practical web application projects.",
    ],
    image: "/img/s1.png",
  },
  {
    title: "Web Designer",
    company: "IxDa",
    description: [
      "Designed responsive layouts focused on user experience.",
      "Converted Figma mockups into interactive working interfaces.",
      "Implemented animations to enhance visual engagement.",
    ],
    image: "/img/s3.png",
  },
  {
    title: "Marketing Manager",
    company: "AIESEC",
    description: [
      "Executed targeted digital marketing strategies for outreach.",
      "Produced engaging content improving social media presence.",
      "Collaborated with global teams on impactful initiatives.",
    ],
    image: "/img/s4.png",
  },
];


const Experience = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextCard = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      rotateY: direction > 0 ? 30 : -30,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      rotateY: direction < 0 ? 30 : -30,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const exp = experiences[index];

  return (
    <Section id="experience">
      <Title
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={fadeUp}
      >
        Experience
      </Title>

      <CarouselWrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        variants={fadeUp}
      >
        <LeftButton whileTap={{ scale: 0.9 }} onClick={prevCard}>
          <FaChevronLeft />
        </LeftButton>

        <CardContainer>
          <AnimatePresence custom={direction} mode="wait">
            <Card
              key={exp.title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 15px 40px rgba(255,162,0,0.6)",
                borderColor: "#ff8c00",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
            >
              <ImageWrapper>
                <CardImage src={exp.image} alt={exp.title} />
              </ImageWrapper>

              <SubTitle>{exp.title}</SubTitle>
              <Company>{exp.company}</Company>
              <Separator />
              <Description>
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </Description>
            </Card>
          </AnimatePresence>
        </CardContainer>

        <RightButton whileTap={{ scale: 0.9 }} onClick={nextCard}>
          <FaChevronRight />
        </RightButton>
      </CarouselWrapper>
    </Section>
  );
};

export default Experience;
