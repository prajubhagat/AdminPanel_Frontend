import React, { useEffect, useState } from "react";
import styles from "./user-list.module.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const UserList = () => {
    const [users, setUsers]= useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://localhost:3002/users');

        const responseJSON = await response.json();

        console.log(responseJSON);
        setUsers(responseJSON);
    };

    return (
        <>
            <h1>I am user List</h1>
            <Link to="/new-user">New User</Link>
            {/* use this styles for responsive table */}
            
            <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>username</th>
                    <th>password</th>
                    <th>age</th>
                    <th>identity_proof_number</th>
                    <th>identity_proof_type</th> 
                    <th>mobile</th>
                    <th>address</th>
                    <th>email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user)=>{
                    return <tr>
                        <td>{user._id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.age}</td>
                        <td>{user.identity_proof_number}</td>
                        <td>{user.identity_proof_type}</td>
                        <td>{user.mobile}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        
                        {/* <td>{(new Date("" + user.created)).toDateString()}</td> */}
                        {/* <td>{new Date(user.created).toDateString()}</td> */}
            
                        <td><Link to={`/edit-user?id=${user._id}`}>Edit User</Link></td>

                        <td><Button variant="primary"
                        onClick={async () => {
                            console.log(user._id);
                            const requestOptions = {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            };
            
                            const response = await fetch(`http://localhost:3002/users/${user._id}`,
                             requestOptions);

                             const responseJSON = await response.json();
                     
                             console.log(responseJSON);
                             //again load all data from backend
                             loadData(); 
                        }}
                        >Delete</Button></td>
                        
                       
                        </tr>
                })}
               </tbody>
            </Table>
           
        </>
    );
};

export default UserList;