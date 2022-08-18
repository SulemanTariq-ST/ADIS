
import "../../App.css";
import '../../style.css';
import FormExample from "../Register/validation.js";
import Formuser from "../User/UserDashboard.js";
import Dashboard from "../Admin/AdminPanel.js";
import FormLogin from "../Login/login.js";
import AppAddition from "../AddApp/addapp.js";

import SideMenu, { menuItems } from "../SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Content = () => <><FormExample /></>;
// const Content = () => <h1>Register</h1>;
const Courses = () => <><AppAddition /></>;
const Content2 = () => <><AppAddition /></>;
const UserDashboard = () => <><Formuser /></>;
const Design2 = () => <><FormLogin /></>;

// const Courses2 = () => <h1>Content/Courses 2</h1>;
// const Videos2 = () => <h1>Content/Videos 2</h1>;

function Home() {
    const [inactive, setInactive] = useState(false);

    return (
        <div className="App">
            <Router>

            <Link to="/home"> 
            <SideMenu
                onCollapse={(inactive) => {
                    console.log(inactive);
                    setInactive(inactive);
                }}
            />
            <span>Dashboard</span>
            </Link>

             <div className={`container ${inactive ? "inactive" : ""}`}>

                {menuItems.map((menu, index) => (
                    <>
                        <Route key={menu.name} exact={menu.exact} path={menu.to}>
                            <h1>{menu.name}</h1>
                        </Route>
                        {menu.subMenus && menu.subMenus.length > 0
                            ? menu.subMenus.map((subMenu, i) => (
                                <Route key={subMenu.name} path={subMenu.to}>
                                    <h1>{subMenu.name}</h1>
                                </Route>
                            ))
                            : null}
                    </>
                ))} 


            </div> 
                </Router> 
            </div >
            );
}

            export default Home;

