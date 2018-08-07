/*import React from "react";

class ItemRow extends React.Component {

  render() {
    const item = this.props.item;
    

      <span>
        {item}
      </span>;

    return (
      <tr>
        <td>{item}</td>
        
      </tr>
    );
  }
}

export default ItemRow;*/

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
    /*const name = item.name;
      <span>
        {item.name}
      </span>;*/
  
    return (
      <div className="cafe"
        // onClick={this.handleClick}
        onClick={(e) => this.handleClick(e)} // `this` is bound within handleClick
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