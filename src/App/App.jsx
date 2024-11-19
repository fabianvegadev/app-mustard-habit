import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MustardHabitProvider } from "../Context";
import { Layout } from "../Layout";
import { NavBar } from "../NavBar/NavBar";
import { HabitCalendar } from "../HabitCalendar/HabitCalendar";
import { HomePage } from "../HomePage/HomePage";
import "./App.css";

function App() {
	return (
		<MustardHabitProvider>
			<BrowserRouter>
				<header>
					<NavBar />
				</header>

				<Layout>
					<Routes>
						<Route path="/app-mustard-habit/" element={<HomePage />} />

						<Route
							path="/app-mustard-habit/calendar"
							element={<HabitCalendar />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</MustardHabitProvider>
	);
}

export default App;
