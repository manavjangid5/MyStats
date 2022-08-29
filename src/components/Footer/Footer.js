import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel : +91-9079712079">+91-9079712079</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>EMAIL</LinkTitle>
          <LinkItem href="mailto : manavjangid5@gmail.com">manavjangid5@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Hard Work and Perseverance is the key.</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/manavjangid5">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/manav-jangid-137a2422a/?originalSubdomain=in">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/profile.php?id=100009700125808">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
