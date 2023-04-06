/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="tentang" ref={revealContainer}>
      <NumberedHeading>Tentang Saya</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hi! Saya Bagus, saya seorang sofware engineer berdomisili di Jember - Jawa Timur.</p>
            <p>
              Saya sangat senang mempelajari hal baru dan sangat suka dengan tantangan baru.
            </p>
            <br />
            <p>Ini adalah beberapa framework / bahasa pemograman yang saya kuasai:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={400} height={390} blu src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
