import "./App.css";
import { InfoRifa } from "./components/InfoRifa";
import { ListOfTickets } from "./components/ListOfTickets";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

function App() {
	return <>
		<Header />
		<main className="container">
			<InfoRifa />
			<ListOfTickets />
		</main>
		<Footer />
	</>;
}

export default App;
