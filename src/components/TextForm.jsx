import React, { useState } from "react";

function TextForm(props) {
	const [text, setText] = useState("");
	const [style, setStyle] = useState({
		color: "black",
		backgroundColor: "white",
	});

	const [btnTxt, setbtnTxt] = useState("Enable Dark Mode");

	const toggleState = () => {
		if (style.color == "black") {
			setStyle({
				color: "white",
				backgroundColor: "black",
			});
			setbtnTxt("Enable Light Mode");
		} else {
			setStyle({
				color: "black",
				backgroundColor: "white",
			});
			setbtnTxt("Enable Dark Mode");
		}
	};
	const Convert = () => {
		var newText = text.toUpperCase();
		setText(newText);
	};
	const func = (event) => {
		setText(event.target.value);
	};
	const ClearTxt = () => {
		setText("");
	};
	const speak = () => {
		let msg = new SpeechSynthesisUtterance();
		msg.text = text;
		window.speechSynthesis.speak(msg);
	};

	return (
		<>
			<div className="form-group">
				<h2 htmlFor="exampleFormControlTextarea1">{props.heading}</h2>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
					value={text}
					onChange={func}
					style={style}
				></textarea>
				<button className="btn btn-primary" onClick={Convert}>
					Convert to UpperCase
				</button>
				<button className="btn btn-danger mx-3 my-2" onClick={ClearTxt}>
					Clear Text
				</button>
				<button className="btn btn-success mx-3 my-2" onClick={speak}>
					Speak
				</button>
				<button className="btn btn-secondary mx-3 my-2" onClick={toggleState}>
					{btnTxt}
				</button>
			</div>
			<div className="container my-3">
				<h2>Content Summary</h2>
				<p>The total characters are {text.length}</p>
				<p>The total words are {text.split(" ").length}</p>
			</div>
		</>
	);
}

export default TextForm;
