import { useContext } from "react";
import { Alert, Row , Col , Stack , Button , Form } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";


const Login =( ) =>{

    const {loginInfo,
        loginUser,
        loginError,
        updateLoginInfo,
        isLoginLoading} = useContext(AuthContext);



    return (
    <>
      <Form onSubmit={loginUser}>
        <Row style={{
            height :"100hv",
            justifyContent: "center",
            padding :"10%"

        }}>
            <Col xs ={5}>
                <Stack gap ={3}>
                    <h2>Login</h2>
                    <Form.Control type ="text" placeholder="Email"
                     onChange = {(e)=>
                        updateLoginInfo({...loginInfo, email:e.target.value})}
                    />
                    <Form.Control type ="password" placeholder="Password"
                     onChange = {(e)=>
                        updateLoginInfo({...loginInfo, password:e.target.value})}
                    />
                    <Button variant = "primary" type ="submit">{isLoginLoading?"Getting You LoggedIn...": "Login"}</Button>
                    { 
                        loginError?.error && (
                     <Alert variant = "danger"><p>{loginError?.message}</p></Alert>
                        )}
                </Stack>
            </Col>
        </Row>
      </Form>
    </>
    );
}

export default Login;