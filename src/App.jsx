import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/vans";
import VanDetail from "./pages/VanDetail";

import "./server";

function App() {
	return (
		<BrowserRouter>
			<header className={"flex justify-between mb-2 p-2"}>
				<Link to="/">#VANLIFE</Link>
				<nav className="flex gap-2">
					<Link to="/about">About</Link>
					<Link to="/vans">Vans</Link>
				</nav>
			</header>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/about"} element={<About />} />
				<Route path={"/vans"} element={<Vans />} />
				<Route path={"/vans/:id"} element={<VanDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
