import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import ErrorLabel from "./ErrorLabel";
import { emailSendAction, imageUploadAction } from "../redux/testRedux";
class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  onFormSubmit = (values, { resetForm }) => {
    const { email, image } = values;
    const formData = new FormData();
    formData.append("myfiles", image);
    formData.append("email", email);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    this.props.imageUploadAction(formData, config);
    //  this.props.emailSendAction(values);
  };
  render() {
    return (
      <div className="mx-auto">
        <Card style={{ width: "30rem", margin: "auto", marginTop: "75px" }}>
          <Card.Title>Card Title</Card.Title>
          <Card.Body>
            <Formik
              initialValues={{
                email: "",
                image: null,
              }}
              onSubmit={this.onFormSubmit}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid Email")
                  .required("EMAIL_REQUIRED"),
                image: Yup.string().required("image required"),
              })}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      {...formik.getFieldProps("email")}
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <ErrorLabel message={msg} />}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Choose File</Form.Label>
                    <Form.Control
                      type="file"
                      id="image"
                      name="image"
                      placeholder="upload image"
                      onChange={(e) =>
                        formik.setFieldValue("image", e.target.files[0])
                      }
                    />
                    <ErrorMessage
                      name="image"
                      render={(msg) => <ErrorLabel message={msg} />}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Link to="/">Cancel</Link>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    imageUploadAction: (param1, param2) =>
      dispatch(imageUploadAction(param1, param2)),
    //   emailSendAction: (param) => dispatch(emailSendAction(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
