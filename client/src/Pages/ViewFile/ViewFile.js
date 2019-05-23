import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class ViewFile extends Component {
  // Setting our component's initial state
  state = {
   file: []
  };

  componentDidMount() {
    API.getFile(this.props.match.params.id)
      .then(res => { 

        console.log("response data:" + JSON.stringify(res.data, null, 2))
        this.setState({ file: res.data })
        this.consolelogs()
      })
      .catch(err => console.log(err));
  }

  consolelogs = () => {
    console.log(this.state.file)
  }

 
  

  render() {
    return (
      <div>
        
              
              
                <div className="row">
                  <div className="col-md-2 col-sm-2">
                      <Link className="btn btn-light" to="/content">Add URL</Link>
                  </div>
                  <div className="col-md-2 col-sm-2">
                  <Link className="btn btn-light" to="/files">View Files</Link>
                  </div>
                </div>
                
               
            

            <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="author-container">
                <h1>Files</h1>
                <table className="table table-striped">
                  
                  <tbody>
                  {this.state.file.map(f => (
                    <tr id="form-row">
                     <td>
                       <strong>{f.title}</strong>
                     </td>
                     <td>
                     <a href={f.url}>{f.url}</a>
                     </td>
                     <td>
                     {f.createdAt}
                     </td>
                    </tr>
                   ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
           
    );
  }
}

export default ViewFile;
