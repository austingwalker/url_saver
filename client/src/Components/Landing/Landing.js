import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import "./Landing.css"

// import API from "../../utils/API";

class Landing extends Component {
  // Setting our component's initial state
  state = {
    landing: true,
    btnClicked: false
  };

  

  render() {
    return (
        <Container className="containerBox">
          <Row>
            <Col>
              <Row>
                <Col md="2">
                </Col>
                <Col className="btnBox">
                <div >
                  <h4 className="title">Select which type of content you'd like to add.</h4>
                </div>
                  <div>
                    <button type="button"className="btn btn-info contentBtn contentBtn1" type="button" name="contentType" value="url" onClick={this.props.contentClicked}>URL</button>
                    {/* <i className="fas fa-laptop fa-3x"></i><h5>URL</h5> */}
                  </div>
                  <div>
                  {/* <button type="button"className="btn btn-info contentBtn contentBtn2">Picture</button> */}
                    <Link className="btn btn-info contentBtn contentBtn2" to="/content"><i className="fas fa-camera-retro fa-3x"></i><h5>Picture</h5></Link>
                  </div>
                  <div>
                  {/* <button type="button"className="btn btn-info contentBtn contentBtn3">Text</button> */}
                    <Link className="btn btn-info contentBtn contentBtn3" to="/content"><i className="fas fa-stream fa-3x"></i><h5>Text</h5></Link>
                  </div>
                  <div >
                    <h5 className="comingSoon comingSoonPic">(Coming Soon)</h5> <h5 className="comingSoon comingSoonText">(Coming Soon)</h5>
                  </div>
                </Col>
                <Col md="2">
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Landing;
