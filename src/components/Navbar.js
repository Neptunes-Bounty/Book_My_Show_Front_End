import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from 'react';
function Navbar1() {
  const [balance, setBalance] = React.useState(50000);
  React.useEffect(() => {
    // Fetch user balance from backend if logged in
    fetch('https://book-my-show-back-end.onrender.com/user-balance', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        if (data.balance !== undefined) setBalance(data.balance);
      });
  }, []);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">BookMyShow</Navbar.Brand>
            <div style={{marginRight: 20, fontWeight: 600, color: '#2d2d2d'}}>Balance: ₹{balance.toLocaleString()}</div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/movies">Movies</Nav.Link>
                  <Nav.Link href="/concerts">Concerts</Nav.Link>
                  <Nav.Link href="/trains">Trains</Nav.Link>
                  <Nav.Link href="/my-tickets">My Tickets</Nav.Link>
                  <NavDropdown
                    title="More"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Rewards
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Notification
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;