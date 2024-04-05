import React, { useEffect, useState } from "react";
import styles from "./new-users.module.css";


const NewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    const [age, setAge]=useState("");
    const [identity_proof_number, setIdentity_proof_number]=useState("");
    const [identity_proof_type, setIdentity_proof_type]=useState("");
    const [mobile, setMobile]=useState("");
    const [address, setAddress]=useState("");
    const [email, setEmail] = useState("");

    

    useEffect(()=>{
        console.log("FirstName="+ firstName);
        console.log("LastName="+ lastName);
        console.log("UserName ="+ username);
        console.log("Password="+ password);
        console.log("Age="+ age);
        console.log("identity_proof_number=" + identity_proof_number);
        console.log("identity_proof_type=" + identity_proof_type);
        console.log("mobile="+ mobile);
        console.log("address="+ address);
        console.log("Email ="+ email);
       

    }, [firstName, lastName, username, password,age , identity_proof_number, identity_proof_type, mobile, address, email]);


    return (
        <>
            <h1>I am new user</h1>
            <form onSubmit={async(event)=>{
                event.preventDefault();
                console.log("FirstName="+ firstName);
                console.log("LastName="+ lastName);
                console.log("UserName ="+ username);
                console.log("Password="+ password);
                console.log("Age="+ age);
                console.log("identity_proof_number=" + identity_proof_number);
                console.log("identity_proof_type=" + identity_proof_type);
                console.log("Mobile ="+ mobile);
                console.log("address="+ address);
                console.log("Email ="+ email);
               
               
                const data = {
                    first_name:firstName,
                    last_name:lastName,
                    username:username,
                    password:password,
                    age:age,
                    identity_proof_number:identity_proof_number,
                    identity_proof_type: identity_proof_type,
                    mobile:mobile,
                    address:address,
                    email:email,
                   
                };

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                };

                const response = await fetch('http://localhost:3002/users',
                 requestOptions);
                   
                const responseJSON = await response.json();
                console.log("data entered", responseJSON);
                // for redirectCode mean same data submit again
                window.location.replace('http://localhost:3000/user-list');
            }}>
                  <label for="first_name">First Name :</label>
                <input id="first_name" name="first_name" type="text"
                 onChange={(event)=>{
                    setFirstName(event.target.value);
                }} /><br/>

                <label for="last_name">last Name : </label>
                <input id="last_name" name="last_name" type="text"
                 onChange={(event)=>{
                    setLastName(event.target.value);
                }} /><br/>

                <label for="username">Username : </label>
                <input id="username" name="username" type="text" 
                onChange={(event)=>{
                    setUserName(event.target.value);
                }}/> <br/>

                <label for="password">Password : </label>
                <input id="password" name="password" type="text"
                 onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br/>


                <label for="age">age : </label>
                <input  id="age" name="age" type="number" 
                 onChange={(event)=>{
                    setAge(event.target.value);
                }}/><br/>

                <label for="identity_proof_number">identity_proof_number : </label>
                <input  id="identity_proof_number" name="identity_proof_number" type="number" 
                 onChange={(event)=>{
                    setIdentity_proof_number(event.target.value);
                }}/><br/>

                 <label for="identity_proof_type">identity_proof_type : </label>
                <input  id="identity_proof_type" name="identity_proof_type" type="text" 
                 onChange={(event)=>{
                    setIdentity_proof_type(event.target.value);
                }}/><br/>

                <label for="mobile">mobile : </label>
                <input  id="mobile" name="mobile" type="text" 
                 onChange={(event)=>{
                    setMobile(event.target.value);
                }}/><br/>

                <label for="address">address :</label>
                <input  id="address" name="address" type="text" 
                 onChange={(event)=>{
                    setAddress(event.target.value);
                }}/><br/> 

                <label for="email">email : </label>
                <input  id="email" name="email" type="text" 
                onChange={(event)=>{
                    setEmail(event.target.value);
                 }}/><br/> 

              <br/>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default NewUser;