import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./Home.css"
import Landing from "../../Components/Landing"
import Content from "../../Components/Content"

// import API from "../../utils/API";

class Home extends Component {
  // Setting our component's initial state
  state = {
    landing: true,
    btnClicked: false,
    contentType: ""
  };

  componentDidMount(){
    this.resetState()
  }

  handleBtnClick = event => {
    console.log(event.target.parentNode)
    this.resetState()
    const { name, value } = event.target;
    console.log(name)
    console.log(value)
    this.setState({
          [name]: value,
          btnClicked: true
        });
  }

  resetState = () => {
    this.setState({
      landing: true,
      btnClicked: false,
      contentType: ""
    });
  }

  

  render() {
    return (
      <div>
       {this.state.btnClicked 
        ? 
        <Content
        contentType={this.state.contentType}
        /> 
        : 
        <Landing
        contentClicked={this.handleBtnClick}
        />
        } 
      </div>
    );
  }
}

export default Home;
