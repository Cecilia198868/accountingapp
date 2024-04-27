import React from "react";
import "./playground.css";
import axios from "axios";
import image from "./homepagepicture.webp";
import logo from "./logo.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import App from "./App"; // 只有在playground.jsx真的需要App组件时才这样做

// fetch, axios

function Playground() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const handleCreateOrder = () => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/path`)
			.then(() => {
				navigate("/newPath");
				setLoading(false);
				alert("Order created successfully! Redirectin...");
			})
			.catch((err) => {
				console.error("Failed to create order:", err);
				setLoading(false);
				alert("Oops! Something went wrong. Please try again.");
			});
	};

	return (
		<div className="homepage">
			<div>
				<img src={image} alt="Homepage" className="homepage-image" />
			</div>
			<div className="header">
				<img src={logo} alt="Logo" className="logo" />
				<h2 className="h2">EaseCount</h2>
			</div>

			<div className="content">
				<h1 className="h1">Take Control of Your Finances</h1>
				<p className="p">Simpliify Your Money with Ease</p>
				<button
					className="start-button"
					type="button"
					onClick={handleCreateOrder}
					disabled={loading}
				>
					{loading ? "Processing..." : "Get Started"}
				</button>
			</div>
		</div>
	);
}

export default Playground;
