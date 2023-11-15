import { FaAward, FaLinkedin, FaSmile, FaTwitter } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { BiBook } from "react-icons/bi";

const data = [
    { id: 1, link: "#", title: "Home" },
    { id: 2, link: "#about", title: "About" },
    { id: 3, link: "#services", title: "Services" },
    { id: 4, link: "#portfolio", title: "Portfolio" },
    { id: 5, link: "#contact", title: "Contact" },
];

const data2 = [
    { id: 1, link: "https://github.com/steno1", icon: <AiFillGithub /> },
    { id: 2, link: "https://www.linkedin.com/in/onu-princeley-toochukwu-john-15879a241/", icon: <FaLinkedin /> },
    { id: 3, link: "https://twitter.com/onu_princeley", icon: <FaTwitter /> }
];

const data3 = [
    { id: 1, icon: <FaAward/>, title: "Experience", desc: "2+ Years working" },
    { id: 2, icon: <BiBook/>, title: "Projects", desc: "6+ Completed" },
    { id: 3, icon: <FaSmile />, title: "Clients", desc: "5+ Happy Clients" },
];

export { data, data2, data3 };
