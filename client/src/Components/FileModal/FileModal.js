import React from 'react';
import "./FileModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";

class FileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      fileName: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.fileName) {
      API.addFile({
        name: this.capitalize(this.state.fileName)
      })
        .then(res => {
          alert(`File ${this.capitalize(this.state.fileName)} was created.`)
          this.resetState()
          if(this.props.num === 1){
            this.props.renderAllFiles()
          }
          if(this.props.num === 2){
            this.props.resetFiles()
          }
          
          
           
        })
        .catch(err => console.log(err));
    }
  };

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  resetState = () => {
    this.setState({
      modal: false,
      fileName: ""
    });
  }

  

  render() {
    return (
      <div>
        <Button className="btn-link createFileBtn" onClick={this.toggle}>Add New File</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="fileModalHeader"  toggle={this.toggle}><strong>Create File</strong></ModalHeader>
          <ModalBody>
          <div className="fileModalBox">
          <form className="formBox">
            <input placeholder="Enter a name" className="form-control fileInput" name="fileName" type="text" value={this.state.fileName} onChange={this.handleInputChange} />
            <button type="submit" className="btn btn-success createFileSub" onClick={this.handleFormSubmit}>Create File</button>
          </form>
          </div>
          </ModalBody>
          <ModalFooter className="modalFooter">
          <Button className="fileModalBtn"  onClick={this.toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FileModal;