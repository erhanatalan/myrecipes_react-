import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import data from "../../router/Data";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [datax, setDatax] = useState(data[0].isSigned)
  console.log(datax);
  const handleSubmit=(e)=>{
    e.preventDefault()
    handleLogin()

  
  }
  const handleLogin=(e)=>{
    console.log(email, password);
    if(email==process.env.REACT_APP_KULLANICI_ADI && password==process.env.REACT_APP_SIFRE){
      console.log('1',email, password, data[0].isSigned)
      return setDatax(true)
    }else{
      console.log('2',email, password, data[0].isSigned)
      return setDatax(false)
    }
  }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Delicious</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        required onChange={(e)=>setEmail(e.target.value)} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        required onChange={(e)=>setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit"
                        onClick={handleLogin}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;