import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const BookingList = () => {
   
        const [bookings, setBookings]= useState([]);
    
        useEffect(() => {
            loadData();
        }, []);
    
        const loadData = async () => {
            const response = await fetch('http://localhost:3002/bookings');
    
            const responseJSON = await response.json();
    
            console.log(responseJSON);
            setBookings(responseJSON);
        };
    
        return (
            <>
                <h1>Booking List</h1>
                <Link to="/new-booking">New Booking</Link>
                {/* use this styles for responsive table */}
                
                <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>star_date</th>
                        <th>end_date</th>
                        <th>room_id</th>
                        <th>room</th>
                        <th>price</th>
                        <th>tax</th>
                        <th>total_price</th> 
                        <th>user_id</th>
                        <th>user</th>
                        <th>booking_date</th>
                        <th>adults</th>
                        <th>kids</th>
                        <th>booking_transaction_reference</th>
                        <th>Edit</th>
                    <th>Delete</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {bookings.map((booking)=>{
                        return <tr>
                            <td>{booking._id}</td>
                            <td>{booking.star_date}</td>
                            <td>{booking.end_date}</td>
                            <td>{booking.room_id}</td>
                            <td>{booking.room}</td>
                            <td>{booking.price}</td>
                            <td>{booking.tax}</td>
                            <td>{booking.total_price}</td>
                            <td>{booking.user_id}</td>
                            <td>{booking.user}</td>
                            <td>{booking.booking_date}</td>
                            <td>{booking.adults}</td>
                            <td>{booking.kids}</td>
                            <td>{booking.booking_transaction_reference}</td>
                            
                            
                        
                            <td><Link to={`/edit-booking?id=${booking._id}`}>Edit Booking</Link></td>
    
                            <td><Button variant="primary"
                            onClick={async () => {
                                console.log(booking._id);
                                const requestOptions = {
                                    method: 'DELETE',
                                    headers: { 'Content-Type': 'application/json' },
                                };
                
                                const response = await fetch(`http://localhost:3002/bookings/${booking._id}`,
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
    
    
export default BookingList;