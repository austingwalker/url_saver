import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

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
      this.consoleLogs()
    })
    .catch(err => console.log(err));   
  }

  consoleLogs = () => {
    console.log(this.state.files)
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
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/">Home</Link>
            </div>
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/content">Add URL</Link>
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
                  {this.state.files.map(file => (
                    <tr id="form-row">
                     <td>
                       {file.name}
                     </td>
                     <td>
                      {file.Urls.length}
                     </td>
                     <td>
                     <Link className="btn btn-light" to={"/ViewFile/" + file.id}>View File</Link>
                     </td>
                     <td>
                       Add
                     </td>
                     <td>
                       Delete
                     </td>
                    </tr>
                    ))}
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
