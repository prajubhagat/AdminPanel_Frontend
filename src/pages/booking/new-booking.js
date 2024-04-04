 import React, { useEffect, useState } from "react";

const NewBooking = () => {
  
    
    const [star_date, setStar_date] = useState("");
    const [end_date, SetEnd_date] = useState("");
    const [room_id, setRoom_id] = useState("");
    const [room, setRoom] = useState("");
   
    const [price, setPrice]=useState("");
    const [tax, setTax]=useState("");
    const [total_price, setTotal_price]=useState("");
    const [user_id, setUser_id]=useState("");
    const [user, setUser]=useState("");
    const [booking_date, setBooking_date]=useState("");
    const [adults, setAdults]=useState("");
    const [kids, setKids]=useState("");
           
        
            
        
            useEffect(()=>{
                console.log("star_date="+ star_date);
                console.log("end_date="+ end_date);
                console.log("room_id ="+ room_id);
                console.log("room="+ room);
                console.log("price="+ price);
                console.log("tax=" + tax);
                console.log("total_price=" + total_price);
                console.log("user_id="+ user_id);
                console.log("user="+ user);
                console.log("booking_date="+ booking_date);
                console.log("adults="+ adults);
                console.log("kids="+ kids);
               
               
        
            }, [star_date, end_date, room_id, room,price , tax, total_price, user_id, user,booking_date, adults, kids ]);
        
        
            return (
                <>
                    <h1>I am new Booking</h1>
                    <form onSubmit={async(event)=>{
                        event.preventDefault();
                        console.log("star_date="+ star_date);
                        console.log("end_date="+ end_date);
                        console.log("room_id ="+ room_id);
                        console.log("room="+ room);
                        console.log("price="+ price);
                        console.log("tax=" + tax);
                        console.log("total_price=" + total_price);
                        console.log("user_id="+ user_id);
                        console.log("user="+ user);
                        console.log("booking_date="+ booking_date);
                        console.log("adults="+ adults);
                        console.log("kids="+ kids);
                       
                       
                        const data = {
                        star_date:star_date,
                        end_date:end_date,
                        room_id:room_id,
                        room:room,
                        price:price,
                        tax:tax,
                        total_price: total_price,
                        user_id:user_id,
                        user:user,
                        booking_date:booking_date,
                        adults:adults,
                        kids:kids,
                           
                        };
        
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data),
                        };
        
                        const response = await fetch('http://localhost:3002/bookings',
                         requestOptions);
                           
                        const responseJSON = await response.json();
                        console.log("data entered", responseJSON);
                        // for redirectCode mean same data submit again
                        window.location.replace('http://localhost:3002/booking-list');
                    }}>
                         <label for="star_date"> star_date : </label>
                    <input id="star_date" 
                    name="star_date" 
                    type="text"
                    value= {star_date}
                     onChange={(event)=>{
                        setStar_date(event.target.value);
                    }} /><br/>
    
                    <label for="end_date">end_date : </label>
                        <input id="end_date" name="end_date" type="text" 
                         onChange={(event)=>{
                            SetEnd_date(event.target.value);
                        }} /><br/>
        
                        <label for="room_id">room_id : </label>
                        <input id="room_id" name="room_id" type="text" 
                        onChange={(event)=>{
                            setRoom_id(event.target.value);
                        }}/> <br/>
        
                        <label for="room">room : </label>
                        <input id="room" name="room" type="text" 
                         onChange={(event)=>{
                            setRoom(event.target.value);
                        }} /><br/>
        
        
                        <label for="price">price : </label>
                        <input  id="price" name="price" type="number" 
                         onChange={(event)=>{
                            setPrice(event.target.value);
                        }}/><br/>
        
                        <label for="tax">tax : </label>
                        <input  id="tax" name="tax" type="number" 
                         onChange={(event)=>{
                            setTax(event.target.value);
                        }}/><br/>
        
                         <label for="total_price">total_price : </label>
                        <input  id="total_price" name="total_price" type="text" 
                         onChange={(event)=>{
                            setTotal_price(event.target.value);
                        }}/><br/>
        
                        <label for="user_id">user_id : </label>
                        <input  id="user_id" name="user_id" type="text" 
                         onChange={(event)=>{
                            setUser_id(event.target.value);
                        }}/><br/>

                        <label for="user">user : </label>
                        <input  id="user" name="user" type="text" 
                         onChange={(event)=>{
                            setUser(event.target.value);
                        }}/><br/>

                        <label for="booking_date">booking_date : </label>
                        <input  id="booking_date" name="booking_date" type="text" 
                         onChange={(event)=>{
                            setBooking_date(event.target.value);
                        }}/><br/>

                        <label for="adults">adults : </label>
                        <input  id="adults" name="adults" type="text" 
                         onChange={(event)=>{
                            setAdults(event.target.value);
                        }}/><br/>
                       
                        <label for="kids">kids : </label>
                        <input  id="kids" name="kids" type="text" 
                         onChange={(event)=>{
                            setKids(event.target.value);
                        }}/><br/>
                       
        
                      <br/>
        
                        <button type="submit">Submit</button>
                    </form>
                </>
            );
        };
        
        
    
   

export default NewBooking;