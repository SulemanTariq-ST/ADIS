import "../../App.css";
import React from 'react';
import '../../style.css';
import serv1 from "../../images/soft1.png";
import serv2 from "../../images/soft2.png";
import serv3 from "../../images/soft3.png";
import user from "../../assets/shutdown.png";
import Axios from 'axios';

const downloadfun = () => {

    fetch(
        "https://get.videolan.org/vlc/3.0.17.4/win32/vlc-3.0.17.4-win32.msi")
        .then((res) => res.json())
        .then((json) => {
            console.log("Abc", json,)
        })
}

const userDashBoard = () => {

    function handleChange(event) {
        // setSoftwareTitle = event.target.files[0].name
        // setSoftwareDirectory = "C:\\Users\\sulem\\Downloads"
        const softwareTitle = event.target.files[0].name
        const softwareDirectory = "C:\\Users\\sulem\\Downloads\\"
    
        console.log(softwareTitle);
        console.log(softwareDirectory);
        // console.log(`Selected file - ${event.target.files[0].name}`);
    
    
        const TitleDirectorySubmittion = () => {
          Axios.post("http://localhost:5000/api/send", {
            SoftwareTitle: softwareTitle,
            SoftwareDirectory: softwareDirectory,
          }).then(() => {
            alert("successfull Sent ");
          });
    
        };
        TitleDirectorySubmittion();
    
    
      }

    return (<div>
        <section className="services ">
            <div className="search-center-controller">
                <button className="search-center-btn">
                    <i class="bi bi-search"></i>
                </button>

                <input type="text" placeholder="search" />
            </div>

            <a href="/login">
                <div className="User-Profile">

                    <div className="avatar">
                        <img src={user} alt="user" />
                    </div>
                </div>
            </a>

        </section>

        <section className="services">
            <div className="box-container">

                <div className="box">
                    <img src={serv1} alt="" />
                    <h3>VLC</h3>
                    <p>Media Player</p>
                    <a
                        href="https://get.videolan.org/vlc/3.0.17.4/win32/vlc-3.0.17.4-win32.msi"
                        onClick={downloadfun} target="_blank" className="btn"   >Install</a>
                </div>

                <div className="box">
                    <img src={serv2} alt="" />

                    <h3>Netlogo</h3>
                    <p>Virtual Simulation</p>
                    <a href="https://ccl.northwestern.edu/netlogo/6.2.2/NetLogo-6.2.2-64.msi" target="_blank" className="btn">Install</a>
                </div>

                <div className="box">
                    <img src={serv3} alt="" />

                    <h3>Coral Draw</h3>
                    <p>Custom Design</p>
                    <a href="https://www.corel.com/akdlm/6763/downloads/free/trials/GraphicsSuite/22H1/JL83s3fG/CDGS.exe" target="_blank" className="btn">Install</a>
                </div>
                <input type="file" onChange={handleChange} />


            </div>

        </section>
    </div>
    );
}

export default userDashBoard;