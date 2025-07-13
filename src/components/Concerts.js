import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import React from "react";

const concerts = [
  {
    id: 1,
    title: "Ed Sheeran Mathematics Tour",
    image: "https://u-mercari-images.mercdn.net/photos/m22238994588_3.jpg",
    description: "Global Stadium Tour - Live in Mumbai",
    date: "July 15, 2025",
    venue: "DY Patil Stadium, Mumbai",
    price: 4500
  },
  {
    id: 2,
    title: "Taylor Swift Eras Tour",
    image: "https://static.wikia.nocookie.net/taylor-swift-fanon/images/3/37/ErasTourPoster.jpg/revision/latest?cb=20241007140702a",
    description: "The Record-Breaking Eras Tour comes to India",
    date: "August 1, 2025",
    venue: "Narendra Modi Stadium, Ahmedabad",
    price: 5000
  },
  {
    id: 3,
    title: "A.R. Rahman Live",
    image: "https://i0.wp.com/rahmaniac.com/wp-content/uploads/2024/03/Print_Interview_2005-36.jpg?fit=800%2C500&ssl=1",
    description: "A Musical Journey Through Time",
    date: "July 20, 2025",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    price: 3000
  },
  {
    id: 4,
    title: "Arijit Singh Live in Concert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4hIJANf0Qq9G4QPRV-7WMifoCpq4mmaB7_w&s",
    description: "One Voice, Million Emotions",
    date: "July 25, 2025",
    venue: "NSCI Dome, Mumbai",
    price: 2500
  }
];

function Concerts() {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>Upcoming Concerts</h2>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 15px'}}>
        <CardGroup>
          {concerts.map((concert) => (
            <Card key={concert.id} className="m-2">
              <Card.Body>
                <Card.Title>{concert.title}</Card.Title>
                <Card.Text>
                  {concert.description}<br/>
                  <strong>Date:</strong> {concert.date}<br/>
                  <strong>Venue:</strong> {concert.venue}<br/>
                  <strong>Price:</strong> ₹{concert.price}
                </Card.Text>
                <Link to={`/booking-concert/${concert.id}`}>
                  <Button style={{ cursor: "pointer" }} variant="danger">
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

export default Concerts;
