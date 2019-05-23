import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Files extends Component {
  // Setting our component's initial state
  state = {
    files: [],
    fileName: ""
    
  };

  componentDidMount(){
    // this.resetState()
  }

  renderAllFiles = () => {
    API.getFiles()
    .then(res => {
      console.log(res)
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

    console.log("File Name 1: " + this.state.fileName)
    
    
    
    if (this.state.fileName) {
      API.addFile({
        name: this.capitalize(this.state.fileName)
      })
        .then(res => {
          console.log("Returning: " + res)
          alert(`File ${this.capitalize(this.state.fileName)} was created.`)
        console.log(`File added ${this.state.files}`)
          this.resetState()
           
        })
        .catch(err => console.log(err));
    }
  };

  resetState = () => {
    console.log("reset called")
    this.setState({
      fileName: ""
    });
  }
  

  render() {
    return (
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/">Home</Link>
              {/* <a className="btn btn-light" href="/blog">Go to Blog</a> */}
            </div>
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/content">Add URL</Link>
              {/* <a className="btn btn-light" href="/cms">New Post</a> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="author-container">
                <h1>Files</h1>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>File</th>
                      <th># of URL's</th>
                      <th>See File's URL's</th>
                      <th>Add URL</th>
                      <th>Delete File</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="form-row">
                     <td>
                       File Name
                     </td>
                     <td>
                       0
                     </td>
                     <td>
                       View
                     </td>
                     <td>
                       Add
                     </td>
                     <td>
                       Delete
                     </td>
                    </tr>
                  </tbody>
                  </table>
                      <form id="author-form">
                        <input placeholder="Enter a name" className="form-control" name="fileName" type="text" value={this.state.fileName} onChange={this.handleInputChange} />
                        <button type="submit" className="btn btn-success" onClick={this.handleFormSubmit}>Create File</button>
                      </form>
              </div>
            </div>
          </div>
		    </div>
    );
  }
}

export default Files;
