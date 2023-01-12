import React from "react";
import { Card, ListGroup } from 'react-bootstrap';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
    }
  }

  handleHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    })
  }

  handleImageClick = () => {
    this.props.handleOpenModal(this.props.title, this.props.image, this.props.description)
  }

  render() {
    return (
      <Card style={{ width: '20rem' }} className="h-200 mx-auto Card" >
        <Card.Body  >
          <Card.Title >{this.props.title}</Card.Title>
          <Card.Img className="card-image" onClick={this.handleImageClick} src={this.props.image} alt={this.props.description} title={this.props.title} />

        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{this.props.description}</ListGroup.Item>
          <ListGroup.Item>Horns: {this.props.horns}</ListGroup.Item>
          <ListGroup.Item className="heart" onClick={this.handleHearts}>Vote: 🖤 {this.state.hearts}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

export default HornedBeast;