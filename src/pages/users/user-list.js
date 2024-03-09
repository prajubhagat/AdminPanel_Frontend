import React, { useEffect, useState } from "react";
import styles from "./user-list.module.css";
import { Link } from "react-router-dom";


const UserList = () => {
    const [users, setUsers]= useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://localhost:3001/users');

        const responseJSON = await response.json();

        console.log(responseJSON);
        setUsers(responseJSON);
    };

    return (
        <>
            <h1>I am user List</h1>
            <Link to="/new-user">New User</Link>
            {/* use this styles for responsive table */}
            <div style={{overflowX:'auto'}}> 
            <table>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Created</th>
                    <th>Modified</th> 
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {users.map((user)=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        {/* <td>{(new Date("" + user.created)).toDateString()}</td> */}
                        {/* <td>{new Date(user.created).toDateString()}</td> */}
                        <td>{user.created}</td>
                        <td>{user.modified}</td>
                        <td><Link to={`/edit-user?id=${user.id}`}>Edit User</Link></td>
                        <td><button onClick={async () => {
                            console.log(user.id);
                            const requestOptions = {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            };
            
                            const response = await fetch(`http://localhost:3001/users/${user.id}`,
                             requestOptions);

                             const responseJSON = await response.json();
                     
                             console.log(responseJSON);
                             //again load all data from backend
                             loadData(); 
                        }}
                        >Delete</button></td>
                       
                        </tr>
                })}
                <tr></tr>
            </table>
            </div>
        </>
    );
};

export default UserList;