import React from "react";
import "./playground.css";
import axios from "axios";
import { useState } from "react";

function Playground() {
	const handleCreateOrder = (title, type, desc) => {
		axios.post("/v1/order/create", {
			title,
			type,
			desc,
		});
	};
	const handleUpdateOrders = (id, name, assigned) => {
		axios.patch("/v1/order/:id/update", {
			id,
			name,
			assigned,
		});
	};
	const handleReadOrders = (limit, offset) => {
		axios.get("/v1/orders", {
			limit,
			offset,
		});
	};
	const handleReadOrder = (name, assigned) => {
		axios.get("/v1/order", {
			name,
			assigned,
		});
	};
	const handleDeleteOrders = (id) => {
		axios.delete("/v1/order/:id/delete", {
			id,
		});
	};

	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");
	const [name, setName] = useState("");
	const [assigned, setAssigned] = useState("");
	const [limit, setLimit] = useState("");
	const [offset, setOffset] = useState("");

	const createOrderSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("A title was submitted: ");
		console.log({ title, type, description });
		handleCreateOrder(title, type, description);
	};
	const updateOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("A id was submitted: ");
		console.log({ id, name, assigned });
		handleUpdateOrders(id, name, assigned);
	};
	const readOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("A limit was submitted: ");
		console.log({ limit, offset });
		handleReadOrders(limit, offset);
	};
	const readOrderSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		alert("A name was submitted: ");
		console.log({ name, assigned });
		handleReadOrder(name, assigned);
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

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleTypeChange = (event) => {
		setType(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleName = (event) => {
		setName(event.target.value);
	};
	const handleAssigned = (event) => {
		setAssigned(event.target.value);
	};
	const handleLimit = (event) => {
		setLimit(event.target.value);
	};
	const handleOffset = (event) => {
		setOffset(event.target.value);
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
						Title
						<input type="text" value={title} onChange={handleTitleChange} />
					</label>
					<label>
						Type
						<input type="text" value={type} onChange={handleTypeChange} />
					</label>
					<label>
						Describe
						<input
							type="text"
							value={description}
							onChange={handleDescriptionChange}
						/>
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrderSubmit}>
					Read Order
					<label>
						Name
						<input type="text" value={name} onChange={handleName} />
					</label>
					<label>
						Assigned
						<input type="number" value={assigned} onChange={handleAssigned} />
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrdersSubmit}>
					Read Orders
					<label>
						Limit
						<input type="number" value={limit} onChange={handleLimit} />
					</label>
					<label>
						Offset
						<input type="number" value={offset} onChange={handleOffset} />
					</label>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={updateOrdersSubmit}>
					Update Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
					<label>
						Name
						<input type="text" value={name} onChange={handleName} />
					</label>
					<label>
						Assigned
						<input type="number" value={assigned} onChange={handleAssigned} />
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
