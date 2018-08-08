import React from "react";

class Item extends React.Component {

  

  render() {
    const title = this.props.item.name;

    return (
      <div className="cafe"
        onClick={this.props.handleClick}
        role="button"
        tabIndex={0}   
        
        >
          <div className="cafe-title">
            {title}
          </div> 
        </div>
      );
  }
}

export default Item;