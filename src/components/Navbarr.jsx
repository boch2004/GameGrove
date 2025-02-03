    import Button from "react-bootstrap/Button";
    import Container from "react-bootstrap/Container";
    import Form from "react-bootstrap/Form";
    import Nav from "react-bootstrap/Nav";
    import Navbar from "react-bootstrap/Navbar";
import Addgame from "./Addgame";

    function NavScrollExample({settext}) {
    return (
        <Navbar expand="lg" className="bg-body-">
        <div className="flex justify-between w-screen mr-2">
        <Addgame />
        <div>
            <Navbar.Brand href="/" style={{color:"red"}}> GameGrove</Navbar.Brand>
            </div>
            <div>
            <Navbar.Collapse id="navbarScroll">
            
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => settext(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
            </div>
        </div>
        </Navbar>
    );
    }

    export default NavScrollExample;
