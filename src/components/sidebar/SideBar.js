import React, { useState } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem";
import { Link, Outlet } from "react-router-dom";

const MENU_ITEM = ["Users", "Products", "Cart"];

const SideBar =() => {
    const [closeOtherItems, setCloseOtherItems] = useState([true, true, true]);

    const closeOtherItem = (index) =>{
        console.log("Inside close otheritem" + index);
        for(var i=0; i< MENU_ITEM.length; i++){
            if(index != i){
                let temp = [...closeOtherItems];
                temp[i] = true;
                setCloseOtherItems(temp);
                }
            else {
                let temp = [...closeOtherItems];
                temp[i] = false;
                setCloseOtherItems(temp);
            }
        }
    };

    return(
    <div className={styles["side-bar"]}>
       

        <aside>
            <nav>
                <ul className={styles["ul-aside"]}>
                {/* <li className={styles["li-aside"]}><a class="active" href="#home">Users</a></li>
                <li  className={styles["li-aside"]}><a href="#news">Products</a></li>
                <li  className={styles["li-aside"]}><a href="#contact">Carts</a></li> */}
                <SideBarItem title={MENU_ITEM[0]} closeItem={closeOtherItems[0]} closeOtherItem={closeOtherItem} index = {0} path="/user-list"></SideBarItem>
                <SideBarItem title={MENU_ITEM[1]} closeItem={closeOtherItems[1]} closeOtherItem={closeOtherItem} index = {1} path="/product-list"></SideBarItem>
                <SideBarItem title={MENU_ITEM[2]} closeItem={closeOtherItems[2]} closeOtherItem={closeOtherItem} index = {2} path="/cart-list"></SideBarItem>
                </ul>
            </nav>
        </aside>
    </div>
    
    );
};

export default SideBar;