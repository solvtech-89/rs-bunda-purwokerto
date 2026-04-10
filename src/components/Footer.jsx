import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logos from "../assets/images/logo-simarsa-2nd.png";
import Fb from "../assets/images/fb.png";
import Ig from "../assets/images/ig.png";
import {
  ABOUT,
  ARTIKEL,
  DAFTAR,
  DOKTER,
  HOME,
  HUBUNGI,
  LAYANAN,
} from "../router";

const Footer = () => {
  const quickLinks = [
    { to: HOME, label: "Beranda" },
    { to: ABOUT, label: "Tentang Kami" },
    { to: LAYANAN, label: "Layanan" },
    { to: DOKTER, label: "Jadwal Dokter" },
    { to: DAFTAR, label: "Pendaftaran Online" },
    { to: ARTIKEL, label: "Artikel Kesehatan" },
    { to: HUBUNGI, label: "Hubungi Kami" },
  ];

  return (
    <footer className="container-fluid">
      <Container>
        <Row className="footer-main g-4">
          <Col lg="4" md="6">
            <img
              src={Logos}
              alt="Logo Rumah Sakit Bunda Purwokerto"
              className="logo-footer"
            />
            <p className="footer-copy mt-3">
              Layanan kesehatan keluarga dengan pendekatan profesional, cepat,
              dan berorientasi pada kenyamanan pasien.
            </p>
          </Col>

          <Col lg="3" md="6">
            <h3>Navigasi Cepat</h3>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="footer-link">
                  {link.label}
                </NavLink>
              ))}
            </div>
          </Col>

          <Col lg="5" md="12">
            <h3>Kontak Rumah Sakit</h3>
            <p>Telepon: (0281) 635424</p>
            <p>Email: rsu.bunda@gmail.com</p>
            <p>Alamat: Jl. Pramuka No.249, Purwokerto Kidul, Banyumas</p>
            <div className="footer-social mt-3">
              <a
                href="https://m.facebook.com/profile.php?id=515510535160871"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Rumah Sakit Bunda"
              >
                <img src={Fb} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/rsbunda.pwt/?hl=id"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Rumah Sakit Bunda"
              >
                <img src={Ig} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="pb-1">
            <p className="footer-bottom">
              © 2026 Rumah Sakit Bunda Purwokerto. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
