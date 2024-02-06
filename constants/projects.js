import { GrReactjs } from "react-icons/gr";
import { FaJava, FaNodeJs, FaBootstrap, FaFigma } from "react-icons/fa";
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
  SiPython,
  SiFlask,
  SiJinja,
  SiSqlite,
  SiNextdotjs,
  SiVercel
} from "react-icons/si"

export const PROJECTS = [
  {
    id: 1,
    title: "LMS Portfolio",
    description: " A LMS Portfolio website containing the cool stuff I have worked on ",
    fullDesc: `
      <ul>
        <li style="font-weight: bold">Project Description: </li>
        <p> The LMS Portfolio is personal portfolio website of mine where I proudly display a diverse range of projects, highlighting my skills, and make it easy for you to get in touch by providing my contact information all in one convenient place for your exploration. </p>
        <br>
        <li style="font-weight: bold; "> Project Link: <a style="text-decoration: underline; " href="https://github.com/reicraftscodes/my-portfolio" target="_blank"> https://github.com/reicraftscodes/my-portfolio</a> </li>
        <br>
        <li style="font-weight: bold">Features: </li>
        <li>Here are some possible features that I would like to implement</li>
        <br>
        <ul>
          <li> - Dark Mode and Light Mode: Implemented a visually appealing and user-friendly interface with the option to switch between dark and light modes to enhance user experience based on personal preferences. </li>
          <li> - Responsive Design: Ensured the website is responsive and adapts seamlessly to different screen sizes and devices, providing a consistent and optimized experience for users on desktops, tablets, and mobile devices.</li>
          <li> - Smooth Navigation: Implemented an intuitive navigation system, allowing users to effortlessly explore the various sections of the website, enhancing the overall accessibility and user experience.</li>
         </ul>
        <br>
        <li style="font-weight: bold">Technologies: </li>
        <ul>
          <li> - Next.js </li>
          <li> - React.js </li>
          <li> - Vercel for deployment </li>
        </ul>
        <br>
        <li> Published date:  JANUARY 2024 </li>
      </ul>
    `,
    image: "/images/portfolio.jpg",
    techs: [
      { id: 1, name: "Next.js ", icon: <SiNextdotjs /> },
      { id: 2, name: "React.js", icon: <GrReactjs /> },
      { id: 3, name: "Vercel ", icon: <SiVercel /> },
    ],
    other: "#Portfolio"
  },
  {
    id: 2,
    title: "CoDeaf Tech Community",
    description: " A CoDeaf is a web-based tech platform for deaf & hard of hearing ",
    datePublished: "DECEMBER 2023 - PRESENT",
    fullDesc: `
      <ul>
        <li style="font-weight: bold">Project Description: </li>
        <p>A CoDeaf is a web-based platform designed to inspire and empower the deaf and hard-of-hearing community to learn programming and UX/UI design.  </p>
        <br>
        <li> The project is still in Figma UI design phase </li>
        <li style="font-weight: bold; "> Project Link: <a style="text-decoration: underline; " href="https://www.figma.com/file/us1r7fPWHNPcGV6muMG4dB/CoDeaf?type=design&node-id=0%3A1&mode=design&t=o40kTxaPLJfD293u-1t" target="_blank"> Figma url </a> </li>
        <br>
        <li style="font-weight: bold">Features: </li>
        <li>Here are some possible features that I would like to implement</li>
        <br>
        <ul>
          <li> - Welcome Page: Create a welcoming landing page introducing the mission and purpose of CoDeaf, providing an overview of what the platform offers.</li>
          <li> - Tips and Tricks Section: Provide a section with practical tips and tricks for learning programming and design, specifically tailored to the needs of individuals with hearing impairments </li>
          <li> - Events Calendar: Display a calendar featuring upcoming events, webinars, and workshops related to programming and UX/UI design that are accessible to the deaf and hard-of-hearing community.</li>
          <li> - Community Spotlight: Showcase success stories, projects, and achievements within the CoDeaf community to inspire and motivate learners.</li>
          <li> - Contact and Support: Include a contact page with support information for users to ask questions or seek assistance.</li>
          <li> - Educational Resources: Compile a curated list of accessible programming and UX/UI design resources, including tutorials, articles, and videos. Ensure content is presented in a way that is accessible to the deaf and hard-of-hearing community.</li>
        </ul>
        <br>
        <li style="font-weight: bold">Technologies: </li>
        <ul>
          <li> - Next.js </li>
          <li> - React.js </li>
          <li> - Spring </li>
        </ul>
        <br>
        <li> Published date: DECEMBER 2023 - PRESENT</li>
      </ul>
    `,

    image: "/images/codeaf.jpg",
    techs: [
      { id: 1, name: "React.js", icon: <GrReactjs /> },
      { id: 2, name: "Java", icon: <FaJava /> },
      { id: 3, name: "Spring", icon: <SiSpring /> },

    ],
    other: "#TechCommunity"
  },
  {
    id: 3,
    title: "UAS Management Application (Backend)",
    description: "Spring Backend REST API for web and android for UAS Management Application",
    fullDesc: `
      <ul>
        <li style="font-weight: bold">Project Description: </li>
        <p> An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis. Inaddition to this,
        the lifecycle management system will also give access to unmanned aerial system parts stock with
        supplier locations and the ability to generate a purchase order to automatically request additional
        stock and assign parts from the different locations, as discussed.</p>
        <br>
        <p>In the development of inventory and tracking system for unmanned aircraft, we employed the Agile Scrum framework to ensure a flexible and collaborative approach. </p>
        <br>
        <li>Client: <a style="text-decoration: underline;" href="https://www.sncmsuk.com/" target="_blank"> Sierra Nevada Corporation Mission Systems UK · (SNC MS UK)</a> </li>
        <br>
        <li style="font-weight: bold; "> Project Link: </li>

        <li><a style="text-decoration: underline; " href="https://github.com/reicraftscodes/uas-lifecycle-management" target="_blank">https://github.com/reicraftscodes/uas-lifecycle-management</a> </li>
        <br>
        <li style="font-weight: bold">Features: </li>
        <ul>
          <li> - MVC for Spring boot </li>
          <li> - RESTFUL API </li>
          <li> - Cloud Hosting: Automated pipelines in Gitlab CI-CD to automatically test and deploy the application which also includes the Mysql JAW to a cloud provider using Heroku by the user. </li>
          <li> - Performance/Benchmark tested by Loadmill Automated Testing </li>
          <li> - Core layer:  Login, Register, Gmail SMTP (Email) API </li>
          <li> - Business layer: Inventory, Monitoring Stocks API </li>
          <li> - C4 Diagram to visualise architecture diagram </li>
        </ul>
        <br>
        <li style="font-weight: bold">Technologies used: </li>
        <ul>
          <li> - Java, Spring, Spring Web JPA Security, Junit5, Mockito </li>
          <li> - Heroku </li>
          <li> - PostMan </li>
          <li> - Structurizr </li>
          <li> - Android development : MVVM, OkHttp, Retrofit </li>
        </ul>
        <br>
        <li> Published date: DECEMBER 2021 - MARCH 2022 </li>
      </ul>
    `,
    image: "/images/uasbe.jpg",
    techs: [
      { id: 1, name: "Java", icon: <FaJava /> },
      { id: 2, name: "Spring", icon: <SiSpring /> },
      { id: 3, name: "Junit5", icon: <SiJunit5 /> },
      { id: 4, name: "MySQL ", icon: <SiMysql /> },
      { id: 5, name: "Heroku", icon: <SiHeroku /> },
      { id: 6, name: "Postman", icon: <SiPostman /> },
    ],
    other: "#Unit-testing #Integration-Testing #TDD #BDD"
  },
  {
    id: 4,
    title: "UAS Management Application (Frontend)",
    description: "A web and android inventory and tracking system for UAS Management App",
    datePublished: "DECEMBER 2021 - MARCH 2022",
    fullDesc: `
      <ul>
      <li style="font-weight: bold">Project Description: </li>
      <p> An inventory and tracking system to track the unmanned aircraft through their lifecycle, providing access to the aircraft status, costs and fault trend analysis. Inaddition to this,
      the lifecycle management system will also give access to unmanned aerial system parts stock with
      supplier locations and the ability to generate a purchase order to automatically request additional
      stock and assign parts from the different locations, as discussed.</p>
      <br>
      <p>In the development of inventory and tracking system for unmanned aircraft, we employed the Agile Scrum framework to ensure a flexible and collaborative approach. </p>
      <br>
      <li>Client: <a style="text-decoration: underline;" href="https://www.sncmsuk.com/" target="_blank"> Sierra Nevada Corporation Mission Systems UK · (SNC MS UK)</a> </li>
      <br>
      <li style="font-weight: bold; "> Project Link: </li>
      <ul>
      <li> Web frontend repository- <a style="text-decoration: underline; " href="https://github.com/reicraftscodes/uas-lifecycle-management" target="_blank"> https://github.com/reicraftscodes/uas-lifecycle-management</a> </li>
      <li> Android project repository- <a style="text-decoration: underline; " href="https://github.com/reicraftscodes/uas-lifecycle-management-android" target="_blank"> https://github.com/reicraftscodes/uas-lifecycle-management-android </a>  </li>
      </ul>
      <br>
      <li style="font-weight: bold">Features: </li>
      <ul>
        <li> - Aircraft inventory and monitoring stocks web and mobile ui view  </li>
      </ul>
      <br>
      <li style="font-weight: bold">Technologies used: </li>
      <ul>
        <li> - React.js, React Router, Redux for state management</li>
        <li> - Material UI Components </li>
        <li> - Cypress for end-to-end testing</li>
        <li> - Adnroid development </li>
      </ul>
      <br>
      <li> Published date: DECEMBER 2021 - MARCH 2022 </li>
    </ul>
  `,
    image: "/images/uasweb.jpg",
    techs: [
      { id: 1, name: "React.js", icon: <GrReactjs /> },
      { id: 2, name: "Redux", icon: <SiRedux /> },
      { id: 3, name: "Cypress", icon: <SiCypress /> },
      { id: 4, name: "Heroku", icon: <SiHeroku /> },
      { id: 5, name: "Java", icon: <FaJava /> },
      { id: 6, name: "Android Studio", icon: <SiAndroidstudio /> },
    ],
    other: "#End-to-end Testing #BDD"
  },
  {
    id: 5,
    title: "ActiveBee",
    description: " A real-time web chat application that aims for Cardiff university students",
    fullDesc: `
      <ul>
        <li style="font-weight: bold">Project Description: </li>
        <ul>
          <li>A real-time web chat application that aims for university students to connect with everyone in the university during the pandemic COVID19.</li>
        </ul>
        <br>
        <li style="font-weight: bold; "> Project Link: </li>
        <ul>
        <li><a style="text-decoration: underline; " href="https://github.com/reicraftscodes/web-chat-application" target="_blank">https://github.com/reicraftscodes/web-chat-application</a> </li>
        </ul>
        <br>
        <li style="font-weight: bold">Features: </li>
        <ul>
          <li> - Real-time Chat: Users can engage in real-time one-on-one conversations with other users on the platform and can see who left the chat</li>
          <li> - User Presence Status: Users can see the online status of their chat contacts to know when they are available for communication. </li>
          <li> - Profile Management: Users can create and edit their profile picture  </li>
          <li> - Notifications: Users receive real-time notifications for new messages, ensuring prompt responses.</li>
          <li> - Typing Indicators: Users receive real-time indicators when someone is typing a message in the chat. </li>
        </ul>
    
        <br>
        <li style="font-weight: bold">Technologies: </li>
        <li>MERN stack</li>
        </ul>
        <br>
        <li> Published date: OCTOBER 2020 - JANUARY 2021 </li>
      </ul>
    `,
    image: "/images/activebee.jpg",
    techs: [
      { id: 1, name: "React.js", icon: <GrReactjs /> },
      { id: 2, name: "Node.js ", icon: <FaNodeJs /> },
      { id: 3, name: "Express.js", icon: <SiExpress /> },
      { id: 4, name: "Mongodb  ", icon: <SiMongodb /> },
      { id: 5, name: "Jest ", icon: <SiJest /> },
      { id: 6, name: "Bootstrap CSS ", icon: <FaBootstrap /> },
    ],
    other: "#End-to-end Testing"
  },
  {
    id: 6,
    title: "Skill-Sharing Web Application",
    description: "A Spring Boot skill-sharing web app designed for employees of the ONS.",
    fullDesc: `
      <ul>
      <li style="font-weight: bold">Project Description: </li>
      <ul>
        <li> A Spring boot skill-sharing web platform designed for employees of the Office of National Statistics that enables them to provide and seek assistance on issues relevant to the topics they choose.</li>
      </ul>
      <br>
      <li>Client: <a style="text-decoration: underline;" href="https://www.ons.gov.uk/" target="_blank">Office for National Statistics </a> </li>
      <br>
      <br>
      <p> In the development of inventory and tracking system for skill-sharing web app, we employed the Agile Scrum framework to ensure a flexible and collaborative approach </p>
      <br>
      <li style="font-weight: bold; "> Project Link: </li>
      <ul>
      <li><a style="text-decoration: underline; " href="https://github.com/reicraftscodes/ons_group2" target="_blank">https://github.com/reicraftscodes/ons_group2</a> </li>
      </ul>
      <br>
      <li style="font-weight: bold">Features: </li>
        <ul>
          <li> - User Authentication: Users can create accounts, log in securely, and manage their profiles within the skill-sharing platform.Also user can change their password anytime</li>
          <li> - Profile Management: Users can edit their profiles, add a bio, and update their skills to reflect their expertise.</li>
          <li> - Skill Listing: Employers can list their expertise or skills, indicating areas where they can offer help to others.  </li>
          <li> - Help Requests: Users can post requests for help on specific topics, and others can respond to offer assistance.</li>
          <li> - Notification System: Users receive notifications for new help requests, responses, and messages to stay informed.</li>
          <li> - User Dashboard: A personalised dashboard displays relevant information, such as ongoing help requests and recent messages.</li>
          <li> - Categories and Tags: Skills and help requests can be categorized and tagged, enhancing the search and discovery process. </li>
          <li> - Availability Status: Users can set their availability status to indicate when they are open to offering or receiving help. </li>
        </ul>
      <br>
      <li style="font-weight: bold">Technologies: </li>
      <ul>
          <li> - Java, Spring, Spring Web JPA Security, Junit5, Mockito </li>
          <li> - Thymeleaf, Bootstrap CSS </li>
          <li> - MariaDB </li>
          <li> - RedHat OpenShift, NginX, Terraform </li>
      </ul>
      <br>
        <li> Published date: OCTOBER 2019 - DECEMBER 2019 </li>
    </ul>
    `,
    image: "/images/ons.jpg",
    techs: [
      { id: 1, name: "Java", icon: <FaJava /> },
      { id: 2, name: "Spring", icon: <SiSpring /> },
      { id: 3, name: "Thymeleaf", icon: <SiThymeleaf /> },
      { id: 4, name: "Bootstrap CSS ", icon: <FaBootstrap /> },
    ],
    other: "#Spring MVC #Mockito #Unit Testing"
  },
  {
    id: 7,
    title: "Charity Giving",
    description: "A web app for donating to UK charities, tracking and reaching total monetary target",
    fullDesc: `
      <ul>
      <li style="font-weight: bold">Project Description: </li>
      <ul>
        <li> A Spring boot web application that aims to donate different charities across the United Kingdom and track the total target money donation.</li>
      </ul>
      <br>
      <li style="font-weight: bold; "> Project Link: </li>
      <ul>
      <li><a style="text-decoration: underline; " href="https://github.com/reicraftscodes/springboot-charity-app" target="_blank">https://github.com/reicraftscodes/springboot-charity-app</a> </li>
      </ul>
      <br>
      <li style="font-weight: bold">Features: </li>
      <ul>
        <li> - Donation Functionality: Users can make monetary donations to their chosen charities directly through the platform.</li>
        <li> - Fundraising Campaigns: Users can sponsor individuals or groups participating in charity runs, walks, or other fundraising events. </li>
        <li> - Charity Listings: Users can explore a list of registered charities in the UK and view details about each organization.</li>
        <li> - Leaderboard: A leaderboard showcases top donors or sponsors, encouraging friendly competition for fundraising efforts.</li>
        <li> - Real-time Updates: The platform provides real-time updates on fundraising progress and milestones. </li>
        <li> - Search Functionality: Users can search for specific charities.</li>
      </ul>
  
      <br>
      <li style="font-weight: bold">Technologies: </li>
      <ul>
          <li> - Java, Thymeleaf, Spring JDBC , Junit5, Mockito </li>
          <li> - PostMan </li>
          <li> - MariaDB </li>
          <li> - RedHat OpenShift, NginX, Terraform </li>
      </ul>
      <br>
      <li> Published date:  SEPMTEBER 2019 - NOVEMBER 2019"</li>
    </ul>
    `,
    image: "/images/charitygiving.jpg",
    techs: [
      { id: 1, name: "Java", icon: <FaJava /> },
      { id: 2, name: "Spring", icon: <SiSpring /> },
      { id: 3, name: "Thymeleaf", icon: <SiThymeleaf /> },
      { id: 4, name: "Bootstrap CSS ", icon: <FaBootstrap /> },
    ],
    other: "#Spring MVC #Mockito #Unit Testing"
  },
  {
    id: 8,
    title: "Accu-Serve Customs Brokerage",
    description: "A custom brokerage web app providing clients with top-notch services ",
    datePublished: "2019",
    fullDesc: `
      <ul>
        <li style="font-weight: bold">Project Description: </li>
        <ul>
          <li>A brokerage web application that aims to help clients with the highest quality of customs brokerage service available and to provide them innovative solutions and expertise.</li>
        </ul>
        <br>
        <li>Client: <a style="text-decoration: underline;">ASCBIPH</a> </li>
        <br>
        <li style="font-weight: bold; "> Project Link: </li>
        <ul>
        <li>Website: <a style="text-decoration: underline; " href="https://ascbiph.com/" target="_blank"> https://ascbiph.com/</a> </li>
        </ul>
        <br>
        <li style="font-weight: bold">Features: </li>
        <ul>
          <li>- Homepage website showcasing company mission, areas of operation, services, and contact information</li>
          <li>- Website loads in 1.0 – 1.75 Seconds. Grade A in GTmetrix with 96 – 99% performance and structure</li>
          <li>- Contact form with email integration to help the business collect inquiries from prospective clients (</li>
          <li>- Google maps integration to locate the business.</li>
          <li>- Floating Facebook chat integration to connect with clients</li>
          <li>- Google Analytics integration to give the company insights on customer interests and trends. Know more about target demographics and monitor visitor count.</li>
          <li>- Integrated anti spam plugins (Jetpack and Akismet). </li>
          <li>- Improved website SEO using Yoast SEO Plugin. </li>
          <li>- Integrated All In One Migration to help them migrate the website easily to another hosting website. </li>
          <li></li>
        </ul>
        <br>
        <li style="font-weight: bold">Technologies: </li>
        <li>Wordpress, PHP </li>
        <br>
        <li> Published date: 2019</li>
      </ul>
    </ul>
    `,
    image: "/images/accuserve.jpg",
    techs: [
      { id: 1, name: "Wordpress", icon: <SiWordpress /> },
      { id: 2, name: "Php ", icon: <SiPhp /> },
    ],
    other: ""
  },
  {
    id: 9,
    title: "Tourist Application",
    description: "A python web application designed for visitors tourist find local shops",
    fullDesc: `
      <ul>
      <li style="font-weight: bold">Project Description: </li>
      <ul>
        <li>A website that allows visitors or tourists from Newport to find the nearest shops or local business by category</li>
      </ul>
      <br>
      <li>Client: <a style="text-decoration: underline;" href="https://www.newport.gov.uk/en/Home.aspx" target="_blank">Newport City Council</a> </li>
      <br>
      <p> In the development of Tourist Python web application for Newport City Council, we employed the Agile Scrum framework to ensure a flexible and collaborative approach </p>
      <br>
      <li style="font-weight: bold; "> Project Link: </li>
      <ul>
      <li><a style="text-decoration: underline; " href="https://github.com/reicraftscodes/newport-business-website" target="_blank"> https://github.com/reicraftscodes/newport-business-website</a> </li>
      </ul>
      <br>
      <li style="font-weight: bold">Features: </li>
      <ul>
        <li> - Location-Based Shop Finder: Implemented a basic search or map functionality that allows users to find the nearest shops or local businesses based on their current location in Newport.</li>
        <li> - Category-Based Business Directory: Provided a categorised directory of local businesses in Newport, making it easy for visitors to explore different types of shops and services.</li>
        <li> - Admin Dashboard integration: Provide administrators with a dashboard to manage business listings, events, and user interactions. </li>
        <li> - Event Calendar: Included a simple event calendar that showcases upcoming events happening in Newport, enabling tourists to plan their visit around local activities</li>
        <li> - Search Functionality: Implemented a search bar to allow users to find specific shops, businesses, or events within Newport.</li>
        <li> - Location Information: Displayed essential information for each shop or business, including address, contact details, and brief descriptions to help visitors make informed decisions. </li>
        <li> - Social Media Integration: This enables users to share their discoveries or upcoming events on social media platforms to encourage word-of-mouth recommendations.</li>
        <li> - Accessibility Features: Ensure the website adheres to accessibility standards, making it usable for individuals with disabilities. </li>
      </ul>
      <br>
      <li style="font-weight: bold">Technologies: </li>
      <li> - Python, Flask, Jinja</li>
      <li> - SQLite3 DB</li>
      <li> - Bootstrap CSS </li>
      <br>
      <li> Published date: OCTOBER 2016 - DECEMBER 2016
      </li>
    </ul>
    `,

    image: "/images/newportweb.jpg",
    techs: [
      { id: 1, name: "Python", icon: <SiPython /> },
      { id: 2, name: "Flask", icon: <SiFlask /> },
      { id: 3, name: "Jinja", icon: <SiJinja /> },
      { id: 3, name: "SqLite", icon: <SiSqlite /> },
    ],
    other: ""
  },
];
