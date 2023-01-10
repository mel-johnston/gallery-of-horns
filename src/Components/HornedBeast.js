import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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


  render() {
    return (
      <Card style={{ width: '30%' }}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img src={this.props.image} alt={this.props.description} title={this.props.title} />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{this.props.horns}</ListGroup.Item>
          <ListGroup.Item className="heart" onClick={this.handleHearts}>🖤 {this.state.hearts}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}


export default HornedBeast;