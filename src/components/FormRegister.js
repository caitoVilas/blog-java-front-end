import { Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const FormRegister = () => {
  let history = useHistory();

  const handlecancel = () => {
    history.push("/home");
  }
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="nombre" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextNameUser">
        <Form.Label column sm="2">
          Nombre Usuario
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="nombre de usuario" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formemail">
        <Form.Label column sm="2">
          email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="email" />
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
      <button className="btn-up">Enviar</button>
      <br />
      <br />
      <button className="btn-up" onClick={handlecancel}>Cancelar</button>
      <br />
      <br />
    </Form>
  );
};

export default FormRegister;
