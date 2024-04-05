import React, { useEffect, useState } from "react";

const NewRooms = () => {
   

        const [name, setName] = useState("");
        const [price_per_day, SetPrice_per_day] = useState("");
        const [discounted_price, setDiscounted_price] = useState("");
        const [bed_details, setBed_details] = useState("");
       
        const [amenties, setAmenties]=useState([]);
        const [person_capacity, setPerson_capacity]=useState("");
        const [photos, setPhotos]=useState("");
        const [thumbnail, setThumbnail]=useState("");

        const [selectedAmenties , setSelectedAmenties]=useState([]);
       
    
        
    
        useEffect(()=>{
            console.log("Name="+ name);
            console.log("price_per_day="+ price_per_day);
            console.log("discounted_price ="+ discounted_price);
            console.log("bed_details="+ bed_details);
            console.log("amenties="+ amenties);
            console.log("person_capacity=" + person_capacity);
            console.log("photos=" + photos);
            console.log("thumbnail="+ thumbnail);
           
           
           
    
        }, [name, price_per_day, discounted_price, bed_details,amenties , person_capacity, photos, thumbnail]);

        useEffect(()=>{
            fetchAmenities();
        },[]);

        const fetchAmenities = async () =>{
            const response = await fetch(`http://localhost:3002/amenties`);
    
            const responseJSON = await response.json();
            console.log("Response", responseJSON);
            setAmenties(responseJSON);
           
        };
    
    
        return (
            <>
                <h1>I am new Room</h1>
                <form onSubmit={async(event)=>{
                    event.preventDefault();
                    console.log("Name="+ name);
            console.log("price_per_day="+ price_per_day);
            console.log("discounted_price ="+ discounted_price);
            console.log("bed_details="+ bed_details);
            console.log("amenties="+ amenties);
            console.log("person_capacity=" + person_capacity);
            console.log("photos=" + photos);
            console.log("thumbnail="+ thumbnail);
                   
                   
                    const data = {
                        name:name,
                        price_per_day:price_per_day,
                        discounted_price:discounted_price,
                        bed_details:bed_details,
                        amenties:selectedAmenties,
                        person_capacity:person_capacity,
                        photos: photos,
                        thumbnail:thumbnail,
                       
                    };
    
                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                    };
    
                    const response = await fetch('http://localhost:3002/rooms',
                     requestOptions);
                       
                    const responseJSON = await response.json();
                    console.log("data entered", responseJSON);
                    // for redirectCode mean same data submit again
                    window.location.replace('http://localhost:3000/rooms-list');
                }}>
                      <label for="name"> Name :</label>
                    <input id="name" name="name" type="text"
                     onChange={(event)=>{
                        setName(event.target.value);
                    }} /><br/>
    
                    <label for="price_per_day">Price_per_day : </label>
                    <input id="price_per_day" name="price_per_day" type="text"
                     onChange={(event)=>{
                        SetPrice_per_day(event.target.value);
                    }} /><br/>
    
                    <label for="discounted_price">discounted_price : </label>
                    <input id="discounted_price" name="discounted_price" type="text" 
                    onChange={(event)=>{
                        setDiscounted_price(event.target.value);
                    }}/> <br/>
    
                    <label for="bed_details">bed_details : </label>
                    <input id="bed_details" name="bed_details" type="text"
                     onChange={(event)=>{
                        setBed_details(event.target.value);
                    }} /><br/>
    
    
                    <label for="amenties">selectedAmenties</label>
                    <select name="amenties" id="amenties" multiple onChange={event=>{
                        // console.log(event.target.options);
                        var options = event.target.options;

                        var value=[];

                        var tempselectedAmenties =[]
                        for (var i=0, l = options.length; i <l; i++) {
                            console.log('option'+ i , options[i].selected);
                            if (options[i].selected){
                                value.push(options[i].value);
                                tempselectedAmenties.push(amenties[i])

                            }
                        }
                        setSelectedAmenties(tempselectedAmenties);
                        console.log("selected value =" , value);
                    }}>
                        {amenties.map(amenity=>{
                            return <option value={amenity._id }>{amenity.name}</option>
                        })}
                        </select> <br/>

    
                    <label for="person_capacity">person_capacity : </label>
                    <input  id="person_capacity" name="person_capacity" type="number" 
                     onChange={(event)=>{
                        setPerson_capacity(event.target.value);
                    }}/><br/>
    
                     <label for="photos">photos : </label>
                    <input  id="photos" name="photos" type="text" 
                     onChange={(event)=>{
                        setPhotos(event.target.value);
                    }}/><br/>
    
                    <label for="thumbnail">thumbnail : </label>
                    <input  id="thumbnail" name="thumbnail" type="text" 
                     onChange={(event)=>{
                        setThumbnail(event.target.value);
                    }}/><br/>

    
                   
    
                  <br/>
    
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    };
    
    

export default NewRooms;