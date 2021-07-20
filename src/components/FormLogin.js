import { Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  let history = useHistory();

  const handleCancel = () => {
    history.push("/home");
  };
  return (
    <Form>
       <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Nombre Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="nombre usuario" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Contraseña
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="contraseña" />
        </Col>
      </Form.Group>
      <hr />
      <button className="btn-up">Ingresar</button>
      <br /><br />
      <button className="btn-up" onClick={handleCancel}>Cancelar</button>
      <br /><br />
    </Form>
  );
};

export default FormLogin;
