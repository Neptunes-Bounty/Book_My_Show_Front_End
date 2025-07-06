import "../bookticket.css";
import React from "react";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useNavigate, useParams } from "react-router-dom";

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    number: "12951",
    price: 2200
  },
  {
    id: 2,
    name: "Shatabdi Express",
    number: "12009",
    price: 1500
  },
  {
    id: 3,
    name: "Vande Bharat Express",
    number: "22201",
    price: 1800
  },
  {
    id: 4,
    name: "Duronto Express",
    number: "12264",
    price: 2000
  }
];

export default function TrainBooking() {
  const { id } = useParams();
  const train = trains.find(t => t.id === parseInt(id));
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  const [userBalance, setUserBalance] = useState(50000);

  React.useEffect(() => {
    fetch('https://book-my-show-back-end.onrender.com/user-balance', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if (data.balance !== undefined) setUserBalance(data.balance);
      });
  }, []);

  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + train.price);
      } else {
        e.target.style.background = " #01163E";
        setCount(count - 1);
        setPrice(Price - train.price);
      }
    }
  }

  const navigate = useNavigate();
  let tl = gsap.timeline({ ease: "power1.in" });
  let clicked = false;

  function buttonanimation(e2) {
    if (clicked === false && count !== 0) {
      if (Price > userBalance) {
        alert('Insufficient balance!');
        return;
      }
      clicked = true;
      e2.target.innerText = "";
      tl.to("#button", { width: "50px", duration: 0.5 });
      tl.to(ref, { y: "0%", duration: 0.5 });
      // Store last booking info
      localStorage.setItem('lastBooking', JSON.stringify({
        type: 'Train',
        name: train.name,
        count: count,
        price: Price
      }));
      let data = {
        trainId: id,
        trainName: train.name,
        Price: Price,
        count: count,
        ticketType: "train"
      };
      let fetchoption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      fetch("https://book-my-show-back-end.onrender.com/booking-train", fetchoption)
        .then(response => response.json())
        .then(() => {
          setTimeout(() => {
            navigate("/my-tickets");
          }, 3000);
        });
    }
  }

  return (
    <body1>
      <ul className="showcase">
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="container">
        <h2 style={{color: "#fff", marginBottom: "20px"}}>{train.name}</h2>
        <div className="movie-screen">
          <div style={{height: '70px', background: '#eee', borderRadius: '10px', margin: '10px 0', textAlign: 'center', lineHeight: '70px', color: '#333'}}>Train Coach</div>
        </div>
        <div className="row-container">
          <div onClick={changecolor} className="row">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="seat"></div>
            ))}
          </div>
          <div onClick={changecolor} className="row">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="seat"></div>
            ))}
          </div>
          <div onClick={changecolor} className="row">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="seat"></div>
            ))}
          </div>
          <div onClick={changecolor} className="row">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="seat"></div>
            ))}
          </div>
          <h5 className="subtitle"> ₹{train.price}</h5>
          <div className="text-wrapper">
            <p className="text">
              Selected Seats <span id="count">{count}</span>
            </p>
            <p className="text">
              Total Price ₹<span id="total">{Price}</span>
            </p>
            <body2>
              <div onClick={buttonanimation} id="button">
                <span id="text">Book</span>
                <span ref={ref} id="w">
                  ✓
                </span>
              </div>
            </body2>
          </div>
        </div>
      </div>
    </body1>
  );
}
