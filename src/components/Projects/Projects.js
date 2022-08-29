import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo = [1,2,3,4];
//If you want change the project title and description just simply go to constatnt.js file 
//on line 16 include what you want to display on the site. beacuse in that the whole project section is created.
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        // <div>
        //   {project.title}
        //   <br/>
        //   {project.description}
        // </div>
        <BlogCard key={project.id}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {
                project.tags.map((tag,i)=>(
                  <Tag key={i}>{project.tag}</Tag>
                ))
              }
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;