import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const projects = [
  { title: "AI Agent", image: "/img/p6.png", githubUrl: "https://github.com/ssharpalla2002/Finex_Agent", tools: ["Python", "Langgraph", "Streamlit", "ChromaDB"] },
  { title: "AI Chatbot", image: "/img/p5.png", githubUrl: "https://github.com/ssharpalla2002/Shiksha_GPT", tools: ["Python", "Langchain", "Chainlit", "VectorDB"] },
  { title: "Movie Streaming App", image: "/img/p4.png", githubUrl: "https://github.com/ssharpalla2002/Movie_Streaming_App", tools: ["React.js", "Node.js", "Express.js", "MongoDB"] },
   { title: "Social Media App", image: "/img/p3.png", githubUrl: "https://github.com/ssharpalla2002/Social_Media_App", tools: ["React.js", "Node.js", "Express.js", "MySQL"] },
  { title: "Real Estate Marketplace", image: "/img/p2.png", githubUrl: "https://github.com/ssharpalla2002/Real_Estate_Marketplace", tools: ["React.js", "Node.js", "Express.js", "MongoDB"] },
  { title: "Restaurant Website", image: "/img/p1.png", githubUrl: "https://github.com/ssharpalla2002/Restaurant_Website", tools: ["React.js","Next.js", "Tailwind CSS"] }
];

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  box-sizing: border-box;
  color: white;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StandingMan = styled.img`
  width: 400px;
  height: 550px;
  margin-right: 50px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 0 0 0 rgba(255, 165, 0, 0);

  &:hover {
    transform: translateY(-5px) scale(1.03);
  }
`;

const CardLarge = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: linear-gradient(145deg, #0d0d0dc8, #1a1a1ad5);
  border: 2px solid #ffffff35;
  box-shadow: 0 8px 25px rgba(255, 140, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 20px;
    background: radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    filter: blur(10px);
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 25px rgba(255, 165, 0, 0.25);
    border-color: #ff990045;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const LargeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Tools = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tool = styled.span`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 600;
  color: white;
  background-color: #880000e0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c70000;
    color: #fff;
    box-shadow: 0 0 10px rgba(199, 0, 0, 0.5);
    transform: translateY(-2px);
  }
`;

const GitHubLink = styled.a`
  margin-left: auto;
  color: white;
  font-size: 1.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-shadow: 0 0 12px rgba(255, 174, 0, 0.8);
    transform: rotate(8deg) scale(1.08);
  }
`;

const MenuCard = styled.div`
  border: 2px solid #ffffff41;
  margin-right: 150px;
  width: 70px;
  border-radius: 15px;
  height: 290px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
  box-shadow: 0 6px 20px rgba(255, 140, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 12px;
    background: radial-gradient(circle, rgba(255, 165, 0, 0.4) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(8px);
  }

  &:hover {
    box-shadow: 0 0 25px rgba(255, 165, 0, 0.3);
    border-color: #ff990045;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ProjectNumber = styled.div`
  font-size: 1.2rem;
  font-weight: ${({ selected }) => (selected ? "700" : "500")};
  color: ${({ selected }) => (selected ? "#ffae00" : "#ddd")};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: rgba(255, 153, 0, 0.2);
    color: #ffae00;
    transform: translateX(3px);
  }
`;

const ProjectLargeCard = ({ project }) => (
  <CardLarge>
    <h2
      style={{
        fontWeight: "700",
        fontSize: "1.4rem",
        letterSpacing: "0.5px",
        textAlign: "center",
      }}
    >
      {project.title}
    </h2>
    <LargeImage src={project.image} alt={project.title} />
    <Tools>
      {project.tools.map((tool) => (
        <Tool key={tool}>{tool}</Tool>
      ))}
      <GitHubLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </GitHubLink>
    </Tools>
  </CardLarge>
);

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Section>
      <Column>
        <StandingMan src="/img/proj1.png" alt="Standing Man" />
      </Column>

      <Column>
        <ProjectLargeCard project={projects[selectedIndex]} />
      </Column>

      <Column>
        <MenuCard>
          {projects.map((_, index) => (
            <ProjectNumber
              key={index}
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              #{index + 1}
            </ProjectNumber>
          ))}
        </MenuCard>
      </Column>
    </Section>
  );
};

export default Projects;
