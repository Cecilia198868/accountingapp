import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Playground from "./playground.jsx";
import CreateOrderPage from "./create-order.jsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Playground />} />
				<Route path="/create-order" element={<CreateOrderPage />} />
			</Routes>
		</Router>
	);
};

export default App;
