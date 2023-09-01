/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { email, phone } from "@config";
import { NAV_DELAY, LOADER_DELAY } from "@lib/constants";
import { StyledHeroSection, StyledBigTitle } from "./styles";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, saya</h1>;
  const two = <StyledBigTitle>Bagus YK.</StyledBigTitle>;
  const three = <StyledBigTitle slate>Software Engineer.</StyledBigTitle>;
  const four = (
    <p></p>
  );
  const five = (
    <a href={`https://wa.me/${phone}`} className="email-link">
      Hubungi saya
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition
              key={i}
              classNames="fadeup"
              timeout={LOADER_DELAY}
              in
            >
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
