import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo-simarsa.png";
import Telp from "../assets/images/telp.png";
import Jam from "../assets/images/jam.png";
import Lokasi from "../assets/images/lokasi.png";

import {
  ABOUT,
  LOGIN,
  DAFTAR,
  DOKTER,
  LAYANAN,
  HOME,
  HUBUNGI,
  KARIR,
  ARTIKEL,
} from "../router";

const NavigasiBar = () => {
  const navigate = useNavigate();

  const navItems = [
    { to: HOME, label: "Beranda" },
    { to: ABOUT, label: "Tentang Kami" },
    { to: LAYANAN, label: "Layanan" },
    { to: DOKTER, label: "Jadwal Dokter" },
    { to: KARIR, label: "Karir" },
    { to: ARTIKEL, label: "Artikel" },
    { to: HUBUNGI, label: "Hubungi Kami" },
  ];

  return (
    <>
      <section className="navbar-topbar">
        <Container className="topbar-inner">
          <div className="topbar-item">
            <img src={Telp} alt="Ikon telepon" />
            <span>Darurat 24 Jam: (0281) 635423</span>
          </div>
          <div className="topbar-item">
            <img src={Jam} alt="Ikon jam operasional" />
            <span>Jam Layanan: 24 Jam</span>
          </div>
          <div className="topbar-item">
            <img src={Lokasi} alt="Ikon lokasi rumah sakit" />
            <span>Purwokerto, Banyumas</span>
          </div>
          <div className="topbar-item topbar-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Layanan Online Aktif</span>
          </div>
        </Container>
      </section>

      <Navbar className="navbar-main" expand="lg" sticky="top">
        <Container>
          <NavLink to={HOME} className="navbar-brand hospital-brand">
            <img src={Logo} alt="Rumah Sakit Bunda Purwokerto" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </Nav>

            <div className="navbar-actions">
              <button
                className="btn-outline-soft"
                onClick={() => navigate(LOGIN)}
              >
                Login
              </button>
              <button
                className="btn-primary-soft"
                onClick={() => navigate(DAFTAR)}
              >
                Pendaftaran Online
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigasiBar;
