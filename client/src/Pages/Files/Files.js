import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Files.css"
import FileModal from "../../Components/FileModal"

class Files extends Component {
  // Setting our component's initial state
  state = {
    files: [],
    fileName: ""
    
  };

  componentDidMount(){
    this.renderAllFiles()
    this.resetState()
  }

  renderAllFiles = () => {
    API.getFiles()
    .then(res => {
      
      this.setState({ files: res.data})
    })
    .catch(err => console.log(err));   
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.fileName) {
      API.addFile({
        name: this.capitalize(this.state.fileName)
      })
        .then(res => {
          alert(`File ${this.capitalize(this.state.fileName)} was created.`)
          this.resetState()
          this.renderAllFiles()
           
        })
        .catch(err => console.log(err));
    }
  };

  resetState = () => {
    this.setState({
      fileName: ""
    });
  }
  
  render() {
    return (
        <Container>
          {/* <Row className="filesFormRow">
            <Col md="2">
            </Col>
            <Col>
              <form>
                <input placeholder="Enter a name" className="form-control addFileInput" name="fileName" type="text" value={this.state.fileName} onChange={this.handleInputChange} />
                <button type="submit" className="btn btn-success addFileBtn" onClick={this.handleFormSubmit}>Create File</button>
              </form>
            </Col>
            <Col md="2">
            </Col>
          </Row> */}
          <Row>
            <Col md="2">
            </Col>
            <Col >
              <div className="files-container">
                <h1 className="tableHeader">Files</h1>
                <div className="addNewFileBtn">
                <FileModal />
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>File</th>
                      <th># of URL's</th>
                      <th>See File's URL's</th>
                      <th>Delete File</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.files.map(file => (
                    <tr id="form-row">
                     <td>
                     <Link className="btn btn-link fileName" to={"/ViewFile/" + file.id}>{file.name}</Link>
                     </td>
                     <td className="numOfUrls">
                      {file.Urls.length}
                     </td>
                     <td>
                     <Link className="btn btn-link viewFileLink" to={"/ViewFile/" + file.id}>View File</Link>
                     </td>
                     <td className="deleteBtn">
                       Delete
                     </td>
                    </tr>
                    ))}
                  </tbody>
                  </table>
                      
              </div>
            </Col>
            <Col md="2">
            </Col>
          
          </Row>
		    </Container>
    );
  }
}

export default Files;
