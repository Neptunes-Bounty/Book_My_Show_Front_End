import Nav from "react-bootstrap/Nav";
import Popup from "reactjs-popup";
import {  useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Login from "./loginsignup";
import axios from "axios";
function Navigation() {
  const [login, setlogin] = useState("Login/SignUp");

  axios
    .post("https://book-my-show-back-end.onrender.com/check")
    .then((response) => {
      console.log(response.data);
      setlogin(response.data);
    })
    .catch((error) => {
      "error";
    });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/movies">Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/concerts">Concerts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/trains">Trains</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="my-tickets">MyTickets</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/future-integration">Dashboard</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/future-integration">Payments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/future-integration">Download Tickets</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Popup
                  trigger={<Nav.Link eventKey="link-3">{login}</Nav.Link>}
                  modal
                  nested
                  closeOnDocumentClick
                >
                  <div>
                    <Login />
                  </div>
                </Popup>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Navigation;