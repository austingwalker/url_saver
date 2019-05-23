import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  // Setting our component's initial state
  state = {
    title: "",
    url: "",
    fileName: ""
  };

  componentDidMount(){
    this.resetState()
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

    console.log("Title: " + this.state.title)
    console.log("URL: " + this.state.url)
    console.log("File: " + this.state.file)
    
    
    if (this.state.title && this.state.url && this.state.file) {
      API.addURL({
        title: this.capitalize(this.state.title),
        url: this.state.url,
        file: this.state.file,
      })
        .then(res => {
          
          alert(`URL ${this.state.url} was added to your database!`)
        
          this.resetState()
           
        })
        .catch(err => console.log(err));
    }
  };

  resetState = () => {
    console.log("reset called")
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
              {/* <a className="btn btn-light" href="/blog">Go to Blog</a> */}
            </div>
            <div className="col-md-2 col-sm-2">
            <Link className="btn btn-light" to="/files">View Files</Link>
              {/* <a className="btn btn-light" href="/authors">Manage Authors</a> */}
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
                  <textarea placeholder="URL" className="form-control" rows="1" name="url" value={this.state.url} onChange={this.handleInputChange}></textarea>
                  <div className="form-group">
                    <label>Select File:</label>
                    <select className="custom-select" name="file" value={this.state.file} onChange={this.handleInputChange}>
                    <option>...</option>
                    <option>a</option>
                    <option>b</option>
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
