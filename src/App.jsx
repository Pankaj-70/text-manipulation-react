import Navbares from "./components/Navbares";
import TextForm from "./components/TextForm";

function App() {
	return (
		<>
			<Navbares></Navbares>
			<div className="container">
				<br />
				<TextForm heading="Enter your text here"></TextForm>
				<br />
			</div>
		</>
	);
}

export default App;
