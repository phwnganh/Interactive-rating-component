import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import ThankYouPage from "../pages/ThankYouPage.jsx";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path={"/thank-you"} element={<ThankYouPage/>}/>
        </Routes>
    );
};

export default AppRoutes;