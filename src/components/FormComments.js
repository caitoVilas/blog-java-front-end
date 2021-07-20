import { Col, Form, Row } from "react-bootstrap";


const FormComments = () => {

    return(
        <Form>
        <br />
        <Form.Group as={Row} className="mb-3" controlId="formemail">
          <Form.Label column sm="2">
            email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" placeholder="email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
          <Form.Label column sm="2">
            Comentario
          </Form.Label>
          <Col sm="10">
          <Form.Control as="textarea" rows={3} />
          </Col>
        </Form.Group>
  
        <hr />
        <button className="btn-up">Enviar</button>
        <br />
        <br />
        <br />
        <br />
      </Form>
    );
};

export default FormComments;