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
		class: "AC First Class",
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
		class: "Executive Chair Car",
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
		class: "Executive Chair Car",
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
		class: "AC First Class",
	},
];

function Trains() {
	return (
		<>
			<h2
				style={{
					textAlign: "center",
					marginTop: "30px",
					marginBottom: "20px",
					fontWeight: 700,
					fontSize: 32,
					color: "#2d2d2d",
				}}
			>
				Available Trains
			</h2>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 15px",
				}}
			>
				<CardGroup>
					{trains.map((train) => (
						<Card
							key={train.id}
							className="m-3 shadow-lg"
							style={{
								borderRadius: 18,
								overflow: "hidden",
								minWidth: 280,
							}}
						>
							<Card.Body
								style={{
									background: "#f8f9fa",
									borderRadius: 18,
								}}
							>
								<Card.Title
									style={{
										fontWeight: 600,
										fontSize: 22,
									}}
								>
									{train.name}
								</Card.Title>
								<Card.Subtitle
									className="mb-2 text-muted"
									style={{
										fontWeight: 500,
										fontSize: 16,
									}}
								>
									{train.number}
								</Card.Subtitle>
								<Card.Text
									style={{
										fontSize: 16,
										color: "#444",
									}}
								>
									<strong>Route:</strong> {train.route}
									<br />
									<strong>Departure:</strong> {train.departure}
									<br />
									<strong>Arrival:</strong> {train.arrival}
									<br />
									<strong>Duration:</strong> {train.duration}
									<br />
									<strong>Class:</strong> {train.class}
									<br />
									<strong>Price:</strong>{" "}
									<span style={{ color: "#1976d2" }}>
										₹{train.price}
									</span>
								</Card.Text>
								<Link to={`/booking-train/${train.id}`}>
									<Button
										style={{
											cursor: "pointer",
											borderRadius: 8,
											fontWeight: 500,
											fontSize: 16,
											padding: "8px 24px",
											background:
												"linear-gradient(90deg,#1976d2,#43e97b)",
										}}
										variant="primary"
									>
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
