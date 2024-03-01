import React from "react";
import styles from "./Header.module.css";

const Header =() => {

    return(
    <>
       <ul style={{width:"100%"}}>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style={{float:"right"}}>
                <a class="active" href="#about">About</a></li>
        </ul>
    </>
    );
};

export default Header;