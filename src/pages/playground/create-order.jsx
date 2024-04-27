import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import handleThrow from "../../utils/handle-throw";

const CreateOrderPage = () => {
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
		<form onSubmit={handleCreateOrder}>
			{/* Form inputs go here, for example: */}
			<input
				name="product"
				value={orderDetails.product}
				onChange={handleThrow}
			/>
			<input
				name="quantity"
				type="number"
				value={orderDetails.quantity}
				onChange={handleCreateOrder}
			/>
			{loading ? "Processing..." : "Get Started"}

			<button type="submit">Submit Order</button>
		</form>
	);
};

export default CreateOrderPage;
