import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import React from "react";

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    number: "12951",
    route: "Mumbai Central - New Delhi",
    departure: "16:35",
    arrival: "08:35",
    duration: "16h",
    price: 2200,
    class: "AC First Class"
  },
  {
    id: 2,
    name: "Shatabdi Express",
    number: "12009",
    route: "Mumbai Central - Ahmedabad",
    departure: "06:25",
    arrival: "13:10",
    duration: "6h 45m",
    price: 1500,
    class: "Executive Chair Car"
  },
  {
    id: 3,
    name: "Vande Bharat Express",
    number: "22201",
    route: "Mumbai Central - Gandhinagar",
    departure: "05:40",
    arrival: "11:35",
    duration: "5h 55m",
    price: 1800,
    class: "Executive Chair Car"
  },
  {
    id: 4,
    name: "Duronto Express",
    number: "12264",
    route: "Mumbai Central - Hazrat Nizamuddin",
    departure: "15:40",
    arrival: "07:00",
    duration: "15h 20m",
    price: 2000,
    class: "AC First Class"
  }
];

function Trains() {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>Available Trains</h2>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 15px'}}>
        <CardGroup>
          {trains.map((train) => (
            <Card key={train.id} className="m-2">
              <Card.Body>
                <Card.Title>{train.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{train.number}</Card.Subtitle>
                <Card.Text>
                  <strong>Route:</strong> {train.route}<br/>
                  <strong>Departure:</strong> {train.departure}<br/>
                  <strong>Arrival:</strong> {train.arrival}<br/>
                  <strong>Duration:</strong> {train.duration}<br/>
                  <strong>Class:</strong> {train.class}<br/>
                  <strong>Price:</strong> ₹{train.price}
                </Card.Text>
                <Link to={`/booking-train/${train.id}`}>
                  <Button style={{ cursor: "pointer" }} variant="primary">
                    Book Now
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    </>
  );
}

export default Trains;
