
import "./App.css";
import './utils/normalize.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./utils/router.jsx";

function App() {
	return (
			<RouterProvider router={router} />
	);
}

export default App;
