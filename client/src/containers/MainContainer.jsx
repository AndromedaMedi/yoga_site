import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import ProfilePage from "../components/ProfilePage";
import axios from "axios";
import { UserContextProvider } from "../UserContext";
import Layout from "../Layout";

axios.defaults.baseURL = 'http://127.0.0.1:3000';
axios.defaults.withCredentials = true;

const MainContainer = () => {

    return (
        <>
        <Router>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                    </Route>
                </Routes>
            </UserContextProvider>
        </Router>
        </>
    );
}

export default MainContainer;