import React from "react";
import { Marker } from "react-google-maps";

export default class Marker extends React.Component {

  render() {

    return (
    	
        <Marker
          position={this.props.location}
        >
        </Marker>
    );
  }
}

export default Marker;