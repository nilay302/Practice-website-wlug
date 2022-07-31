import {AnimatePresence, motion} from "framer-motion";
import "./Sidebar.css";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import {HiDesktopComputer} from "react-icons/hi";
import {AiOutlineUserAdd} from "react-icons/ai";
import {RiGalleryLine} from "react-icons/ri";
import {FiMail} from "react-icons/fi";
import {BiMessageRoundedDetail} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <AiOutlineHome/>,
  },
  {
    path: "/blogs",
    name: "Blogs",
    icon: <AiOutlineFileSearch/>,
  },
  {
    path:"/*",
    name: "Activities",
    class:'par',
  },
  {
    path: "/events",
    name: "Events",
    icon: <FiAward/>,
  },
  {
    path: "/club-service",
    name: "Club Services",
    icon: <HiDesktopComputer/>,
  },
  {
    path:"/*",
    name: "Team",
    class:'par',
  },
  {
    path: "/members",
    name: "Members",
    icon: <AiOutlineUserAdd/>,
  },
  {
    path: "/gallery",
    name: "Gallery",
    icon: <RiGalleryLine/>,
  },
  {
    path:"/*",
    name: "Support",
    class:'par',
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    icon: <FiMail/>,
    exact: true,
  },
  {
    path: "/feedback",
    name: "Feedback",
    icon: <BiMessageRoundedDetail/>,
  },
];

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

const Sidebar = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div className="main-container">
      <motion.div animate={{width: isOpen ? "200px" : "45px", 
       transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    }} className="sidebar">
        <div className="top_section">
          {isOpen && <motion.h1 
          variants={showAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="logo">{/*<img src={logo} alt={logo}/>*/}</motion.h1>}
          <div className="bars">
            <AiOutlineMenuUnfold onClick={toggle}/>
          </div>
        </div>
        {isOpen && <motion.p 
          variants={showAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="des">Walchand Linux Users' Group</motion.p>}
        <section className="routes">
          {routes.map((route) => (
            <NavLink activeClassName="active" to={route.path} key={route.name} className='link'>
              <div className="icon">
                {route.icon}
              </div>
              <AnimatePresence>
              {isOpen && 
              <motion.div variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="link-text">
              {route.name}
            </motion.div>
              }
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;