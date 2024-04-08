import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Editrooms = () => {

    const [name, setName] = useState("");
        const [price_per_day, SetPrice_per_day] = useState("");
        const [discounted_price, setDiscounted_price] = useState("");
        const [bed_details, setBed_details] = useState("");
       
        const [amenties, setAmenties]=useState("");
        const [person_capacity, setPerson_capacity]=useState("");
        const [photos, setPhotos]=useState("");
        const [thumbnail, setThumbnail]=useState("");


  const searchParams =  new URLSearchParams(document.location.search);
  console.log(">>>>>" + searchParams.get("id"));
  const id = searchParams.get("id");

    useEffect(()=>{
        console.log("Name="+ name);
            console.log("price_per_day="+ price_per_day);
            console.log("discounted_price ="+ discounted_price);
            console.log("bed_details="+ bed_details);
            console.log("amenties="+ amenties);
            console.log("person_capacity=" + person_capacity);
            console.log("photos=" + photos);
            console.log("thumbnail="+ thumbnail);
       


        fetchRooms();
    }, []);

    const fetchRooms = async () =>{
        const response = await fetch(`http://localhost:3002/rooms/${id}`);

        const responseJSON = await response.json();

        console.log("room is" , responseJSON);
        setName(responseJSON.name);
        SetPrice_per_day(responseJSON.price_per_day);
        setDiscounted_price(responseJSON.discounted_price);
        setBed_details(responseJSON.bed_details);
        setAmenties(responseJSON.amenties);
        setPerson_capacity(responseJSON.person_capacity);
        setPhotos(responseJSON.photos);
        setThumbnail(responseJSON.thumbnail);
        
       
    };


    return (
        <>
            <h1>I am new room</h1>
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
                        amenties:amenties,
                        person_capacity:person_capacity,
                        photos: photos,
                        thumbnail:thumbnail,
                };

                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                };
                const response = await fetch(`http://localhost:3002/rooms/${id}`,
                 requestOptions);
                   
                const responseJSON = await response.json();
                console.log("data entered", responseJSON);
                window.location.replace("http://localhost:3000/rooms-list");
            }}>
                 <label for="name"> Name : </label>
                <input id="name" 
                name="name" 
                type="text"
                value= {name}
                 onChange={(event)=>{
                    setName(event.target.value);
                }} /><br/>

                <label for="price_per_day">Price_per_day : </label>
                    <input id="price_per_day" name="price_per_day" type="text" value= {price_per_day}
                     onChange={(event)=>{
                        SetPrice_per_day(event.target.value);
                    }} /><br/>
    
                    <label for="discounted_price">discounted_price : </label>
                    <input id="discounted_price" name="discounted_price" type="text" value= {discounted_price}
                    onChange={(event)=>{
                        setDiscounted_price(event.target.value);
                    }}/> <br/>
    
                    <label for="bed_details">bed_details : </label>
                    <input id="bed_details" name="bed_details" type="text" value= {bed_details}
                     onChange={(event)=>{
                        setBed_details(event.target.value);
                    }} /><br/>
    
    
                    <label for="amenties">amenties : </label>
                    <input  id="amenties" name="amenties" type="number" value= {amenties}
                     onChange={(event)=>{
                        setAmenties(event.target.value);
                    }}/><br/>
    
                    <label for="person_capacity">person_capacity : </label>
                    <input  id="person_capacity" name="person_capacity" type="number" value= {person_capacity}
                     onChange={(event)=>{
                        setPerson_capacity(event.target.value);
                    }}/><br/>
    
                {photos.map(photo=>{
                     return <img src={photo.image_data} width={100} height = {100}/>
                })}

                    <label for="photos">photos : </label>

                            <input id="file" name="avatar" type="file" accept = "jpef, .png, .jpg" 
                            onChange={(e)=>{
                                    e.preventDefault();
                                    const reader = new FileReader();
                                    const file = e.target.files[0];
                                    console.log("reader",reader)
                                    console.log("file", file)
                                    if (reader !== undefined && file !== undefined) {
                                        reader.onloadend=() =>{
                            
                                            console.log(reader.result);
                                             setPhotos(prevState => {
                                                return [...prevState, {image_data:reader.result}]
                                             });
                                            console.log("I am here");
                                        }
                                        reader.readAsDataURL(file);
                                    }
                                
                                  }} /><br/>
    
                    <label for="thumbnail">thumbnail : </label>
                    <input  id="thumbnail" name="thumbnail" type="text" value= {thumbnail}
                     onChange={(event)=>{
                        setThumbnail(event.target.value);
                    }}/><br/>
    

               

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Editrooms;