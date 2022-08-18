import React, { useEffect, useState } from "react";
import logo from "../assets/logo/webscript.png";
import user from "../assets/user.jpg";
import Formuser from "./User/UserDashboard.js";

// import header from"./Header";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  // {
  //   name: "Login",
  //   exact: true,
  //   to: "/",
  //   iconClassName: "bi bi-speedometer2",
  // },
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "bi bi-clipboard-data",
  },
  {
    name: "Register",
    exact: true,
    to: `/admin-register`,
    iconClassName: "bi bi-door-open",
    // subMenus: [
    //   { name: "Courses", to: "/content/courses" },
    //   { name: "Videos", to: "/content/videos" },
    // ],
  },
  // { name: "Aprovel", to: `/aprovel`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Add Data",
    exact: true,
    to: `/dataAddition`,
    iconClassName: "bi bi-plus-circle",
    // subMenus: [
    //   { name: "Courses", to: "/content-2/courses" },
    //   { name: "Videos", to: "/content-2/videos" },
    // ],
  },
  { name: "Sign out", to: `/login`, iconClassName: "bi bi-power",  },
  // { name: "Design 3", to: `/design-3`, iconClassName: "bi bi-vector-pen" },
  // { name: "Design 4", to: `/design-4`, iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
  <div className="row">
    <div className="col-md-2">
    {/* <header /> */}
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
          <div className="top-section">
            <div className="logo">
              <img src={logo} alt="webscript" />
            </div>
            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
              {inactive ? (
                <i class="bi bi-arrow-right-square-fill"></i>
              ) : (
                <i class="bi bi-arrow-left-square-fill"></i>
              )}
            </div>
          </div>

          <div className="search-controller">
            <button className="search-btn">
              <i class="bi bi-search"></i>
            </button>

            <input type="text" placeholder="search" />
          </div>

          <div className="divider"></div>

          <div className="main-menu">
            <ul>
              {menuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  name={menuItem.name}
                  exact={menuItem.exact}
                  to={menuItem.to}
                  subMenus={menuItem.subMenus || []}
                  iconClassName={menuItem.iconClassName}
                  onClick={(e) => {
                    window.location.reload(false)   
                    if (inactive) {
                      setInactive(true);
                    }
                  }}
                />
              ))}

            </ul>
          </div>

          <div className="side-menu-footer">
            <div className="avatar">
              <img src={user} alt="user" />
            </div>
            <div className="user-info">
              <h5>Suleman Tariq</h5>
              <p>sulemantariq1438@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
      {/* <div className="services col-md-8">
      <section className="services-search col-md-8">
        <div className="Center-set">
          <div className="search-center-controller">
            <button className="search-center-btn">
              <i class="bi bi-search"></i>
            </button>

            <input type="text" placeholder="search" />
          </div>
        </div>
      </section>
      </div>
      <div className="User-Profile col-md-2">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Suleman Tariq</h5>
          <p>sulemantariq1438@gmail.com</p>
        </div>
      </div> */}
  </div>
  );
};

export default SideMenu;
