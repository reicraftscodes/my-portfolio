import { GrReactjs } from "react-icons/gr";
import { FaJava, FaNodeJs, FaBootstrap   } from "react-icons/fa";
import {
  SiRedux,
  SiHeroku,
  SiCypress,
  SiExpress,
  SiSpring,
  SiJunit5,
  SiAndroidstudio,
  SiMysql,
  SiPostman,
  SiJest,
  SiMongodb, 
} from "react-icons/si";
import Container from "../components/Container";
import Spacer from "../components/Spacer";
import { PROFILE_LINKS } from "../constants/profileLinks";
import { TOOLS } from "../constants/tools";
import { Tooltip } from 'react-tooltip'


export default function Home() {
  const PROJECTS = [
    {
      id: 1,
      title: "UAS Management Application (Frontend)",
      description: "An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis.",
      link: "https://github.com/reicraftscodes/uas-lifecycle-management-frontend",
      image: "/images/uasweband.jpg",
      techs: [
        { id: 1, name: "React.js",icon: <GrReactjs /> },
        { id: 2, name: "Redux", icon: <SiRedux /> },
        { id: 3, name: "Cypress", icon: <SiCypress /> },
        { id: 4, name: "Heroku", icon: <SiHeroku  /> },
        { id: 5, name: "Java", icon: <FaJava/> },
        { id: 6, name: "Android Studio", icon: <SiAndroidstudio  /> },
      ],
      other: "#End-to-end Testing #BDD"
    },
    {
      id: 2,
      title: "UAS Management Application (Backend)",
      description: "An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis.",
      link: "https://github.com/reicraftscodes/uas-lifecycle-management",
      image: "/images/uasbe.jpg",
      techs: [
        { id: 1, name: "Java", icon: <FaJava/> },
        { id: 2, name: "Spring", icon: <SiSpring /> },
        { id: 3, name: "Junit5", icon: <SiJunit5 /> },
        { id: 4, name: "MySQL ", icon: <SiMysql  /> },
        { id: 5, name: "Heroku", icon: <SiHeroku /> },
        { id: 6, name: "Postman", icon: <SiPostman  /> },
      ],
      other: "#Unit testing #Integration Test #TDD #BDD"
    },
    {
      id: 3,
      title: "ActiveBee real-time web application",
      description: " A real-time web chat application that aims for university students to connect with everyone in the university during the pandemic COVID19 and to tackle loneliness. ",
      link: "https://github.com/reicraftscodes/web-chat-application",
      image: "/images/activebee.jpg",
      techs: [
        { id: 1, name: "React.js",icon: <GrReactjs /> },
        { id: 2, name: "Node.js ", icon: <FaNodeJs  /> },
        { id: 3, name: "Express.js", icon: <SiExpress /> },
        { id: 4, name: "Mongodb  ", icon: <SiMongodb   /> },
        { id: 5, name: "Jest ", icon: <SiJest /> },
        { id: 6, name: "Bootstrap CSS ", icon: <FaBootstrap /> },
      ],
      other: "#End-to-end Testing"
    },
  ];

  return (
    <Container>
      <Spacer />
      <Spacer />
      <section className="w-full flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl ">Laurate S.</h1>
          <p className="text-right"> Full Stack Software Engineer & UI/UX Designer </p>
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
        Hi, I&apos;m Laurate a software engineer based in the UK and Cardiff University graduate residing in the UK. I&apos;m proudly deaf, self-motivated, performance-driven, and a detail-oriented person with extensive knowledge of software designs, development, and testing.
        </p>
        <p>
          Currently, I am seeking for a full time Full Stack Software Engineering especially in Java Spring, but I am open to any opportunities and always willing to learn!
        </p>
        <p>
          My hobbies are reading novels, acrylic painting, photography, travelling and can cook literally anything as long as I put my heart into it.
        </p>
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

      <section id="projects" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-11 justify-center border border-neutral-500 dark:border-amber-50 p-4"
              data-tip={project.title}
            >
              <a href={project.link} className=""><img src={project.image} className="max-w-full h-auto" /></a>
              <div>
                <p className="font-bold text-lg">{project.title}</p>
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
        </div>
        <Tooltip  id="my-tooltip-inline" style={{ backgroundColor: "rgb(55, 55, 55)", color: "#fff" }}/>
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
