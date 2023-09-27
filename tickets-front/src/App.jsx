import "./App.css";
import { ContainerTickets } from "./components/ContainerTickets";
import { InfoRifa } from "./components/InfoRifa";
import { Verificador } from "./components/Verificador";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

function App() {

	// obtenerTickets(tickets)

	return <>
		<Navbar />
		<main className="container">
			<InfoRifa />
			<ContainerTickets />
			<Verificador />
		</main>
		<Footer />
	</>;
}

export default App;
