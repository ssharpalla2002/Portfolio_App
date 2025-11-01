import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #0a0a0a, #111);
  color: #e0e0e0;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  border-top: 1px solid rgba(255, 136, 0, 0.214);
  box-shadow: 0 -2px 10px rgba(255, 102, 0, 0.1);
`;

const FooterText = styled.p`
  margin: 0;
  letter-spacing: 0.4px;
`;

const Accent = styled.span`
  color: #ffa200;
  font-weight: 600;
  transition: color 0.3s ease;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      © <Accent>Sanjith Harpalla</Accent> 2024 | All rights reserved.
    </FooterText>
  </FooterWrapper>
);

export default Footer;
