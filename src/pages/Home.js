import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

function Home() {
    return (
        <div>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">About</Link>
                    <Link to="kunalgaurav.me/">image</Link>

                    <AppsIcon></AppsIcon>
                    <Avatar></Avatar>
                </div>
            </div>

            <div className="home__body">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsh_JUwtqamVPEEpkS8gbVMPX6O5onttvsVg&usqp=CAU"
                    alt=""
                />

                <Search></Search>
            </div>
        </div>
    );
}

export default Home;
