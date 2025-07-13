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
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3 shadow-sm rounded"
          style={{
            background: "linear-gradient(90deg, #01163E 0%, #2D46B9 100%)",
            borderRadius: "0 0 18px 18px",
            boxShadow: "0 4px 16px rgba(44,62,80,0.12)",
            padding: "0.5rem 0"
          }}
        >
          <Container fluid>
            <Navbar.Brand href="#" style={{
              fontWeight: 700,
              fontSize: "1.7rem",
              color: "#fff",
              letterSpacing: "1px",
              textShadow: "0 2px 8px rgba(44,62,80,0.12)"
            }}>🎟️ TicketMaestro</Navbar.Brand>
            <div style={{
              marginRight: 20,
              fontWeight: 600,
              color: '#fff',
              background: "rgba(44,62,80,0.08)",
              borderRadius: "8px",
              padding: "6px 18px",
              boxShadow: "0 2px 8px rgba(44,62,80,0.08)"
            }}>Balance: ₹{balance.toLocaleString()}</div>
            <Form className="d-flex" style={{marginRight: 16}}>
              <Form.Control
                type="search"
                placeholder="Search events, movies, trains..."
                className="me-2"
                aria-label="Search"
                style={{borderRadius: "8px", border: "1px solid #2D46B9"}}
              />
              <Button style={{
                borderRadius: "8px",
                background: "#2D46B9",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(44,62,80,0.08)"
              }}>Search</Button>
            </Form>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  🎟️ TicketMaestro
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/movies" style={{color: "#2D46B9", fontWeight: 600}}>Movies</Nav.Link>
                  <Nav.Link href="/concerts" style={{color: "#2D46B9", fontWeight: 600}}>Concerts</Nav.Link>
                  <Nav.Link href="/trains" style={{color: "#2D46B9", fontWeight: 600}}>Trains</Nav.Link>
                  <Nav.Link href="/my-tickets" style={{color: "#2D46B9", fontWeight: 600}}>My Tickets</Nav.Link>
                  <NavDropdown
                    title={<span style={{color: "#2D46B9", fontWeight: 600}}>More</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Rewards</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Delta Force FTW!</NavDropdown.Item>
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