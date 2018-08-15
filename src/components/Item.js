import React from "react";

class Item extends React.Component {

  bounceMarker = (props) => {
    console.log(props);
    this.props.handleClick(props.id);
  }

  render() {
    const title = this.props.item.name;

    return (
      <div className="cafe"
        onClick={this.bounceMarker.bind(this, this.props.item)}
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