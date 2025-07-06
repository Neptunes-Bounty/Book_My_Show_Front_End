import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../profile.css';

export default function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [tickets, setTickets] = useState({ movies: [], concerts: [], trains: [] });
  const [loading, setLoading] = useState(true);
  const [lastBooking, setLastBooking] = useState(null);

  useEffect(() => {
    // Fetch user's tickets
    axios.get('https://book-my-show-back-end.onrender.com/my-tickets')
      .then(response => {
        setTickets(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
    // Get last booking from localStorage
    const last = localStorage.getItem('lastBooking');
    if (last) setLastBooking(JSON.parse(last));
  }, []);

  function handlePicChange(e) {
    const file = e.target.files[0];
    setProfilePic(file);
    setPreview(URL.createObjectURL(file));
    // Optionally, upload to backend here
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      {lastBooking && (
        <div className="last-booking-box">
          <h5>Last Booking</h5>
          <div><b>Type:</b> {lastBooking.type}</div>
          <div><b>Name:</b> {lastBooking.name}</div>
          <div><b>Seats:</b> {lastBooking.count}</div>
          <div><b>Total Price:</b> ₹{lastBooking.price}</div>
        </div>
      )}
      <div className="profile-header">
        <div>
          <img
            src={preview || 'https://www.w3schools.com/howto/img_avatar.png'}
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-upload">
            <input type="file" accept="image/*" onChange={handlePicChange} />
          </div>
        </div>
        <div className="profile-header-info">
          <h4>Transaction History / Bookings</h4>
        </div>
      </div>
      {loading ? (
        <div>Loading your bookings...</div>
      ) : (
        <Tabs defaultActiveKey="movies" className="mb-3 tabs-modern">
          <Tab eventKey="movies" title="Movies">
            <Row xs={1} md={2} lg={3} className="g-4">
              {tickets.movies.map((ticket, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{ticket.MovieName}</Card.Title>
                      <Card.Text>
                        Number of Seats: {ticket.count}<br />
                        Total Price: ₹{ticket.Price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="concerts" title="Concerts">
            <Row xs={1} md={2} lg={3} className="g-4">
              {tickets.concerts.map((ticket, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{ticket.concertName}</Card.Title>
                      <Card.Text>
                        Number of Seats: {ticket.count}<br />
                        Total Price: ₹{ticket.Price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          {tickets.trains && (
            <Tab eventKey="trains" title="Trains">
              <Row xs={1} md={2} lg={3} className="g-4">
                {tickets.trains.map((ticket, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{ticket.trainName}</Card.Title>
                        <Card.Text>
                          Number of Seats: {ticket.count}<br />
                          Total Price: ₹{ticket.Price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          )}
        </Tabs>
      )}
    </div>
  );
}
