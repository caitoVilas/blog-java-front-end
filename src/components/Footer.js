import { Col, Container, Row } from "react-bootstrap";
import icoJava from '../assets/images/icoJava.png';
import spring from '../assets/images/spring.png';
import logo from '../logo.svg';
import mysql from '../assets/images/mysql.png'
import FormComments from "./FormComments";
 
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md={8}>
            <section className="footer-box">
             <h4>DEJANOS TU COMENTARIO</h4>
             <hr />
             <FormComments />
            </section>
          </Col>
          <Col md={4}>
              <section className="footer-box">
               <h4>ACERCA DE</h4>
               <hr />
               <h5>Developer Caito Vilas</h5>
               <hr />
               <h5>TECNOLOGIAS</h5>
               <p>Java 11</p>
               <p>Spring Boot</p>
               <p>React</p>
               <p>MySql</p>
               <img src={icoJava} alt="Java 11" className="footer-img" />
               <img src={spring} alt="Spring Boot" className="footer-img1" />
               <img src={logo} alt="React" className="footer-img" />
               <img src={mysql} alt="MySql" className="footer-img1" />
              </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
