import React from "react";
// import "./App.css";

export class Cafe extends React.Component {

	handleClick = (event) => {
		this.setState({value: event.target.value});
		console.log('click');
	}

	render() {
		/*const title = this.props.cafe.name + " - " + this.props.cafe.address;*/
		const title = this.props.item.name;

		return (

			<div className="cafe"
				onClick={this.handleClick}>
				<div className="cafe-title">
					{title}	
				</div>
			</div>
			
		);
	}
}

export default Cafe;