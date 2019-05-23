import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./Home.css"
// import API from "../../utils/API";

class Home extends Component {
  // Setting our component's initial state
  state = {
    
  };

  

  render() {
    return (
      <div className="container blog">
      <Row>
        <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/content">Add URL</Link>
        </div>
        <div className="col-md-2 col-sm-2">
        <Link className="btn btn-light" to="/files">View All URL Files</Link>
        </div>
      
      </Row>
      {/* ------------------ Work in progress below ------------------------------ */}
      {/* <Container className="containerBox">
        <Row>
    
          <Col>
            <form id="author-form">
            
              <input placeholder="Enter a name" className="form-control urlBox" name="fileName" type="text" value={this.state.fileName} onChange={this.handleInputChange} />
              
              <button type="submit" className="btn btn-success urlSubmit" onClick={this.handleFormSubmit}>Create File</button>
              
            </form>
          </Col>
        </Row>
      </Container> */}
    </div>
    );
  }
}

export default Home;
