import React from "react";
// import "./App.css";

export class Cafe extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
    	cafes: [],
    	value: '',
    	title: '',

    };

    this.handleClick = this.handleClick.bind(this);
  }
/*
	handleClick = () => {
		this.props.selectCafe(this.props.cafe);
	}*/

	handleClick = (event) => {
		this.setState({value: event.target.value});
		console.log('click');
	}

/*
	//
  handleSearch = (e) => {
    
    this.setState({
      search: e.target.value,
      cafes: this.state.allCafes.filter((cafe) => new RegExp(e.target.value, "i").exec(cafe.name))
    });
  }

  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }
  */

	render() {
		/*const title = this.props.cafe.name + " - " + this.props.cafe.address;*/
		const title = this.props.cafe.name;
		/*
		const style = {
		 	backgroundImage: `url('${this.props.cafe.imageUrl}')`
		}; 
		*/
		// const cafe = this.props.cafe;

		

		return (

			<div className="cafe" 
				value={this.state.value}
				onClick={this.handleClick}>
				<div className="cafe-picture"></div>
				<div className="cafe-title">
					{title}	
				</div>
			</div>
			
		);
	}
}

export default Cafe;