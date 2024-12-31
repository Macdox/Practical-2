import { motion } from "framer-motion";

import { useAuthstore } from "../Stores/authstores";

const DashboardPage = () => {
	const { teacher, logout } = useAuthstore();

	const handleLogout = () => {
		logout();
	};
	return (
		<>
		<button onClick={handleLogout}>
			Click
		</button>
		<div>Dashboard</div>
		</>
	);
};
export default DashboardPage;
