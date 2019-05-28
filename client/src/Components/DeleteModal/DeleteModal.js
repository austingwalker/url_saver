import React from 'react';
import "./DeleteModal.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";

class DeleteModal extends React.Component {
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
        <Button className="btn-link deleteFileBtn" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="deleteModalHeader"  toggle={this.toggle}><strong>Are you sure?</strong></ModalHeader>
          <ModalBody>
          <div className="deleteModalBox">
            <p>All of the URL's inside of the file will be deleted. Would you like to continue?</p>
            <form className="deleteBox">
              {/* <button className="btn btn-success deleteFileNo"  onClick={this.toggle}>No, Keep</button> */}
              <Button className="btn-success deleteFileNo"  onClick={this.toggle}>No Keep</Button>
             {/* ---------------------------------------- No page reload button below...work in progress ------------------------------------ */}
              {/* <Button className="btn-danger deleteFileYes" onClick={() => this.props.removeFile(this.props.fileId)} >Yes, Delete</Button> */}
              <button type="submit" className="btn btn-danger deleteFileYes" onClick={() => this.props.removeFile(this.props.fileId)} >Yes, Delete</button>
            </form>
          </div>
          </ModalBody>
          <ModalFooter className="modalFooter">
          <Button className="deleteModalBtn"  onClick={this.toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteModal;