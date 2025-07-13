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
    <Container style={{ marginTop: '2rem' }}>
      <h1>My Tickets</h1>
      <Tabs defaultActiveKey="movies" className="mb-3">
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
      </Tabs>
    </Container>
  );
}
