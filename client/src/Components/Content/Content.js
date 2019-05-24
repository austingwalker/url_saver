import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Url from "../Url/Url"

class Content extends Component {
  // Setting our component's initial state
  state = {
    contenType: ""
  };

  componentDidMount(){
    this.renderPage()
    this.setState({
      contentType: this.props.contentType
    })
  }

  renderPage = () => {
    if (this.state.contentType === "url") {
      return <Url />;
    } 
    
    // else if (this.state.currentPage === "About") {
    //   return <About />;
    // } else if (this.state.currentPage === "Blog") {
    //   return <Blog />;
    // } else {
    //   return <Contact />;
    // }
  };


  render() {
    return (
        <div className="container hidden">
          {this.renderPage()}
        </div>
    );
  }
}

export default Content;
