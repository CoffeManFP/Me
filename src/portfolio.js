/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "CoffeManFP",
  title: "Hi all, I'm Franklin",
  subTitle: "A Software Engineer 🚀 passionate about creating the future and continually learning everything that comes my way!",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/coffemanfp",
  linkedin: "https://www.linkedin.com/in/coffemanfp/",
  gmail: "coffemanfp@gmail.com",
  gitlab: "https://gitlab.com/coffemanfp",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Development of high-performance services.",
    "⚡ Creation of API REST client-friendly and reliable.",
    "⚡ Structuring of normalized relational DataBases.",
    "⚡ Building of well structured and high-performance web sites.",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "shell",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
    },
    {
      Stack: "Backend",
    },
    {
      Stack: "Programming",
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Genium",
      companylogo: require("./assets/images/genium.jpeg"),
      date: "April 2022 – March 2023",
      desc: "Genium is a premium software engineering and agile platform that connects innovative companies with world-class developers, engineers and security experts.",
      descBullets: [
        "Skuid: is a cloud-based user experience platform that allows organizations to create applications for tracking resource productivity, sales engagement and other business activities.",
      ]
    },
    {
      role: "Software Engineer",
      company: "YoFio",
      companylogo: require("./assets/images/yofio.jpeg"),
      date: "February 2021 – February 2022",
      desc: "YoFio is a technology company that develops financial solutions to help businesses grow through easy, fast and secure credit."
    },
    {
      role: "Software Engineer",
      company: "Fyld INC",
      companylogo: require("./assets/images/fyld.jpg"),
      date: "September 2019 – December 2019",
      desc: "Fyld is a Data Witness service that allows users to have a third party entity that guarantees the communication between different recipients."
    },
    {
      role: "Software Engineer",
      company: "Intelligent Solutions C.A.",
      companylogo: require("./assets/images/is.png"),
      date: "January 2019 – September 2019",
      desc: "Intelligent Solutions is a software-dedicated company which provides projects/software creation and maintenance.",
      descBullets: [
        "Oceanica International's: its mission is to provide safe port agency services with the highest quality in the market.",
        "Vpago: was created with the purpose of facilitating the payment of products and services in commercial establishments (Brick & Click) electronically without the need to have a conventional POS (Point of Sale)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/skuidBig.jpg"),
      projectName: "Skuid",
      projectDesc: "Transform the digital experiences provided by your existing platforms, dramatically increasing app adoption and innovation — up to 10 times faster.",
      footerLink: [
        {
          name: "Take a look",
          url: "https://www.skuid.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/yofioBig.jpeg"),
      projectName: "YoFio",
      projectDesc: "We are a technology company that develops financial solutions to help businesses grow through easy, fast and secure credit.",
      footerLink: [
        {
          name: "Take a look",
          url: "https://mx.yofio.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
