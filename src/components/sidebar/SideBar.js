import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";

const MENU_ITEM = ["Users", "Products", "Cart"];

const SideBar =() => {

    return(
    <div className={styles["side-bar"]}>
        <aside>
            <ul className={styles["ul-aside"]}>
            {/* <li className={styles["li-aside"]}><a class="active" href="#home">Users</a></li>
            <li  className={styles["li-aside"]}><a href="#news">Products</a></li>
            <li  className={styles["li-aside"]}><a href="#contact">Carts</a></li> */}
            <SideBarItem title={MENU_ITEM[0]}></SideBarItem>
            <SideBarItem title={MENU_ITEM[1]}></SideBarItem>
            <SideBarItem title={MENU_ITEM[2]}></SideBarItem>
        </ul>
        </aside>
    </div>
    
    );
};

export default SideBar;