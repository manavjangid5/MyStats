import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
//already imported som eglobles components sections

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome !!<br/>
        To Portfolio of Manav Jangid.
      </SectionTitle>
      <SectionText>
      Hi there, This is my portfolio website.<br/>I am working to find work. Competetive programmer, having decent efficiency in Data Structure and Algorithms and C++.
      </SectionText>
      <Button onClick={()=>window.location='https://drive.google.com/file/d/15pntR9pIu92KS241pxU6fsY4ekuhoPWM/view?usp=sharing'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;