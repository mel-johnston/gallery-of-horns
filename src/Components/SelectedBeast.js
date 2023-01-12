import React from 'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal className="modal-card"
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}>
        <Modal.Header className="modal-header" closeButton>{this.props.selectedBeast.title}</Modal.Header>
        <img src={this.props.selectedBeast.image} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title} />
        <Modal.Footer className="modal-footer"> {this.props.selectedBeast.description} </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;