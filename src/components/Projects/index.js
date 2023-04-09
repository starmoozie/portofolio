/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable no-return-assign */
import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Icon } from "@components/Icons";
import { projects } from "@config";
import { srConfig } from "@config/sr";
import { PROJECTS_GRID_LIMIT, IS_PRODUCTION } from "@lib/constants";
import { NumberedHeading } from "@common/styles";
// import * as gtag from '@lib/gtag';
import { StyledProject, StyledProjectsSection } from "./styles";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const firstSix = projects.slice(0, PROJECTS_GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    const ScrollReveal = require("scrollreveal");
    const sr = ScrollReveal.default();
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, []);

  // const handleClickProject = (link) => {
  //   if (IS_PRODUCTION) {
  //     gtag.event('click_project', 'projects', 'user clicked on project link button', link);
  //   }
  //   window.open(link, '_blank');
  // };

  return (
    // <StyledProjectsSection>
    <section id="pengalaman">
      <NumberedHeading ref={revealTitle}>Pengalaman Kerja.</NumberedHeading>
      {/*   <Link href="/archive">
            <a className="archive-link inline-link">View all projects</a>
          </Link> */}
      <div>
        <TransitionGroup className="projects-grid">
          {projectsToShow &&
            projectsToShow.map((project, i) => {
              const { title, descriptionHtml, from, to, techs } = project;

              return (
                <CSSTransition
                  key={title}
                  in
                  classNames="fadeup"
                  timeout={
                    i >= PROJECTS_GRID_LIMIT
                      ? (i - PROJECTS_GRID_LIMIT) * 300
                      : 300
                  }
                  exit={false}
                >
                  <StyledProject
                    key={title}
                    ref={(el) => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${
                        i >= PROJECTS_GRID_LIMIT
                          ? (i - PROJECTS_GRID_LIMIT) * 100
                          : 0
                      }ms`,
                    }}
                  >
                    <div className="project-inner">
                      <header>
                        <div className="project-top">
                          <div className="folder">
                            <Icon name="Folder" />
                          </div>
                          <div
                            className="project-links"
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            {from && <span>{from}</span>}-
                            {to && <span>{to}</span>}
                          </div>
                        </div>

                        <h3 className="project-title">{title}</h3>

                        <div
                          className="project-description"
                          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                        />
                      </header>

                      <footer>
                        {techs && (
                          <ul className="project-tech-list">
                            {techs.map((tech) => (
                              <li key={tech}>{tech}</li>
                            ))}
                          </ul>
                        )}
                      </footer>
                    </div>
                  </StyledProject>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </div>
    </section>
    // </StyledProjectsSection>
  );
};

export default Projects;
