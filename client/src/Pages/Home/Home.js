import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'reactstrap';
import "./Home.css"
import Landing from "../../Components/Landing"
import Content from "../../Components/Content"
import Url from "../../Components/Url"
import Files from "../Files"
import ViewFile from "../ViewFile"

// import API from "../../utils/API";

class Home extends Component {
  // Setting our component's initial state
  state = {
    landing: true,
    btnClicked: false,
    isContentSubmitted: false,
    viewFile: false,
    contentType: ""
  };

  componentDidMount(){
    this.resetState()
  }

  handleBtnClick = event => {
    this.resetState()
    const { name, value } = event.target;
    this.setState({
          [name]: value,
          btnClicked: true
        });
    // this.contentSubmitted()
  }

  contentSubmitted = () => {
    this.setState({
      isContentSubmitted: true,
      btnClicked: false
    })
  }

  backToURL = () => {
    this.setState({
      btnClicked: true,
      isContentSubmitted: false,
    })
  }

  
  resetState = () => {
    this.setState({
      landing: true,
      btnClicked: false,
      isContentSubmitted: false,
      contentType: ""
    });
  }

  // renderPage = () => {
  //   if (this.state.btnClicked) {
  //     return <Url contentType={this.state.contentType} contentSubmitted={this.contentSubmitted}/> ;
  //   } else if (this.state.isContentSubmitted){
  //     return   <Files contentSubmitted={this.contentSubmitted} backToURL={this.backToURL}/>
  //   } else if(this.state.viewFile){
  //       return <ViewFile/>
  //   } 
  //   else {
  //     return  <Landing contentClicked={this.handleBtnClick} contentSubmitted={this.contentSubmitted}
  //     />
  //   }
  // };

  

  render() {
    return (
      <div>
        <Landing/>
        {/* {this.renderPage()} */}
       {/* {this.state.btnClicked 
        ? 
        <Content
        contentType={this.state.contentType}
        contentSubmitted={this.contentSubmitted}
        /> 
        : 
        this.state.isContentSubmitted
        ?
        <Files 
        contentSubmitted={this.contentSubmitted}
        backToURL={this.backToURL}
        />
        :
        <Landing
        contentClicked={this.handleBtnClick}
        contentSubmitted={this.contentSubmitted}
        />
        }  */}
      </div>
    );
  }
}

export default Home;
