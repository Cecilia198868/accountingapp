import React from "react";
import "./playground.css";
import axios from "axios";

// fetch, axios

function Playground() {
	const handleCreateOrder = () => {
		console.log("--debug--", "create-order");
		axios.post("/v1/order/create", { dog: "11" });
	};
	const handleReadOrders = () => {
		console.log("--debug--", "read-orders");
	};
	return (
		<div className="App">
			<div>
				<button type="button" onClick={handleCreateOrder}>
					create order
				</button>
				<button type="button" onClick={handleReadOrders}>
					read orders
				</button>
			</div>
		</div>
	);
}

export default Playground;
