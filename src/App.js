import React from "react";
import "./index.css";
class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			blocks: [],
		};
	}
	render() {
		return (
			<div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
				<div>
					<button onClick={this.createNewNode}>new block</button>
				</div>
				<div style={{ display: "flex" }}>
					{this.state.blocks.map(({ id, height, width, left, top }) => (
						<div
							key={id}
							style={{
								position: "absolute",
								border: "1px solid black",
								height,
								width,
								left,
								top,
								background: `#${Math.floor(Math.random() * 16777215).toString(16)}`
							}}
						/>
					))}
				</div>
				<div>
					<button>Zoom In</button>
				</div>
				<div>
					<button>Zoom Out</button>
				</div>
			</div>
		);
	}
	createNewNode = () => {
		const { blocks } = this.state;
		const newBlock = {
			id: Math.random(),
			width: 100,
			height: 100,
			left: window.innerWidth / 2 - 50,
			top: window.innerHeight / 2 - 50,
		};
		this.setState({
			blocks: [...blocks, newBlock],
		});
	};
}
export default App;
