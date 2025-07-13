import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import MyTickets from "./components/MyTickets";
import Concerts from "./components/Concerts";
import ConcertBooking from "./components/ConcertBooking";
import Trains from "./components/Trains";
import TrainBooking from "./components/TrainBooking";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<><Navigation/><Slider /><Movies />  </>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/booking-concert/:id" element={<ConcertBooking />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/bookingramsetu" element={<Bookticket name="ramsetu" />} />
        <Route path="/bookingblack" element={<Bookticket name="black" />} />
        <Route path="/bookingthemenu" element={<Bookticket name="themenu" />} />
        <Route path="/bookingbhediya" element={<Bookticket name="bhediya" />} />
        <Route path="/bookingdrishyam2" element={<Bookticket name="drishyam2" />} />
        <Route path="/bookinguunchai" element={<Bookticket name="uunchai" />} />
        <Route path="/bookingsmile" element={<Bookticket name="smile" />} />
        <Route path="/bookingsunny" element={<Bookticket name="sunny" />} />
        <Route path="/bookingkantara" element={<Bookticket name="kantara" />} />
        <Route path="/bookingshesad" element={<Bookticket name="shesad" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trains" element={<Trains />} />
        <Route path="/booking-train/:id" element={<TrainBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;