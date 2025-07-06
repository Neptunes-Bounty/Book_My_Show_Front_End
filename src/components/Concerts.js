import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/CardGroup";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import React from "react";

const concerts = [
  {
    id: 1,
    title: "Rock Festival 2025",
    image: "https://example.com/rock-fest.jpg",
    description: "A mega rock festival featuring top bands",
    price: 200
  },
  {
    id: 2,
    title: "Jazz Night",
    image: "https://example.com/jazz-night.jpg",
    description: "An evening of smooth jazz",
    price: 150
  },
  {
    id: 3,
    title: "EDM Fest",
    image: "https://example.com/edm-fest.jpg",
    description: "Electronic dance music festival",
    price: 180
  }
];

function Concerts() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "1200px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <CardGroup>
            {concerts.map((concert) => (
              <Card key={concert.id}>
                <Card.Img variant="top" src={concert.image} />
                <Card.Body>
                  <Card.Title>{concert.title}</Card.Title>
                  <Card.Text>{concert.description}</Card.Text>
                  <Link to={`/booking-concert/${concert.id}`}>
                    <Button style={{ cursor: "pointer" }} variant="danger">
                      Book
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Concerts;
