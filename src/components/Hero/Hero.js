import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Démarer un projet <br/>
      </SectionTitle>
      <SectionText>
        Sur ce site web je présente les projets sur les quelles j'ai travailler. <br/>
        Besoin de mes services ? N'hésitez pas à me contacter sur mes différents réseaux 
        sociaux ou encore, sur mon addresse mail. Vous pouvez aussi démarer directement 
        un projet en cliquant juste en dessous. Vous recevrez les informations nécessaire. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Démarer</Button>
    </LeftSection>
  </Section>
);

export default Hero;