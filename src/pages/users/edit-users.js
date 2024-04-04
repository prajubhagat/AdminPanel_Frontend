import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const EditUser = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge]=useState("");
    const [identity_proof_number, setIdentity_proof_number]=useState("");
    const [identity_proof_type, setIdentity_proof_type]=useState("");
    const [mobile, setMobile]=useState("");
    const [address, setAddress]=useState("");
    const [email, setEmail] = useState("");


  const searchParams =  new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

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
       


        fetchUser();
    }, []);

    const fetchUser = async () =>{
        const response = await fetch(`http://localhost:3002/users/${id}`);

        const responseJSON = await response.json();

        console.log("user is" , responseJSON);
        setFirstName(responseJSON.first_name);
        setLastName(responseJSON.last_name);
        setUserName(responseJSON.username);
        setPassword(responseJSON.password);
        setAge(responseJSON.age);
        setIdentity_proof_number(responseJSON.identity_proof_number);
        setIdentity_proof_type(responseJSON.identity_proof_type);
        setMobile(responseJSON.mobile);
        setAddress(responseJSON.address);
        setEmail(responseJSON.email);
        
       
    };


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
                const response = await fetch(`http://localhost:3002/users/${id}`,
                 requestOptions);
                   
                const responseJSON = await response.json();
                console.log("data entered", responseJSON);
                window.location.replace("http://localhost:3002/user-list");
            }}>
                 <label for="first_name">First Name : </label>
                <input id="first_name" 
                name="first_name" 
                type="text"
                value= {firstName}
                 onChange={(event)=>{
                    setFirstName(event.target.value);
                }} /><br/>

                <label for="last_name">last Name : </label>
                <input id="last_name"
                 name="last_name"
                 type="text"
                 value= {lastName}
                 onChange={(event)=>{
                    setLastName(event.target.value);
                }} /><br/>

                <label for="username">Username : </label>
                <input id="username" 
                name="username" 
                type="text" 
                value= {username}
                onChange={(event)=>{
                    setUserName(event.target.value);
                }}/> <br/>

                <label for="password">Password : </label>
                <input id="password" 
                name="password" 
                type="text"
                 value= {password}
                 onChange={(event)=>{
                    setPassword(event.target.value);
                }} /><br/>

                <label for="age">age : </label>
                <input  id="age" name="age" type="number"  value= {age}
                 onChange={(event)=>{
                    setAge(event.target.value);
                }}/><br/>

                <label for="identity_proof_number">identity_proof_number : </label>
                <input  id="identity_proof_number" name="identity_proof_number" type="number" value= {identity_proof_number}
                 onChange={(event)=>{
                    setIdentity_proof_number(event.target.value);
                }}/><br/>

                 <label for="identity_proof_type">identity_proof_type : </label>
                <input  id="identity_proof_type" name="identity_proof_type" type="text"  value= {identity_proof_type}
                 onChange={(event)=>{
                    setIdentity_proof_type(event.target.value);
                }}/><br/>

                <label for="mobile">mobile : </label>
                <input  id="mobile" name="mobile" type="text"  value= {mobile}
                 onChange={(event)=>{
                    setMobile(event.target.value);
                }}/><br/>

                <label for="address">address :</label>
                <input  id="address" name="address" type="text"  value= {address}
                 onChange={(event)=>{
                    setAddress(event.target.value);
                }}/><br/> 

                <label for="email">email</label>
                <input  id="email"
                 name="email" 
                 type="text" 
                 value= {email}
                 onChange={(event)=>{
                    setEmail(event.target.value);
                }}/><br/>

               

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default EditUser;