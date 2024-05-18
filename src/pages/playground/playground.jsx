import React from "react";
import "./playground.css";
import axios from "axios";
import { useState } from "react";

export function Playground() {
	const [list, setList] = useState([]);
	const handleCreateOrder = (type, title, amount, desc) => {
		axios.post("/v1/order/create", {
			type,
			title,
			amount,
			desc,
		});
	};
	const handleUpdateOrders = (id, type, title, amount) => {
		axios
			.patch("/v1/order/update", { id, type, title, amount })
			.then((response) => {
				console.log("Order updated successfully:", response.data);
				// alert("The order was updated.");
			})
			.catch((error) => {
				console.error("Failed to update order:", error);
			});
	};
	const handleReadOrders = (limit, offset) => {
		axios
			.get("/v1/orders", {
				limit,
				offset,
			})
			.then((response) => {
				console.log(response.data);
				setList(response.data.data);
			});
	};
	const handleReadOrder = (id) => {
		axios.get("/v1/order", {
			id,
		});
	};
	const handleDeleteOrders = (id) => {
		axios
			.delete(`/v1/order/delete/${id}`)
			.then((response) => {
				console.log("Order deleted successfully:", response.data);
			})
			.catch((error) => {
				console.error("Failed to delete order:", error);
			});
	};

	const [type, setType] = useState("");
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [desc, setDesc] = useState("");
	const [id, setId] = useState("");
	const [limit, setLimit] = useState("");
	const [offset, setOffset] = useState("");

	const createOrderSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		// event.stopPropagation();

		// alert("The order was create ");
		console.log({ type, title, amount, desc });
		handleCreateOrder(type, title, amount, desc);
	};
	const updateOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		handleUpdateOrders(id, type, title, amount);
	};
	const readOrderSubmit = (event) => {
		event.preventDefault();
		console.log({ id }); // 防止表单提交后页面重新加载
		handleReadOrder(id);
	};
	const readOrdersSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载

		// alert("The orders was read. ");
		console.log({ limit, offset });
		handleReadOrders(limit, offset);
	};
	const deleteOrdersSubmit = (event) => {
		event.preventDefault();
		console.log("Submitted id:", id);
		handleDeleteOrders(id);
	};
	const handleTypeChange = (event) => {
		setType(event.target.value);
	};
	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleDescChange = (event) => {
		setDesc(event.target.value);
	};

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};
	const handleIdChange = (event) => {
		setId(event.target.value);
	};
	const handleLimitChange = (event) => {
		setLimit(event.target.value);
	};
	const handleOffsetChange = (event) => {
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
				<div>
					{list.map((item) => {
						return (
							<div key={item.id}>
								- {item.id}, {item.title}, {item.amount}
							</div>
						);
					})}
				</div>
				<form onSubmit={createOrderSubmit}>
					<h2 className="create-orders">Create Orders</h2>
					<h3>
						<label className="label h2">
							type
							<input type="text" value={type} onChange={handleTypeChange} />
						</label>
						<label>
							title
							<input type="text" value={title} onChange={handleTitleChange} />
						</label>
						<label>
							amount
							<input
								type="number"
								value={amount}
								onChange={handleAmountChange}
							/>
						</label>
						<label>
							desc
							<input type="text" value={desc} onChange={handleDescChange} />
						</label>
					</h3>

					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrderSubmit}>
					<h2 className="read-order">Read Order</h2>
					<h3>
						<label>
							id
							<input type="text" value={id} onChange={handleIdChange} />
						</label>
					</h3>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={readOrdersSubmit}>
					<h2 className="read-orders">Read Orders</h2>
					<h3>
						<label>
							limit
							<input type="number" value={limit} onChange={handleLimitChange} />
						</label>
						<label>
							offset
							<input
								type="number"
								value={offset}
								onChange={handleOffsetChange}
							/>
						</label>
					</h3>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={updateOrdersSubmit}>
					<h2 className="update-orders">Update Orders</h2>
					<h3>
						<label>
							id
							<input type="text" value={id} onChange={handleIdChange} />
						</label>
						<label>
							type
							<input type="text" value={type} onChange={handleTypeChange} />
						</label>
						<label>
							title
							<input type="text" value={title} onChange={handleTitleChange} />
						</label>
						<label>
							amount
							<input
								type="number"
								value={amount}
								onChange={handleAmountChange}
							/>
						</label>
					</h3>
					<button type="submit">Submit</button>
				</form>
				<form onSubmit={deleteOrdersSubmit}>
					<h2 className="delete-orders">Delete Orders</h2>
					<h3>
						<label>
							Id
							<input type="text" value={id} onChange={handleIdChange} />
						</label>
					</h3>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
export default Playground;
