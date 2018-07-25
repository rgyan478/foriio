import React, { Component } from "react";
import axios from 'axios'
export default class Header extends Component {
  render(){
    return(<header>
        <div className="header_container">
            <div className="header_left_logo">
                <a href="/">foriio</a>
                <span>Portfolio made easy</span>
            </div>
            <div className="header_right_button">
                <ul className="text-right">
                    <li>
                        <a href="#" className="hero_btn">Join for free</a>
                    </li>
                    <li>
                        <a href="#" className="btn_link">Log in</a>
                    </li>
                    <li>
                        <select className="header_dropdown">
                            <option>JP</option>
                            <option>En</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="clr"></div>
        </div>
    </header>)
  }
}






