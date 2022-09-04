import { Container, Col, Row } from "react-bootstrap";
import Showroom from "./utility/showroom";

function Newcar() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Showroom />
          </Col>
          <Col> </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <h1> new carshowroom having two new model</h1>

        <p>carshowroom</p>
      </Container>
    </div>
  );
}

export default Newcar;
