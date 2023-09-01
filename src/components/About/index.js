/* eslint-disable global-require */
import { useEffect, useRef } from "react";
import { NumberedHeading } from "@common/styles";
import Image from "next/image";
import { skills } from "@config";
import { srConfig } from "@config/sr";
import { StyledAboutSection, StyledText, StyledPic } from "./styles";

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal");
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="tentang" ref={revealContainer}>
      <NumberedHeading>Tentang Saya</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! Saya Bagus, saya seorang sofware engineer berdomisili di
              Jember - Jawa Timur.
              Saat ini saya sedang berkelana mencari jati diri.
            </p>
            <p>
              Saya sangat senang mempelajari hal baru dan sangat suka dengan
              tantangan baru. Saya juga seorang yang periang dan humoris.
            </p>
            <p>
              Hal yang saya kuasai beberapa adalah, Sistem Analis, Data Analis, ERD, DFD, FlowChart, Leadership
            </p>
            <p>
              Middle range, Infrastruktur, Mikrotik, Server, DevOps
            </p>
            <p>
              Yang saya tidak bisa itu UI, mungkin memang tidak ada bakat disana :D
            </p>
            <p>
              Yang saya tidak suka itu pembuatan dokumentasi :D
            </p>
            <p>
              Diluar programming juga bisa Support / Teknisi Hardware Software Jaringan ( Mikrotik ) / Editing Video - Foto / Audio Music Recording - Music Composer
            </p>
            <br />
            <p>
              Kejar jam tayang YouTube / Akun monetesisasi YouTube / Kejar $10 pertama juga siaappp...
            </p>
            <br />
            <p>
              Dibawah ini adalah beberapa framework / bahasa pemograman yang saya
              kuasai:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image
              width={400}
              height={390}
              src="/avatar.png"
              alt="Avatar"
              className="img"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
