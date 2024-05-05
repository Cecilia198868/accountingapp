import React from "react";
import "./playground.css";
import axios from "axios";
import { useState } from "react";

function Playground() {
	const handleCreateOrder = (id, title, type, desc) => {
		axios.post("/v1/order/create", {
			id,
			title,
			type,
			desc,
		});
	};
	const handleUpdateOrders = (id, name, assigned, title, type, desc) => {
		axios.post("http://localhost:3001/v1/order/create", {
			id,
			name,
			assigned,
			title,
			type,
			desc,
		});
	};
	const handleReadOrders = (id, title, type, desc, limit, offset) => {
		axios.post("http://localhost:3001/v1/order/create", {
			id,
			title,
			type,
			desc,
			limit,
			offset,
		});
	};
	const handleReadOrder = (id, title, type, desc, name, assigned) => {
		axios.post("http://localhost:3001/v1/order/create", {
			id,
			title,
			type,
			desc,
			name,
			assigned,
		});
	};
	const handleDeleteOrders = (id, title, type, desc) => {
		axios.post("http://localhost:3001/v1/order/create", {
			id,
			title,
			type,
			desc,
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

	const handleSubmit = (event) => {
		event.preventDefault(); // 防止表单提交后页面重新加载
		event.stopPropagation();
		alert("A name was submitted: ");
		console.log({ id, title, type, description });
		handleCreateOrder(id, title, type, description);
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

				<form onSubmit={handleSubmit}>
					Create Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
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
				<form onSubmit={handleSubmit}>
					Read Order
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
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
				<form onSubmit={handleSubmit}>
					Read Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
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
				<form onSubmit={handleSubmit}>
					Update Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
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
				<form onSubmit={handleSubmit}>
					Delete Orders
					<label>
						Id
						<input type="number" value={id} onChange={handleIdChange} />
					</label>
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
			</div>
		</div>
	);
}
export default Playground;
