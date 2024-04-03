import React from "react";
import UserList from "../pages/users/user-list";
import NewUser from "../pages/users/new-user";
import EditUser from "../pages/users/edit-users";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./Layout";


const MainContent =() => {
    return(
    <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<UserList />} />
                <Route path="new-user" element={<NewUser />} />
                <Route path="edit-user" element={<EditUser />} />
                <Route path="user-list" element={<UserList />} />

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