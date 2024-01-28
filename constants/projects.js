import { GrReactjs } from "react-icons/gr";
import { FaJava, FaNodeJs, FaBootstrap, FaFigma} from "react-icons/fa";
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
  SiPhp,
  SiWordpress,
  SiThymeleaf,
} from "react-icons/si"

export const PROJECTS = [
    {
      id: 1,
      title: "CoDeaf Tech Community",
      description: " A CoDeaf is a web-based platform designed to inspire and empower the deaf and hard-of-hearing community to learn programming and UX/UI design.",
      fullDesc: `
      <ul>
        <li>Paragraph 1: </li>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id. Imperdiet proin fermentum leo vel orci porta non pulvinar. Tempor id eu nisl nunc mi ipsum. Amet porttitor eget dolor morbi non arcu. Ultrices gravida dictum fusce ut placerat. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Natoque penatibus et magnis dis. Aliquam eleifend mi in nulla. Turpis massa sed elementum tempus. Eu scelerisque felis imperdiet proin fermentum. Ultrices mi tempus imperdiet nulla malesuada. Nunc sed velit dignissim sodales ut eu sem. Venenatis tellus in metus vulputate eu. Quam vulputate dignissim suspendisse in est ante in nibh mauris.</li>
        </ul>
       
        <li>Paragraph 2:</li>
        <ul>
          <li>Sagittis vitae et leo duis. Tempor orci eu lobortis elementum nibh. Risus quis varius quam quisque id diam. Amet cursus sit amet dictum sit amet. Ante metus dictum at tempor commodo ullamcorper a lacus. Tellus in hac habitasse platea dictumst. In hac habitasse platea dictumst vestibulum rhoncus est. Elementum tempus egestas sed sed risus. Nunc sed id semper risus in hendrerit. Tincidunt lobortis feugiat vivamus at augue.</li>
        </ul>

        <li>Paragraph 3:</li>
        <ul>
        <li>Sapien eget mi proin sed libero enim sed. Urna porttitor rhoncus dolor purus. Pellentesque dignissim enim sit amet venenatis urna. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Quam id leo in vitae. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. A diam sollicitudin tempor id eu nisl nunc. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Sit amet massa vitae tortor condimentum. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Feugiat in ante metus dictum. Aliquam etiam erat velit scelerisque in dictum. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Cras sed felis eget velit. Pellentesque elit eget gravida cum sociis. Ultrices dui sapien eget mi. Eget magna fermentum iaculis eu non diam phasellus. Vitae tortor condimentum lacinia quis vel.</li>
      </ul>
      </ul>
    `,
      
      image: "/images/codeaf.jpg",
      techs: [
        { id: 1, name: "Figma",icon: <FaFigma /> },
        { id: 2, name: "React.js",icon: <GrReactjs /> },
        { id: 3, name: "Java", icon: <FaJava/> },
      ],
      other: "ONGOING PROJECT"
    },
    {
      id: 2,
      title: "UAS Management Application (Backend)",
      description: "An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis.",
      fullDesc: "The project is ongoing",
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
      title: "UAS Management Application (Frontend)",
      description: "An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis.",
      fullDesc: "The project is ongoing",
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
      id: 4,
      title: "ActiveBee real-time web application",
      description: " A real-time web chat application that aims for university students to connect with everyone in the university during the pandemic COVID19 and to tackle loneliness. ",
      fullDesc: "The project is ongoing",
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
    {
      id: 5,
      title: "Accu-Serve Customs Brokerage",
      fullDesc: "The project is ongoing",
      description: " A brokerage web application that aims to help clients with the highest quality of customs brokerage service available and to provide them innovative solutions and expertise. ",
      image: "/images/accuserve.jpg",
      techs: [
        { id: 1, name: "Wordpress",icon: <SiWordpress   /> },
        { id: 2, name: "Php ", icon: <SiPhp  /> },
      ],
      other: ""
    },
    {
      id: 5,
      title: "Skill-Sharing Web Application",
      description: "A skill-sharing platform designed for employees of the Office of National Statistics that enables them to provide and seek assistance on issues relevant to the topics they choose.",
      fullDesc: "The project is ongoing",
      image: "/images/ons.jpg",
      techs: [
        { id: 1, name: "Java", icon: <FaJava/> },
        { id: 2, name: "Spring", icon: <SiSpring /> },
        { id: 3, name: "Thymeleaf", icon: <SiThymeleaf  /> },
        { id: 4, name: "Bootstrap CSS ", icon: <FaBootstrap /> },
      ],
      other: "#Spring MVC #Mockito #Unit Testing"
    },
  ];
