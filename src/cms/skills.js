import { SiPostgresql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import {
  FaPython,
  FaNodeJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiGraphql,
  SiApollographql,
  SiPandas,
  SiSelenium,
  SiNextdotjs,
} from "react-icons/si";
import { TbHexagonLetterE } from "react-icons/tb";
import { CgIfDesign } from "react-icons/cg";
import { LuWebhook, LuSoup } from "react-icons/lu";
import { ImHtmlFive } from "react-icons/im";
import { BiCodeCurly } from "react-icons/bi";
import { GrDocumentStore } from "react-icons/gr";

export const skillsData = {
  page: "Skills",
  pageText: "page text",
  testContent: [
    {
      name: "Javascript",
      description: "Programming language",
      icons: [DiJavascript1],
      iconStyle: "text-blue-950 bg-yellow-300",
      level: 80,
    },
  ],
  content: [
    {
      name: "Javascript",
      description: "Programming language",
      icons: [DiJavascript1],
      iconStyle: "text-blue-950 bg-yellow-300",
      level: 80,
    },
    {
      name: "Python",
      description: "Programming language",
      icons: [FaPython],
      iconStyle: "text-blue-950 bg-green-400",
      level: 80,
    },
    {
      name: "React.js",
      description: "Js frontend framework",
      icons: [FaReact],
      iconStyle: "text-white bg-blue-500",
      level: 60,
    },

    {
      name: "Express.js",
      description: "NodeJs web framework",
      icons: [TbHexagonLetterE],
      iconStyle: "text-black bg-gray-100",
      level: 60,
    },
    {
      name: "Node.js",
      description: "Js runtime",
      icons: [FaNodeJs],
      iconStyle: "text-black bg-green-500",
      level: 60,
    },
    {
      name: "MongoDB",
      description: "NoSQL database",
      icons: [SiMongodb],
      iconStyle: "text-green-700 bg-gray-100",
      level: 60,
    },
    {
      name: "Next.js",
      description: "React Framework",
      icons: [SiNextdotjs],
      iconStyle: "text-black bg-white",
      level: 60,
    },
    {
      name: "Django",
      description: "Python web framework",
      icons: [SiDjango],
      iconStyle: "text-green-600 bg-gray-100",
      level: 60,
    },
    {
      name: "Postgres",
      description: "SQL Database",
      icons: [SiPostgresql],
      iconColor: "text-gray-100",
      iconBg: "bg-gray-100",
      level: 60, //0-100
    },
    {
      name: "Tailwind CSS",
      description: "CSS Framework",
      icons: [SiTailwindcss],
      iconStyle: "text-sky-500 bg-white",
      level: 60, //0-100
    },
    {
      name: "React Bootstrap",
      description: "React UI Framework",
      icons: [FaBootstrap],
      iconStyle: "text-purple-600",
      level: 60, //0-100
    },
    {
      name: "UI Frameworks",
      description: "Chakra UI, Material UI, Daisy UI, Ant Design",
      icons: [CgIfDesign],
      iconColor: "text-blue-500",
      iconBg: "bg-gray-100",
      level: 60, //0-100
    },
    {
      name: "GraphQL",
      description: "API",
      icons: [SiGraphql, SiApollographql],
      iconStyle: "text-fuchsia-500",
      level: 60, //0-100
    },
    {
      name: "Rest API",
      description: "API",
      icons: [LuWebhook],
      iconColor: "text-gray-100",
      level: 60, //0-100
    },
    {
      name: "Git and Github",
      description: "Version Control",
      icons: [FaGitAlt, FaGithub],
      iconColor: "text-gray-100",
      level: 60, //0-100
    },
    {
      name: "HTML",
      description: "Markup Language",
      icons: [ImHtmlFive],
      iconStyle: "text-orange-600",
      level: 60, //0-100
    },
    {
      name: "CSS",
      description: "Stylesheet for web",
      icons: [BiCodeCurly],
      iconStyle: "text-sky-600",
      level: 60, //0-100
    },
    {
      name: "Pandas",
      description: "Python Framework",
      icons: [SiPandas],
      iconStyle: "text-pink-500 ",
      level: 60, //0-100
    },
    {
      name: "Web Scraping",
      description: "Python Framework",
      icons: [GrDocumentStore],
      iconStyle: "text-red-500",
      level: 60, //0-100
    },
    {
      name: "BeautifulSoup",
      description: "Python Framework",
      icons: [LuSoup],
      iconColor: "text-gray-100",
      iconBg: "bg-gray-100",
      level: 60, //0-100
    },
    {
      name: "Selenium",
      description: "Python Framework",
      icons: [SiSelenium],
      iconStyle: "text-green-600",
      level: 60, //0-100
    },
  ],
};
