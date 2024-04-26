import React from "react";
import "./playground.css";
import axios from "axios";
import logo from "/Applications/soure/softeditlearning/accountingapp/src/pages/playground/logo.png";

// fetch, axios

function Playground() {
	const handleCreateOrder = () => {
		axios.post("/v1/order/create", { id: 1 });
	};
	const handleReadOrders = () => {
		axios.get("/orders", { id: 2 });
	};

	return (
		<div className="homepage">
			<div className="header">
				{/* <img src={logo} alt="Logo" className="logo" /> */}
				<h1>Take Control of Your Finances</h1>
				<p>Simpliify Your Money with Ease</p>
				<button className="start-button" type="button">
					Get Started
				</button>
				{/* <button type="button" onClick={handleCreateOrder}>
					create order
				</button>
				<button type="button" onClick={handleReadOrders}>
					read orders
				</button> */}
			</div>
		</div>
	);
}

export default Playground;
