
import React from 'react';

class CafeOptions extends React.Component {
	
	render() {

		const options = this.props.items.map((item, index) => {
			return (
				<div className="cafe" onClick={this.handleClick}>
					<div className="cafe-title">
    				<li key={item.id} cafe={item} selectCafe={this.selectCafe}>
      				{item.name}
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

const CafeOptions = (props) => {
  const options = props.cafes.map(cafe => (
    <li key={cafe.id}>
      {cafe.name}
    </li>
  ))
  return <ul>{options}</ul>
}

export default CafeOptions;
*/


/*
import React from 'react';

const CafeOptions = (props) => {

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

export default CafeOptions;*/