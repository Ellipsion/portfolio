import React from 'react';
import Tooltip from './tooltip';

// icons 
import { Fa500Px } from 'react-icons/fa';
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

const content = {
    "javascript": {
        name: "Javascript",
        icon: < DiJavascript1 />,
        iconStyle: "text-blue-950 bg-yellow-300",
    },
    "python": {
        name: "Python",
        icon: < FaPython />,
        iconStyle: "text-blue-950 bg-green-400",
    },
    "reactjs": {
        name: "React.js",
        icon: < FaReact />,
        iconStyle: "text-white bg-blue-500",
    },

    "expressjs": {
        name: "Express.js",
        icon: <TbHexagonLetterE />,
        iconStyle: "text-black bg-gray-100",
    },
    "nodejs": {
        name: "Node.js",
        icon: <FaNodeJs />,
        iconStyle: "text-black bg-green-500",
    },
    "mongodb": {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconStyle: "text-green-700 bg-gray-100",
    },
    "nextjs": {
        name: "Next.js",
        icon: <SiNextdotjs />,
        iconStyle: "text-black bg-white",
    },
    "django": {
        name: "Django",
        icon: <SiDjango />,
        iconStyle: "text-green-600 bg-gray-100",
    },
    "postgres": {
        name: "Postgres",
        icon: <SiPostgresql />,
        iconColor: "text-gray-100",
        iconBg: "bg-gray-100",
    },
    "tailwindcss": {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        iconStyle: "text-sky-500 bg-white",
    },
    "react-bootstrap": {
        name: "React Bootstrap",
        icon: <FaBootstrap />,
        iconStyle: "text-purple-600",
    },
    "ui-frameworks": {
        name: "UI Frameworks",
        icon: <CgIfDesign />,
        iconColor: "text-blue-500",
        iconBg: "bg-gray-100",
    },
    "graphql": {
        name: "GraphQL",
        icon: <SiGraphql />,
        iconStyle: "text-fuchsia-500",
    },
    "apollo-gql": {
        name: "GraphQL",
        icon: <SiApollographql />,
        iconStyle: "text-fuchsia-500",
    },
    "rest-api": {
        name: "Rest API",
        icon: <LuWebhook />,
        iconColor: "text-gray-100",
    },
    "git": {
        name: "Git",
        icon: <FaGitAlt />,
        iconColor: "text-gray-100",
    },
    "github": {
        name: "Github",
        icon: <FaGithub />,
        iconColor: "text-gray-100",
    },

    "html": {
        name: "HTML",
        icon: <ImHtmlFive />,
        iconStyle: "text-orange-600",
    },
    "css": {
        name: "CSS",
        icon: <BiCodeCurly />,
        iconStyle: "text-sky-600",
    },
    "bootstrap": {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        iconStyle: "text-purple-600 bg-gray-100",
    },
    "pandas": {
        name: "Pandas",
        icon: <SiPandas />,
        iconStyle: "text-pink-500 ",
    },
    "web-scraping": {
        name: "Web Scraping",
        icon: <GrDocumentStore />,
        iconStyle: "text-red-500",
    },
    "beautifulsoup": {
        name: "BeautifulSoup",
        icon: <LuSoup />,
        iconStyle: "bg-gray-100",
    },
    "selenium": {
        name: "Selenium",
        icon: <SiSelenium />,
        iconStyle: "text-green-600",
    },
};

const preset = {
    "reactjs": {
        name: "ReactJS",
        iconStyle: "",
        icon: <Fa500Px />
    }
}
const SkillIcons = ({ skillName }) => {
    const icon = content[skillName]
    return (
        <div>
            {
                icon && (

                    <p className={`text-2xl font-light flex gap-1 cursor-pointer w-fit px-2 py-1 rounded-lg  ${icon.iconStyle}`}>{icon.icon}</p>

                )
            }

        </div>
    );
}

export default SkillIcons;
