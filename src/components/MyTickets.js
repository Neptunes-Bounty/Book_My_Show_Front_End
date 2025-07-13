import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

export default function MyTickets() {
  const [tickets, setTickets] = useState({ movies: [], concerts: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://book-my-show-back-end.onrender.com/my-tickets')
      .then(response => {
        setTickets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading your tickets...</div>;
  }

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem', maxWidth: 1200 }}>
      <h1 style={{textAlign: 'center', fontWeight: 700, fontSize: 32, marginBottom: 30, color: '#2d2d2d'}}>My Tickets</h1>
      <Tabs defaultActiveKey="movies" className="mb-3" style={{fontWeight: 500, fontSize: 18}}>
        <Tab eventKey="movies" title="Movies">
          <Row xs={1} md={2} lg={3} className="g-4">
            {tickets.movies.map((ticket, idx) => (
              <Col key={idx}>
                <Card className="shadow-sm" style={{borderRadius: 16, background: '#f8f9fa'}}>
                  <Card.Body>
                    <Card.Title style={{fontWeight: 600, fontSize: 20}}>{ticket.MovieName}</Card.Title>
                    <Card.Text style={{fontSize: 16}}>
                      Number of Seats: {ticket.count}<br />
                      Total Price: <span style={{color: '#d6336c'}}>₹{ticket.Price}</span>
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
                <Card className="shadow-sm" style={{borderRadius: 16, background: '#f8f9fa'}}>
                  <Card.Body>
                    <Card.Title style={{fontWeight: 600, fontSize: 20}}>{ticket.concertName}</Card.Title>
                    <Card.Text style={{fontSize: 16}}>
                      Number of Seats: {ticket.count}<br />
                      Total Price: <span style={{color: '#d6336c'}}>₹{ticket.Price}</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}
