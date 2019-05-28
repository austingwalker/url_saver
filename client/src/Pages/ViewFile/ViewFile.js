import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./ViewFile.css"


class ViewFile extends Component {
  state = {
   file: [],
   fileName: "",
  };

  componentDidMount() {
    API.getFile(this.props.match.params.id)
      .then(res => { 
        this.setState({ 
          file: res.data,
          fileName: res.data[0].File.name 
        })
      })
      .catch(err => console.log(err));
  }

  checkHttp = (url) => {

   let urlArr = url.split("")
   
   let newUrl = urlArr.slice(0, 4).map(i => {
     return i
    
    })
   const http = newUrl.join("")

    if(http === "http"){
      return  url
    } else{
       return `//${url}`
    }
  }

 
  

  render() {
    return (
      <Container>
        <Row className="addAnotherRow">
          <Col md="2">
          </Col>
          <Col>
          <Link className="btn addAnotherURL" to="/files"><i className="fas fa-arrow-left leftArrow"></i> <h5 className="leftArrowWords"> Back to Files</h5></Link>
            {/* <button className="addAnotherURL" onClick={this.props.backToURL}><i class="fas fa-arrow-left"></i> Add Another URL</button> */}
          </Col>
          <Col md="2">
          </Col>
          </Row> 
          <Row >
          <Col md="2">
          </Col>
          <Col className="fileCol">
           <div className="fileContainter">
                <h1 className="fileName">{this.state.fileName}</h1>
                <table className="table table-striped">
                  <tbody>
                  {this.state.file.map(f => (
                    <tr id="form-row" key={f.title}>
                     <td>
                       <strong>{f.title}</strong>
                     </td>
                     <td>
                     <a href={this.checkHttp(f.url)} target="_blank">{f.url}</a>
                     </td>
                     <td>
                     {f.createdAt}
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

export default ViewFile;
