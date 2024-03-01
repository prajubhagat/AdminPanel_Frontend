import React, {useState} from "react";
import styles from "./SideBar.module.css";

const SideBarItem = (props) =>{

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("35px");

    const expandItem =() => {
        setHeight('150px');
    };

    const collapseItem =()=> {
        setHeight('35px');
    };

    return (
    <>
     <li className={`${styles["li-aside"]} ${styles["li-aside-item"]}`} 
     style={{height: height,
    backgroundColor: "purple",}}
    onClick={()=>{
        if(isOpen){
            collapseItem();
        } else {
            expandItem();
        }
        setIsOpen(!isOpen);
    }}>
        <a class="active" href="#home">{props.title}</a></li>
     </>
     );
};

export default SideBarItem;