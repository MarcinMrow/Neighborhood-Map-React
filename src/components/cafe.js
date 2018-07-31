import React from "react";
// import "./App.css";

export class Cafe extends React.Component {
	/*
  state = {
    cafes: [],
    value: '',
    title: '',
    selectedCafe: null,
  };
  */

	handleClick = () => {
		this.props.selectCafe(this.props.cafe);
	}

/*
	handleClick = (event) => {
		this.setState({value: event.target.value});
		console.log('click');
	}*/

	render() {
		/*const title = this.props.cafe.name + " - " + this.props.cafe.address;*/
		const title = this.props.cafe.name;
		
		/*
		const style = {
		 	backgroundImage: `url('${this.props.cafe.imageUrl}')`
		}; 
		*/

		return (

			<div className="cafe"
				// value={this.state.value}
				onClick={this.handleClick}>
				<div className="cafe-picture" /*style={style}*/></div>
				<div className="cafe-title">
					{title}	
				</div>
			</div>
			
		);
	}
}

export default Cafe;