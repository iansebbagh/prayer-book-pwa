import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_logo from '../assets/img/logo.png'
import './layout.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddModal from "../components/addModal";
import { Link } from 'react-router-dom';

function MainNav() {
    const [curUrl, setCurUrl ] = useState('/');
    const location = useLocation();
    useEffect( () => {
        console.log("current Location: ", location.pathname);
        setCurUrl(location.pathname);
    }, [location]);

    return ( 
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="main-nav">
                <Container className="row-reverse">
                    <AddModal />
                    <Navbar.Brand className="pe-4">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={curUrl=='/' ? 'active': ''}>Home</Nav.Link>
                            <Nav.Link href="/prayerbook" className={curUrl=='/prayerbook' ? 'active': ''}>Prayer Book</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
     );
}

export default MainNav;
