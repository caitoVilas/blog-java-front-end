import { Col, Container, Row } from "react-bootstrap";
import FormRegister from "../components/FormRegister";

const Register = () => {

    return(
        <Container className="principal">
            <Row className="article">
                <Col>
                <h4 className="article">REGISTRO DE USUARIOS</h4>
                <hr />
                <FormRegister />
                </Col>
            </Row>
        </Container>
    );
};

export default Register;