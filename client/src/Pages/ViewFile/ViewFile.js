import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class ViewFile extends Component {
  // Setting our component's initial state
  state = {
   file: {}
  };

  componentDidMount() {
    API.getFile(this.props.match.params.id)
      .then(res => { 
        this.setState({ volunteer: res.data })
        this.parseType()
      })
      .catch(err => console.log(err));
  }

 
  

  render() {
    return (
      <div></div>
           
    );
  }
}

export default ViewFile;
