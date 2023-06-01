import { useContext } from "react";
import { Container , Nav , Navbar , Stack } from "react-bootstrap";
import {Link} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const NavBar =() =>{
    const {user ,logoutUser} = useContext(AuthContext);


    return <Navbar bg="black" className="mb-1" style={{height: "3.75rem"}}>
        <Container>
            <h2>
               <Link to ="/" className="link-light text-decoration"> ChatJVM</Link>
            </h2>
            <span className="text-warning">Welcome</span>
            <Nav>
                <Stack direction="horizontal" gap={5}>
                    {
                        user && (<>
                             <Link onClick = {()=> logoutUser()} to ="Login" className="link-light text-decoration"> Logout</Link>
                        </>)
                    }
                    {
                        !user && (<>
                            <Link to ="Login" className="link-light text-decoration"> Login</Link>
                            <Link to ="Register" className="link-light text-decoration"> Register</Link>
                        </>)
                    }
              

                </Stack>
            </Nav>
        </Container>
    
    </Navbar>
}
export default NavBar;