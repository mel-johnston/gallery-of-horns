import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

class HornForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  handleSubmit = (event) => {
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <FloatingLabel className="horn-form" controlId="floatingSelect" label="Works with selects">
          <Form.Select aria-label="Floating label select example">
            <option>How Many Horns?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="🦄">Many Horns</option>
          </Form.Select>
        </FloatingLabel>
      </div>
    )
  }
}

export default HornForm;