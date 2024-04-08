import React from "react";
import UserList from "../pages/users/user-list";
import NewUser from "../pages/users/new-user";
import EditUser from "../pages/users/edit-users";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Editrooms from "../pages/rooms/edit-rooms";
import RoomsList from "../pages/rooms/rooms-list";
import NewRooms from "../pages/rooms/new-rooms";
import BookingList from "../pages/booking/booking-list";
import NewBooking from "../pages/booking/new-booking";
import EditBooking from "../pages/booking/edit-booking";
import PhotosList from "../pages/photos/photos-list";
import NewPhotos from "../pages/photos/new-photos";
import EditPhotos from "../pages/photos/edit-photos";


const MainContent =() => {
    return(
    <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<UserList />} />
                <Route path="new-user" element={<NewUser />} />
                <Route path="edit-user" element={<EditUser />} />
                <Route path="user-list" element={<UserList />} />

            
                <Route index element={<RoomsList />} />
                <Route path="new-rooms" element={<NewRooms/>} />
                <Route path="edit-rooms" element={<Editrooms />} />
                <Route path="rooms-list" element={<RoomsList />} />

                <Route index element={<BookingList />} />
                <Route path="new-booking" element={<NewBooking/>} />
                <Route path="edit-booking" element={<EditBooking />} />
                <Route path="booking-list" element={<BookingList />} />

                <Route index element={<PhotosList/>} />
                <Route path="new-photos" element={<NewPhotos/>} />
                <Route path="edit-photos" element={<EditPhotos />} />
                <Route path="photos-list" element={<PhotosList />} />

                {/* <Route path="new-product" element={<NewProduct />} />
                <Route path="edit-product" element={<EditProduct />} />
                <Route path="product-list" element={<ProductList />} /> */}

                {/* <Route path="new-cart" element={<NewCart />} />
                <Route path="edit-cart" element={<EditCart />} />
                <Route path="cart-list" element={<CartList />} /> */}
                
                </Route>
            </Routes>
            
    </>
    );
};

export default MainContent;