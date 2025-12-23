import React, { Component } from 'react';
import Section1 from './Section1';

class Banner extends Component {
  render() {
    const myStyles={
      background:"yellowgreen",
      color:"red",
      boxShadow:"2px 5px 10px gray",
    }
    return (
      <div>
        <h1>Welcome to the banner section</h1>
        <h4 style={myStyles}>from banner section</h4>
        <Section1 />
        <Section1 />
        <Section1 />
      </div>
    )
  }
}

export default Banner;