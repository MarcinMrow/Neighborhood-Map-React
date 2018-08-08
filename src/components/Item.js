import React from "react";

class Item extends React.Component {

  handleClick = () => {
    console.log('click on cafe')
    // console.log('this is:', this)
    // call the selectCafe
    this.props.selectCafe(this.props.item);
  }

  render() {
    const title = this.props.item.name;

    return (
      <div className="cafe"
        // onClick={this.handleClick}
        // `this` is bound within handleClick
        onClick={(e) => this.handleClick(e)} 
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