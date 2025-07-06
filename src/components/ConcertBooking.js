import "../bookticket.css";
import React from "react";
import { useState, useRef } from "react";
import Image1 from "../images/movies_screen/screen.png";
import gsap from "gsap";
import { useNavigate, useParams } from "react-router-dom";

const concerts = [
  {
    id: 1,
    title: "Ed Sheeran Mathematics Tour",
    price: 4500
  },
  {
    id: 2,
    title: "Taylor Swift Eras Tour",
    price: 5000
  },
  {
    id: 3,
    title: "A.R. Rahman Live",
    price: 3000
  },
  {
    id: 4,
    title: "Arijit Singh Live in Concert",
    price: 2500
  }
];

export default function ConcertBooking() {
  const { id } = useParams();
  const concert = concerts.find(c => c.id === parseInt(id));
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
        setPrice(Price + concert.price);
      } else {
        e.target.style.background = " #01163E";
        setCount(count - 1);
        setPrice(Price - concert.price);
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
      
      let data = {
        concertId: id,
        concertName: concert.title,
        Price: Price,
        count: count,
        ticketType: "concert"
      };

      let fetchoption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      fetch("https://book-my-show-back-end.onrender.com/booking-concert", fetchoption)
        .then(response => response.json())
        .then(() => {
          setUserBalance((prev) => prev - Price);
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
        <h2 style={{color: "#fff", marginBottom: "20px"}}>{concert.title}</h2>
        <div className="movie-screen">
          <img src={Image1} alt="stage" />
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
          
          <h5 className="subtitle"> ₹{concert.price}</h5>

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
