import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  scroll-behavior: smooth;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.a`
margin-left:100px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.98);
  }

  img {
    height: 48px;
    width: auto;
    object-fit: contain;
    cursor: pointer;
    user-select: none;
    transition: transform 0.3s ease;
  }

  span {
    font-size: 20px;
    font-weight: 600;
    color: white;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
    transition: color 0.3s ease;
  }

  &:hover span {
    color: #ffa200;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.a`
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #ffca8a;
  }
`;

const Icons = styled.div`
margin-left:250px;
  display: flex;
  gap: 205px;
`;

const Button = styled.a`
  min-width: 100px;
  min-height: 28px;
  font-size: 15px;
  padding: 2px 4px;
  background-color: #9c0000;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover {
    background-color: #b30000;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo href="#Hero">
            <img src="./img/logo.png" alt="Logo" />
          </Logo>
          <List>
            <ListItem href="#Who">Overview</ListItem>
            <ListItem href="#Works">Education</ListItem>
            <ListItem href="#Experience">Experience</ListItem>
            <ListItem href="#Projects">Projects</ListItem>
          </List>
        </Links>
        <Icons>
          <Button href="#Contact">Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;