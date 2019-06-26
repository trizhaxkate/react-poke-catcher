import React, { Component } from 'react';
import pclogo from './pclogo.png';


export default class PcHeader extends Component {
  render() {
    return (
        <div className="header">
            <img className="logo" src={pclogo} alt="" border="0" />
        </div>
    );
  }
}
