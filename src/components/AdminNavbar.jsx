import { Container, Navbar, Nav } from "react-bootstrap";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HOME } from "../router";

const AdminNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbar-admin" variant="dark" expand="lg">
        <Container>
          <NavLink to={HOME} className="navbar-brand h1Header">
            <span className="brand-mark">SIMARSA</span>
            <span className="brand-sub">Admin Panel</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Navbar.Text>
                <div className="admin-user-pill">
                  <span className="admin-user-avatar">T</span>
                  <p className="hsatu">
                    <strong>Tiara</strong>
                    <span>Petugas Entry</span>
                  </p>
                </div>
              </Navbar.Text>
            </Nav>

            <IoLogOutOutline
              className="nav-logout"
              onClick={() => navigate(HOME)}
              size="27px"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
