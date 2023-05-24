import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Favoritos from "../pages/Favoritos";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
        </BrowserRouter>
    );
}
