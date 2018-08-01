import React from "react";
import Cafe from "./cafe";

export class AsideMenu extends React.Component {
  // exported
  state = {
  	value: '',
   	allCafes: [],
    selectedCafe: null,
    search: "",
  };
  // exported
  selectCafe = (cafe) => {
    console.log(cafe);
    this.setState({
      selectedCafe: cafe
    })
  }
/*
  //
  handleSearch = (event) => {  
    this.setState({
      search: event.target.value,
      cafes: this.state.allCafes.filter((cafe) => new RegExp(event.target.value, "i").exec(cafe.name))
    });
  }*/

  handleSearch = (event) => {  
    this.setState({
      search: event.target.value,
      cafes: this.state.allCafes.filter((cafe) => new RegExp(event.target.value, "i").exec(cafe.name))
    });
  }

	render() {
    const { allCafes, title, cafe, mylocations } = this.props;
    // console.log('AsideMenu reads props ',allCafes);

    // test
    let center = {
      lat: 51.1079,
      lng: 17.0385
    }
    if (this.state.selectedCafe) {
      center = {
        lat: this.state.selectedCafe.lat,
        lng: this.state.selectedCafe.lng
      }
    }

		return (
			<div className="main">

        {/*
        <nav id="menu" className="toggle-menu" onClick={this.toggleList}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
          </svg>
        </nav>
        */}

        {
        /*
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </div>
        */
        }
        
        {
        /*         
        <div className="cafes">
          {
          (allCafes !== undefined && allCafes !== null && allCafes.length > 0 ) && (
            <ul>
              { allCafes.map((cafe, index) => {
                // console.log('cafe');
                return <Cafe 
                  key={cafe.name} 
                  cafe={cafe} 
                  selectCafe={this.selectCafe}

                />
              }
              )}
            </ul>)
          }
        </div>
        */
        }
      </div>
		);
	}
}

export default AsideMenu;

/*
 // test
          /*this.state.cafes.map((cafe) => {
            // console.log('cafe');
            return <Cafe 
              key={cafe.name} 
              cafe={cafe} 
              selectCafe={this.selectCafe}
            />
          })*/
         
/*
{
            (allCafes !== undefined && allCafes !== null && allCafes.length > 0 ) && (
              <ul>
                { allCafes.map((cafe, index) => (
                  <li key={index}>
                    {cafe.name }
                  </li>
                  )
                )}
              </ul>)
          }
*/