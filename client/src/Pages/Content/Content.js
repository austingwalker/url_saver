import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Home extends Component {
  // Setting our component's initial state
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
      console.log(res.data)
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

    console.log("Title: " + this.state.title)
    console.log("URL: " + this.state.url)
    console.log("File: " + id)
    
    if (this.state.title && this.state.url && this.state.fileId) {
      API.addURL({
        title: this.capitalize(this.state.title),
        url: this.state.url,
        FileId: id,
      })
        .then(res => {
          
          alert(`URL ${this.state.url} was added to your database!`)
        
          this.resetState()
           
        })
        .catch(err => console.log(err));
    
    }
  };

  resetState = () => {
    this.setState({
      title: "",
      url: "",
      fileName: ""
    });
  }
  

  render() {
    return (
            <div className="container hidden">
          <div className="row top-30">
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/">Home</Link>
            </div>
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/files">View Files</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form id="cms">
                <div className="form-group">
                  <label>Title:</label>
                  <input placeholder="Title" type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                  <br />
                  <label>URL:</label>
                  <input placeholder="URL" type="url" className="form-control" rows="1" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                  <div className="form-group">
                    <label>Select File:</label>
                    <select className="custom-select" name="fileId" value={this.state.fileId} onChange={this.handleInputChange}>
                    <option>...</option>
                    {this.state.files.map(file => (
                    <option key={file.name} name="fildId" value={file.id}>{file.name}</option>
                    ))}
                    </select>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success submit" onClick={this.handleFormSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
