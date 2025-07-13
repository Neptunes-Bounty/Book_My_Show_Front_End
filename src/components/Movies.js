import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image1 from "../images/Movies/1.avif";
import Image2 from "../images/Movies/2.avif";
import Image3 from "../images/Movies/3.avif";
import Image4 from "../images/Movies/4.avif";
import Image5 from "../images/Movies/5.avif";
import Image6 from "../images/Movies/6.avif";
import Image7 from "../images/Movies/7.avif";
import Image8 from "../images/Movies/8.avif";
import Image9 from "../images/Movies/9.avif";
import Image10 from "../images/Movies/10.avif";
import { Link } from "react-router-dom";
import React from "react";
function Movies() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "auto",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <h2 style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>Now Showing</h2>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image9} />
              <Card.Body>
                <Card.Title>Smile</Card.Title>
                <Card.Text>After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.</Card.Text>
                <Link to="/bookingsmile">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Black Panther</Card.Title>
                <Card.Text>After his father's death, T'Challa returns home to Wakanda to inherit his throne. However, a powerful enemy related to his family threatens to attack his nation.</Card.Text>{" "}
                <Link to="/bookingblack">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image10} />
              <Card.Body>
                <Card.Title>The Menu</Card.Title>
                <Card.Text>Margot joins Tyler on a trip to a secluded island restaurant, where a renowned chef's elaborate tasting menu reveals disturbing intentions beneath a flawless exterior.</Card.Text>
                <Link to="/bookingthemenu">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Bhediya</Card.Title>
                <Card.Text>Bhaskar travels with his cousin to a small town for a work project, however, a series of unfortunate events occur, and Bhaskar is attacked by a wolf, which grants him the powers of a werewolf.</Card.Text>
                <Link to="/bookingbhediya">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image4} />
              <Card.Body>
                <Card.Title>Drishyam 2</Card.Title>
                <Card.Text>Georgekutty, a cinema hall owner, thrives in life but is a changed man. However, when his family gets entangled in a criminal investigation, he must protect them from the legal institution yet again.</Card.Text>
                <Link to="/bookingdrishyam2">
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title>Uunchai</Card.Title>
                <Card.Text>When three retired friends go on a trek to the Everest Base Camp to fulfil their dying friend's last wish, they discover the true meaning of freedom and life.</Card.Text>
                <Link to="/bookinguunchai">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>Ram Setu</Card.Title>
                <Card.Text>An atheist archaeologist who turns into a believer, faces a challenge to prove the existence of 'Rama Setu' before the evil forces destroy the heritage site of India.</Card.Text>
                <Link to="/bookingramsetu">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image7} />
              <Card.Body>
                <Card.Title>Kantara</Card.Title>
                <Card.Text>When greed paves the way for betrayal, scheming and murder, a young tribal reluctantly dons the traditions of his ancestors to seek justice.</Card.Text>
                <Link to="/bookingkantara">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image8} />
              <Card.Body>
                <Card.Title>She Said</Card.Title>
                <Card.Text>The New York Times journalists Megan Twohey and Jodi Kantor publish a report that exposes sexual abuse allegations against powerful Hollywood producer Harvey Weinstein, serving as a launching pad for the #MeToo Movement.</Card.Text>
                <Link to="/bookingshesad">
                  {" "}
                  <Button style={{ cursor: "pointer", zIndex: 5, position: "relative"}} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Movies;