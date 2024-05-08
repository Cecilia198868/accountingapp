import React from "react";
import "./playground.css";
import axios from "axios";
import { useState } from "react";

export function Playground() {
	const handleCreateOrder = (id, date, customer, amount) => {
		axios.post("/v1/order/create", {
			id,
			date,
			customer,
			amount,
		});
	};
	const handleUpdateOrders = (id, date, customer, amount) => {
		axios.patch("/v1/order/update", {
			id,
			date,
			customer,
			amount,
		});
	};
	const handleReadOrders = (startDate, endDate, customer) => {
		axios.get("/v1/orders", {
			startDate,
			endDate,
			customer,
		});
	};
	const handleReadOrder = (id) => {
		axios.get("/v1/order", {
			id,
		});
	};
	const handleDeleteOrders = (id) => {
		axios.delete("/v1/order/delete", {
			id,
		});
	};

	const [id, setId] = useState("");
	const [ids, setIds] = useState("");
	const [date, setDate] = useState("");
	const [customer, setCustomer] = useState("");
	const [amount, setAmount] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const createOrderSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("The order was create ");
		console.log({ id, date, customer, amount });
		handleCreateOrder(id, date, customer, amount);
	};
	const updateOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("The orders was updated. ");
		console.log({ id, date, customer, amount });
		handleUpdateOrders(id, date, customer, amount);
	};
	const readOrderSubmit = (event) => {
		event.preventDefault();
		console.log({ id }); // 防止表单提交后页面重新加载
		handleReadOrder(id);
	};
	const readOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载

		alert("The orders was read. ");
		console.log({ startDate, endDate, customer });
		handleReadOrders(startDate, endDate, customer);
	};
	const deleteOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("A id was submitted: ");
		console.log({ id });
		handleDeleteOrders(id);
	};
	const handleIdChange = (event) => {
		setId(event.target.value);
	};
	const handleIdsChange = (event) => {
		setIds(event.target.value);
	};
	const handleDateChange = (event) => {
		setDate(event.target.value);
	};

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const handleCustomerChange = (event) => {
		setCustomer(event.target.value);
	};
	const handleStartDateChange = (event) => {
		setStartDate(event.target.value);
	};
	const handleEndDateChange = (event) => {
		setEndDate(event.target.value);
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

				<form onSubmit={createOrderSubmit}>
					Create Orders
					<label>
						id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
					<label>
						date
						<input type="number" value={date} onChange={handleDateChange} />
					</label>
					<label>
						customer
						<input
							type="text"
							value={customer}
							onChange={handleCustomerChange}
						/>
					</label>
					<label>
						amount
						<input type="number" value={amount} onChange={handleAmountChange} />
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrderSubmit}>
					Read Order
					<label>
						id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrdersSubmit}>
					Read Orders
					<label>
						startDate
						<input
							type="number"
							value={startDate}
							onChange={handleStartDateChange}
						/>
					</label>
					<label>
						endDate
						<input
							type="number"
							value={endDate}
							onChange={handleEndDateChange}
						/>
					</label>
					<label>
						customer
						<input
							type="text"
							value={customer}
							onChange={handleCustomerChange}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={updateOrdersSubmit}>
					Update Orders
					<label>
						id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
					<label>
						date
						<input type="number" value={date} onChange={handleDateChange} />
					</label>
					<label>
						customer
						<input
							type="text"
							value={customer}
							onChange={handleCustomerChange}
						/>
					</label>
					<label>
						amount
						<input type="number" value={amount} onChange={handleAmountChange} />
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={deleteOrdersSubmit}>
					Delete Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
export default Playground;
