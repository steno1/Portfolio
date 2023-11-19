import { FaAward, FaLinkedin, FaServer, FaSmile, FaTwitter } from "react-icons/fa";

import { AiFillGithub } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import HappyAvatar from "./happyAvatar.png"
import {RiReactjsLine} from "react-icons/ri"
import image1 from "./onuPic.jpg"

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

const data4=[
    {id:1, icon:<RiReactjsLine/>, title:"Frontend Development", 
    desc:"Your product will look good and will be accessible to devices"},
    {id:2, icon:<FaServer/>, title:"Backend Development", 
    desc:"The security of your products/business is taken seriously right from start of the business. I will make sure your website/app is secure from attacks"}
]

const data5=[
    {id:1, 
    category:"MERN",
    desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    title:"ECommerce site",
    images:image1,
github:"https://github.com/steno1/eCommerceRedone",
demo:"https://stenosupermarket1.onrender.com/"
},

{id:2, 
category:"MERN", 
 title:"DailyTaskApp",
 images:image1,
desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
github:"https://github.com/steno1/taskManagementApp",
demo:"https://stenosupermarket1.onrender.com/"
},
{id:3,
 category:"Frontend", 
 title:"Portfolio Site",
 images:image1,
desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
github:"https://github.com/steno1/taskManagementApp",
demo:"https://stenosupermarket1.onrender.com/"
},


];
const data6=[
{
    id:1,
    quote:" its truly amazing how you did exactly what i wanted with the little information i gave . you will be my go to developer from to Have Display Value. highly recommend",
    avatar:HappyAvatar,
    name: 'ChukwuEdozie Peter',
    profession: "Civil Engineer"

},
{
    id:2,
    quote:" its truly amazing how you did exactly what i wanted with the little information i gave . you will be my go to developer from to Have Display Value. highly recommend",
    avatar:image1,
    name: 'Steno John',
    profession: "Geologist"

},
{
    id:3,
    quote:" its truly amazing how you did exactly what i wanted with the little information i gave . you will be my go to developer from to Have Display Value. highly recommend",
    avatar:image1,
    name: 'Nnamdi',
    profession: "Medical Doctor"

},
{
    id:4,
    quote:" its truly amazing how you did exactly what i wanted with the little information i gave . you will be my go to developer from to Have Display Value. highly recommend",
    avatar:image1,
    name: 'Chibuzor',
    profession: "Banker"

},
]
const data7=[
    {id:1,
    question:"What do you need to start working on my project?",
answer:"It mostly depends on the type of project. But in general, you need a fair idea of what you want, then we can take it from there."}
,{
id:2,
question:"How long will my project take to complete",
answer:" This depends on the complexity of the project, your readiness and your payment. Once you have sorted these out, I will give you a completion date"

},
{
    id:3,
    question:"Is hosting and domain registration inclusive in your pricing?",
    answer:"No! Hosting and domain is taken care of separately. You can pay for it or take care of it on your own if you know how to."
}



]

export { data, data2, data3, data4, data5, data6, data7 };
