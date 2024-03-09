import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const EditUser = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

  const searchParams =  new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

    useEffect(()=>{
        console.log("UserName ="+ username);
        console.log("Password="+ password);
        console.log("Email ="+ email);
        console.log("FirstName="+ firstName);
        console.log("LastName="+ lastName);


        fetchUser();
    }, []);

    const fetchUser = async () =>{
        const response = await fetch(`http://localhost:3001/users/${id}`);

        const responseJSON = await response.json();

        console.log("user is" , responseJSON);
        setUserName(responseJSON.username);
        setPassword(responseJSON.password);
        setEmail(responseJSON.email);
        setFirstName(responseJSON.first_name);
        setLastName(responseJSON.last_name);
    };


    return (
        <>
            <h1>I am new user</h1>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                console.log("UserName ="+ username);
                console.log("Password="+ password);
                console.log("Email ="+ email);
                console.log("FirstName="+ firstName);
                console.log("LastName="+ lastName);
               
                const data = {
                    username:username,
                    password:password,
                    email:email,
                    first_name:firstName,
                    last_name:lastName
                };

                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                };
                const response = await fetch(`http://localhost:3001/users/${id}`,
                 requestOptions);
                   
                const responseJSON = await response.json();
                console.log("data entered", responseJSON);
            }}>

                <label for="username">Username</label>
                <input id="username" 
                name="username" 
                type="text" 
                value= {username}
                onChange={(event)=>{
                    setUserName(event.target.value);
                }}/> <br/>

                <label for="password">Password</label>
                <input id="password" 
                name="password" 
                type="text"
                 value= {password}
                 onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br/>

                <label for="email">email</label>
                <input  id="email"
                 name="email" 
                 type="text" 
                 value= {email}
                 onChange={(event)=>{
                    setEmail(event.target.value);
                }}/><br/>

                <label for="first_name">First Name</label>
                <input id="first_name" 
                name="first_name" 
                type="text"
                value= {firstName}
                 onChange={(event)=>{
                    setFirstName(event.target.value);
                }} /><br/>

                <label for="last_name">last Name</label>
                <input id="last_name"
                 name="last_name"
                 type="text"
                 value= {lastName}
                 onChange={(event)=>{
                    setLastName(event.target.value);
                }} /><br/>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default EditUser;