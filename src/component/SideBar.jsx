import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser, FaDatabase } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import {GiMaterialsScience,GiTeacher} from "react-icons/gi"
import { AiFillHeart, AiTwotoneFileExclamation,AiOutlineDatabase } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
//   {
//     path: "/file-manager",
//     name: "Manage Data",
//     icon: <AiTwotoneFileExclamation />,
//     subRoutes: [
//       {
//         path: "/teacher",
//         name: "Teacher ",
//         icon: <GiTeacher />,
//       },
//       {
//         path: "/student",
//         name: "Student",
//         icon: <FaUser />,
//       },
//       {
//         path: "/Course",
//         name: "Course",
//         icon: <GiMaterialsScience />,
//       },
//     ],
//   },
  {
    path: "/Overview",
    name: "Overview",
    icon: <MdMessage />,
  },
  {
    path: "/Calendar",
    name: "Calendar",
    icon: <AiOutlineDatabase />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

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

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "60px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  {/* <h1><img src={require('../img/logo.png')} style={{width:'50px',height:'50px'}}/> Admin</h1> */}
                  <h5>Task Management</h5>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
          </div>
          </div>
          <div className="search">
            <AnimatePresence>
              <div className="search_icon">
                <BiSearch />
              </div>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link d-flex align-items-center"
                  activeClassName="active"
                  style={{textDecoration: 'none'}}
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text fw-bold"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;