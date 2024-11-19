import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MustardHabitProvider } from "../Context";
import { NavBar } from "../NavBar/NavBar";
import { HabitCalendar } from "../HabitCalendar/HabitCalendar";
import { HomePage } from "../HomePage/HomePage";
import "./App.css";

function App() {
	return (
		<MustardHabitProvider>
			<BrowserRouter>
				<div>
					<NavBar />
				</div>

				<div className="NavigationContainer">
					<Routes>
						<Route path="/app-mustard-habit/" element={<HomePage />} />

						<Route
							path="/app-mustard-habit/calendar"
							element={<HabitCalendar />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</MustardHabitProvider>
	);
}

export default App;
