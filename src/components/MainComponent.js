import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const MainComponent = () => {
  return (
    <Container fluid>
      <br />
      <br />
      <Card
        body
        style={{
          margin: "auto",
          maxWidth: "50rem",
          backgroundColor: "lightgrey",
        }}
        className="text-center"
      >
        <br />
        <Row>
          <Col xs={0} sm={0} md={0} xl={3}></Col>
          <Col xs={12} sm={12} md={12} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-username">
                User Name
              </InputGroup.Text>
              <Form.Control
                aria-label="username"
                aria-describedby="inputGroup-sizing-username"
              />
            </InputGroup>
          </Col>
          <Col xs={0} sm={0} md={12} xl={3}></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={0} xl={3}></Col>
          <Col xs={12} sm={12} md={12} xl={6}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-password">
                Password
              </InputGroup.Text>
              <Form.Control
                aria-label="password"
                aria-describedby="inputGroup-sizing-password"
              />
            </InputGroup>
          </Col>
          <Col xs={0} sm={0} md={12} xl={3}></Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} sm={12} md={4} xl={4}></Col>
          <Col xs={12} sm={12} md={4} xl={4} className="text-center">
            <Button variant="primary">Submit</Button>{" "}
          </Col>
          <Col xs={12} sm={12} md={4} xl={4}></Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MainComponent;
