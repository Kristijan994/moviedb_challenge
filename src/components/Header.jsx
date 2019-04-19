import React, { Component } from 'react';
import Logo from '../assets/logo.png';

export class Header extends Component {
  render() {
    return (
      <div className="header flex-2x">
        <div className="flex-1 offset-lr-5">
            <img src={Logo} alt="app_logo" className="Logo"/>
        </div>
        <div className="flex-2">
            <h3 className="fadeGrey">&nbsp; Movie<strong>DB</strong> Search app</h3>
        </div>
      </div>
    )
  }
}

export default Header
