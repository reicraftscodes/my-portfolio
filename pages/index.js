import Container from "../components/Container";
import Spacer from "../components/Spacer";
import { PROFILE_LINKS } from "../constants/profileLinks";
import { PROJECTS } from "../constants/projects";
import { TOOLS } from "../constants/tools";
import { Tooltip } from 'react-tooltip'
import React, { useState } from "react";
import ProjectModal from "../components/Modal";
import BlogList from "../components/BlogList";

export default function Home() {

  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };
  return (
    <Container>
      <Spacer />
      <Spacer />
      <section className="w-full flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl ">Laurate S.</h1>
          <p className="text-right"> UI/UX Designer | Developer </p>
          <div className="flex items-center justify-end space-x-4 mt-3">
            {PROFILE_LINKS.map((profileLink) => (
              <a
                key={profileLink.id}
                href={profileLink.path}
                className="text-3xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
              >
                {profileLink.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/about</h2>
        <p>
          Hi, I&apos;m Laurate (Loh-rey), you can call me May. I&apos;m based in Vale of Glamorgan, South Wales UK. I&apos;m self-motivated, performance-driven, and a detail-oriented person with extensive experience of of UX designs and product development for enterprise applications and API.
        </p>
        <p>
        Additionally, I have consistently proven to be a fast learner, independent, and critical thinker. I am interested in pursuing a master&apos;s degree in Artificial Intelligence to deepen my understanding of advanced AI concepts and Human Centric Computing </p>
        <p>
          My hobbies include reading novels, playing online/video games, acrylic painting, photography, traveling, and cooking. I like to play drums although my right ear may be deaf, I can still play the drums. Cool right?
        </p>
      </section>
      
         {/* Blogging section */}
         <section id="blog" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/blog</h2>
        <BlogList />
      </section>

      <section id="projects" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-5 justify-center border border-neutral-500 dark:border-amber-50 p-4"
              data-tip={project.title}
            >
              <a href={project.link} onClick={() => openModal(project)}>
                <div className="flex">
                  <picture>
                    <img src={project.image} className="flex-shrink w-70 h-50 object-cover" alt="Project cover" />
                  </picture>
                </div>
              </a>
              <div >
                <p className="font-bold text-base">{project.title}</p>
                <small>{project.description}</small>

                <div className="flex items-center gap-1 mt-2">
                  {project.techs.map((tech) => (
                    <span key={tech.id}
                      className="text-lg" data-tooltip-id="my-tooltip-inline"
                      data-tooltip-content={tech.name}
                    >
                      {tech.icon}
                    </span>
                  ))}
                </div>
                <small>{project.other}</small>
              </div>
            </div>
          ))}
          {modalProject && <ProjectModal project={modalProject} onClose={closeModal} />}
        </div>
        <Tooltip id="my-tooltip-inline" style={{ backgroundColor: "rgb(55, 55, 55)", color: "#fff" }} />
      </section>

      <section id="tools" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/skills & technologies</h2>
        <p>If you are wondering what technologies and practices I have used, here is the list of technologies I have implemented primarily on my work experience, freelancing and personal projects!</p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="border border-neutral-500 dark:border-amber-50 p-4 space-y-4 grid place-items-center"
            >
              <p className="text-center">{tool.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/contact</h2>
        <p>
          My inbox is always open, whether you have a question or just want to say hello, I will try my best to get back to you! Kindly reach out to me on my Facebook page{' '}
          <a href="https://www.facebook.com/BlueCloudITSolution" style={{ textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
            @BlueCloudITSolution
          </a>{' '} or email{' '} <a href="mailto:lauraojenas@yahoo.com" style={{ textDecoration: 'underline' }}> lauraojenas@yahoo.com </a>
        </p>
      </section>

      <Spacer />
      <section className="grid place-items-center">
        <figure className="text-sm space-y-3">
          <blockquote className="italic">
            &quot;It is not about ideas. It is about making ideas happen&quot;
          </blockquote>
          <figcaption className="text-right">- Scott Belsky</figcaption>
          <Spacer />
        </figure>
      </section>

    </Container>
  );
}
