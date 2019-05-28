import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Files.css"
import FileModal from "../../Components/FileModal"
import DeleteModal from "../../Components/DeleteModal"

class Files extends Component {
  // Setting our component's initial state
  state = {
    files: [],
    fileName: ""
    
  };

  componentDidMount(){
    this.renderAllFiles()
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
          // this.resetState()
          this.renderAllFiles()
           
        })
        .catch(err => console.log(err));
    }
  };

  deleteFile = id => {
    console.log(id)
    API.deleteFile(id)
      .then(res => {
        this.renderAllFiles()
      })
      .catch(err => console.log(err));
  };

  resetState = () => {
    this.setState({
      fileName: ""
    });
  }
  
  render() {
    return (
        <Container>
          <Row className="addAnotherRow">
          <Col md="2">
          </Col>
          <Col>
          <Link className="btn addAnotherURL" to="/url"><i className="fas fa-arrow-left leftArrow"></i> <h5 className="leftArrowWords"> Add Another URL</h5></Link>
            {/* <button className="addAnotherURL" onClick={this.props.backToURL}><i class="fas fa-arrow-left"></i> Add Another URL</button> */}
          </Col>
          <Col md="2">
          </Col>
          </Row> 
          <Row>
            <Col md="2">
            </Col>
            <Col >
              <div className="files-container">
                <h1 className="tableHeader">URL Files</h1>
                <div className="addNewFileBtn">
                <FileModal
                resetFiles={this.renderAllFiles}
                num={2}
                />
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
                     <Link className="btn btn-link fileName" to={"/viewfile/" + file.id}>{file.name}</Link>
                     </td>
                     <td className="numOfUrls">
                      <div className="number">{file.Urls.length}</div>
                     </td>
                     <td>
                     <Link className="btn btn-link viewFileLink" to={"/ViewFile/" + file.id}>View File</Link>
                     </td>
                     <td className="deleteBtn">
                     <DeleteModal
                     removeFile={this.deleteFile}
                     fileId={file.id}
                     />
                       {/* <button type="submit" className="btn deleteBtn"  onClick={() => this.deleteFile(file.id)}>Delete</button> */}
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
