import React from 'react';

class CafeOptions extends React.Component {
	render() {
		const options = this.props.cafes.map((cafe, index) => {
			return (
				<div className="cafe" onClick={this.handleClick}>
					<div className="cafe-picture"></div>
					<div className="cafe-title">
    				<li key={cafe.id} cafe={cafe} selectCafe={this.selectCafe}>
      				{cafe.name}
    				</li>
    			</div>
    		</div>
			)
		})
		return (
			<ul>{options}</ul>
		)
	}
}

export default CafeOptions;

/*
import React from 'react';

const Suggestions = (props) => {
  const options = props.items.map(cafe => (
    <li key={cafe.id}>
      {cafe.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions;
*/


/*
import React from 'react';

const Suggestions = (props) => {

  const options = props.cafes.map((cafe, index) => (
  	
  	<div className="cafe" onClick={this.handleClick}>
  		<div className="cafe-picture"></div>
			<div className="cafe-title">
    		<li key={cafe.id} cafe={cafe} selectCafe={this.selectCafe}>
      		{cafe.name}
    		</li>
    	</div>
    </div>	
  ))
  return <ul>{options}</ul>
}

export default Suggestions;*/