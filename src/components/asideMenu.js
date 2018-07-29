import React from "react";
import Cafe from "./cafe";

export class Menu extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
    	cafes: [],
    	value: '',
    	title: '',
    	allCafes: [],
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

	render() {
		/*const title = this.props.cafe.name + " - " + this.props.cafe.address;*/
		//const title = this.props.cafe.name;
		/*
		const style = {
		 	backgroundImage: `url('${this.props.cafe.imageUrl}')`
		}; 
		*/
		let center;
    // test
    if (this.state.selectCafe) {
      center = {
        lat: this.state.selectedCafe.lat,
        lng: this.state.selectedCafe.lng
      }
    }

		return (
			<div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch} />
        </div>
          
        <div className="cafes">
            
        	{ // test
         	this.state.cafes.map((cafe) => {
          	return <Cafe 
              key={cafe.name} 
              cafe={cafe} 
              selectCafe={this.selectCafe} 
            />
          })}
        </div>

      </div>
		);
	}
}

export default Menu;