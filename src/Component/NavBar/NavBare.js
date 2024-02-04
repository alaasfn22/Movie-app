import Hamburger from "hamburger-react";
import "./NavBar.css";
import {Button, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies, searchMoive} from "../../Redux/Actions/moviesActions";

const NavBare = () => {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const search = async () => {
      if (searchWord === "") {
        await dispatch(getMovies());
      } else {
        await dispatch(searchMoive(searchWord));
      }
    };
    search();
  }, [dispatch, searchWord]);

  return (
    <Row className="m-0">
      <Navbar expand="lg" className="navbar   ">
        <Container>
          <Navbar.Brand className="nav_brand" href="/">
            Movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <Hamburger className="navbar-toggler collapsed" color="#BF9B30" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: "100px"}}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                placeholder="Search"
                className="me-2 input_search"
                aria-label="Search"
              />
              <Button className="btn-search">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBare;
