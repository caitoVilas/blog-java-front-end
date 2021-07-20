import { Col, Container, Row } from "react-bootstrap";
import Aside from "../components/Aside";
import Presents from "../components/Presents";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={8}>
            <section className="principal">
              <Presents />
            </section>
          </Col>
          <Col md={4}>
              <section className="principal">
                  <Aside />
              </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
