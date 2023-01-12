import React from "react";
import {FloatingLabel, Form } from 'react-bootstrap';

class HornForm extends React.Component {
  render() {
    return (
      <div>
        <FloatingLabel className="horn-form" controlId="floatingSelect" label="Works with selects">
          <Form.Select aria-label="Floating label select example">
            <option>How Many Horns?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Many Horns</option>
          </Form.Select>
        </FloatingLabel>
      </div>
    )
  }
}

export default HornForm;