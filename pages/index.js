import { FaVolleyballBall } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GrReactjs, GrMoney } from "react-icons/gr";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiNestjs,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import Container from "../components/Container";
import Spacer from "../components/Spacer";
import { PROFILE_LINKS } from "../constants/profileLinks";
import { TOOLS } from "../constants/tools";

export default function Home() {
  const PROJECTS = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non. Enim neque volutpat ac tincidunt. ",
      link: "http://localhost:3000/",
      icon: <MdOutlinePrivacyTip className="text-5xl" />,
      techs: [
        { id: 1, icon: <GrReactjs /> },
        { id: 2, icon: <SiRedux /> },
      ],
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non. Enim neque volutpat ac tincidunt. ",
      link: "http://localhost:3000/",
      icon: <GrMoney className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiNestjs /> },
        { id: 2, icon: <SiDocker /> },
        { id: 3, icon: <SiPostgresql /> },
      ],
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non. Enim neque volutpat ac tincidunt. ",
      link: "http://localhost:3000/",
      icon: <FaVolleyballBall className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiHtml5 /> },
        { id: 2, icon: <SiTailwindcss /> },
      ],
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nibh tellus molestie nunc non. Enim neque volutpat ac tincidunt. ",
      link: "http://localhost:3000/",
      icon: <FiShoppingBag className="text-5xl" />,
      techs: [
        { id: 1, icon: <SiNextdotjs /> },
        { id: 2, icon: <SiTailwindcss /> },
      ],
    },
  ];

  return (
    <Container>
      <Spacer />
      <Spacer />
      <section className="w-full flex items-center justify-center">
        <div>
          <p>Hi, my name is</p>
          <h1 className="font-bold text-3xl">Laurate S.</h1>
          <p className="text-right"> Full Stack Software Engineer & UI Designer </p>
          <div className="flex items-center justify-end space-x-4 mt-3">
            {PROFILE_LINKS.map((profileLink) => (
              <a
                key={profileLink.id}
                href={profileLink.path}
                className="text-3xl"
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
          I&apos;m a Full Stack Software Engineer and Cardiff University graduate residing in the UK. I am self-motivated, performance-driven,
          and a detail-oriented person with extensive knowledge of software designs, development, and testing.
        </p>
        <p>
          I am seeking for a full time Full Stack Software Engineering especially in Java Spring Boot or DevOps role but I am willing to learn!
        </p>
        <p>
         The unique things about me is, I love to play drums, doing digital drawings, travelling and can cook literally anything as long as I put my passion in it.
        </p>
        <p>
         One my core beliefs in life include going above and beyond. I believe it is essential not only for personal achievement and development but also it should reflect back into the work you produce for the clients.
        </p>
      </section>

      <section id="tools" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="border border-neutral-500 dark:border-amber-50 p-4 space-y-4 grid place-items-center"
            >
              <p className="text-4xl">{tool.icon}</p>
              <p className="text-center">{tool.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <Spacer />
        <h2 className="text-2xl font-bold tracking-widest">/projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              // href={project.link}
              className="flex items-center gap-11 justify-center border border-neutral-500 dark:border-amber-50 p-4"
            >
              <a href={project.link} className="">
                {project.icon}
              </a>
              <div>
                <p className="font-bold text-xl">{project.title}</p>
                <small>{project.description}</small>

                <div className="flex items-center gap-1 mt-2">
                  {project.techs.map((tech) => (
                    <span key={tech.id} className="text-lg">
                      {tech.icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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
