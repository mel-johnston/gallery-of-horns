import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>{this.props.selectedBeast.title}</Modal.Header>
        <img src= {this.props.selectedBeast.image} alt={this.props.selectedBeast.description} title={this.props.selectedBeast.title} />
        <Modal.Footer> {this.props.selectedBeast.description} </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;