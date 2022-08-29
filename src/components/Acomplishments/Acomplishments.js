import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 598, text: 'Rank out of 85k participants in IICC by AICTE 2022 Round 1.'},
  { number: 929, text: 'Rank out of 10k participants in JANUARY 2022 Codechef Starters.'},
  { number: 1042, text: 'Max. Rating on Codeforces.', },
  { number: 1630, text: 'Max. Rating on Codechef.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personel Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
