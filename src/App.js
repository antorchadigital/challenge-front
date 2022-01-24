import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './containers';
import { Home, Dashboard, Login, Register } from './pages';
import useAuth from './hooks/useAuth';
import { setDefaultUser } from './helpers/auth';

function App() {
	const { auth, setData } = useAuth();
	if (!localStorage.users) {
		setDefaultUser();
	}
	if (localStorage.auth && !auth.valid) {
		setData();
	}
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
