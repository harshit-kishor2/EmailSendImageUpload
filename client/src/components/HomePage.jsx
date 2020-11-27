import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to="/test" variant="primary">
                  Test Page
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
