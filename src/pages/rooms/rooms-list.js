import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const RoomsList = () => {
    const [rooms, setRooms]= useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch('http://localhost:3002/rooms');

        const responseJSON = await response.json();

        console.log(responseJSON);
        setRooms(responseJSON);
    };

    return (
        <>
            <h1>Room List</h1>
            <Link to="/new-rooms">New Room</Link>
            {/* use this styles for responsive table */}
            
            <Table striped bordered hover variant="dark" responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>price_per_day</th>
                    <th>discounted_price</th>
                    <th>bed_details</th>
                    <th>amenties</th>
                    <th>person_capacity</th>
                    <th>photos</th> 
                    <th>thumbnail</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                </tr>
                </thead>
                <tbody>
                {rooms.map((room)=>{
                    return <tr>
                        <td>{room._id}</td>
                        <td>{room.name}</td>
                        <td>{room.price_per_day}</td>
                        <td>{room.discounted_price}</td>
                        <td>{room.bed_details}</td>
                        <td>{room.amenties.map((amentie)=>{
                            return <option value ={amentie._id}>{amentie.name}</option>
                        })}</td>
                        <td>{room.person_capacity}</td>
                        <td><img src={rooms.photos} width={100} height={100}></img></td>
                        <td>{room.thumbnail}</td>
                        
                        
                        {/* <td>{(new Date("" + user.created)).toDateString()}</td> */}
                        {/* <td>{new Date(user.created).toDateString()}</td> */}
            
                        <td><Link to={`/edit-rooms?id=${room._id}`}>Edit Rooms</Link></td>

                        <td><Button variant="primary"
                        onClick={async () => {
                            console.log(room._id);
                            const requestOptions = {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            };
            
                            const response = await fetch(`http://localhost:3002/rooms/${room._id}`,
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

export default RoomsList;