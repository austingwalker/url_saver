import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  // Setting our component's initial state
  state = {
    
  };

  

  render() {
    return (
      <div className="container blog">
      <div className="row">
        <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/content">Add URL</Link>
          {/* <a className="btn btn-light" href="/cms">New Post</a> */}
        </div>
        <div className="col-md-2 col-sm-2">
        <Link className="btn btn-light" to="/files">View Files</Link>
          {/* <a className="btn btn-light" href="/authors">Manage Authors</a> */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 blog-container">
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
