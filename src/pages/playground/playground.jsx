import React from "react";
import "./playground.css";
import axios from "axios";

// fetch, axios

function Playground() {
	const handleCreateOrder = () => {
		axios.post("/v1/order/create", {
			id: 1,
			title: "1",
			type: "wants",
			desc: "lot",
		});
	};
	const handleUpdateOrders = () => {
		axios.post("/v1/order/create", {
			orderId: 2,
			newName: "Gas",
			newAssigned: 300,
			title: "1",
			type: "wants",
			desc: "lot",
		});
	};
	const handleReadOrders = () => {
		axios.post("/v1/order/create", {
			id: 2,
			title: "1",
			type: "wants",
			desc: "lot",
			limit: 99,
			offset: 5,
		});
	};
	const handleReadOrder = () => {
		axios.post("/v1/order/create", {
			id: 2,
			title: "1",
			type: "wants",
			desc: "lot",
			name: "water",
			assigned: 200,
		});
	};
	const handleDeleteOrders = () => {
		axios.post("/v1/order/create", {
			id: 2,
			title: "1",
			type: "wants",
			desc: "lot",
		});
	};

	return (
		<div className="homepage">
			<div className="header">
				{/* <img src={logo} alt="Logo" className="logo" /> */}
				{/* <h1>Take Control of Your Finances</h1>
				<p>Simpliify Your Money with Ease</p>
				<button className="start-button" type="button">
					Get Started
				</button> */}
				<button type="button" onClick={handleCreateOrder}>
					create order
				</button>
				<button type="button" onClick={handleReadOrders}>
					read orders
				</button>
				<button type="button" onClick={handleUpdateOrders}>
					Update Orders
				</button>
				<button type="button" onClick={handleReadOrder}>
					read order
				</button>
				<button type="button" onClick={handleDeleteOrders}>
					Delete Orders
				</button>
			</div>
		</div>
	);
}

export default Playground;
