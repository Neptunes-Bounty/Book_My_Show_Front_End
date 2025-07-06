import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import React from "react";

// Example real train data (can be expanded)
const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    route: "New Delhi - Mumbai Central",
    time: "16:25 - 08:35",
    price: 1200
  },
  {
    id: 2,
    name: "Shatabdi Express",
    route: "Chennai - Bangalore",
    time: "06:00 - 10:30",
    price: 900
  },
  {
    id: 3,
    name: "Duronto Express",
    route: "Howrah - Secunderabad",
    time: "17:00 - 12:00",
    price: 1500
  }
];

function Trains() {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '30px'}}>Book Train Tickets</h2>
      <CardGroup style={{margin: '30px auto', maxWidth: '1200px'}}>
        {trains.map((train) => (
          <Card key={train.id} style={{margin: '0 10px'}}>
            <Card.Body>
              <Card.Title>{train.name}</Card.Title>
              <Card.Text>
                Route: {train.route}<br/>
                Time: {train.time}<br/>
                Price: ₹{train.price}
              </Card.Text>
              <Link to={`/booking-train/${train.id}`}>
                <Button style={{ cursor: "pointer" }} variant="primary">Book</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
}

export default Trains;
