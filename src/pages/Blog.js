import { Col, Container, Row } from "react-bootstrap";
import Aside from "../components/Aside";
import ViewBlog from "../components/ViewBlog";

const Blog = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={8}>
              <section className="principal">
                  <ViewBlog />
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

export default Blog;
