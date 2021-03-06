import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Url.css"
import FileModal from "../../Components/FileModal"

class Url extends Component {
  state = {
    title: "",
    url: "",
    fileId: "",
    files: []
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
   
    let id = Number(this.state.fileId)
      API.addURL({
        title: this.capitalize(this.state.title).trim(),
        url: this.state.url,
        FileId: id,
      })
        .then(res => {
          if(res.data.createdAt){
            alert(`URL ${this.state.url} was added to your database!`)
          }
          else if(res.data.name === "SequelizeForeignKeyConstraintError"){
            alert(`A folder must be selected. 
Please create one if none exist.`)
          }
          else if(res.data.errors[0].message === "Validation isUrl on url failed"){
            alert("Please enter a valid URL")
          } else if (res.data.errors[0].message === "Validation notEmpty on title failed"){
            alert("Must enter a title")
          }
            else if(res.data.errors[0].message === "Validation len on title failed"){
              alert("Title must be less than 20 characters...")
          } 
          this.resetState()
        })
        .catch(err => console.log(err));
  };

  resetState = () => {
    this.setState({
      title: "",
      url: "",
      fileName: "",
      fileId: ""
    });
  }
  

  render() {
    return (
        <div className="addUrlPage">
        <Row>
        <Col md="2">
        </Col>
        <Col>
        <Link className="btn allFilesArrow" to="/files"><i className="fas fa-arrow-right righArrow"></i><h5 className="righArrowWords">View All URL Files</h5></Link>
        </Col>
        <Col md="2">
        </Col>
        </Row>
          <Row >
            <Col md="2">
            </Col>
            <Col className="addUrlBox" >
            <div >
              <form >
                <div className="form-group">
                  <label>Title:</label>
                  <input placeholder="Title" type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                  <br />
                  <label>URL:</label>
                  <input placeholder="URL" type="url" pattern="https://.*" required className="form-control" rows="1" name="url" value={this.state.url} onChange={this.handleInputChange} />
                  <div className="form-group">
                  <br />
                    <label className="selectFile">Select file or  </label>
                    <FileModal
                    renderAllFiles={this.renderAllFiles}
                    num={1}
                    />
                    <select className="custom-select" name="fileId" value={this.state.fileId} onChange={this.handleInputChange}>
                    <option>...</option>
                    {this.state.files.map(file => (
                    <option key={file.name} name="fildId" value={file.id}>{file.name}</option>
                    ))}
                    </select>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success submit" onClick={this.handleFormSubmit}  >Submit</button>
                </div>
              </form>
            </div>
            </Col>
            <Col md="2">
            </Col>
          </Row>
        </div>
    );
  }
}

export default Url;

