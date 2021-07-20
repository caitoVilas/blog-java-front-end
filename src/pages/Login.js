import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../components/FormLogin";

const Login = () => {

    return(
        <Container className="principal">
        <Row className="article">
            <Col>
            <h4 className="article">INGRESO DE USUARIOS</h4>
            <hr />
            <FormLogin />
            </Col>
        </Row>
    </Container>
    );
};

export default Login;