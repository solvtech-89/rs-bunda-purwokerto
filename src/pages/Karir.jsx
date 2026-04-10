import deskfas from "../assets/images/fasilitas.png";
import Arrow from "../assets/images/arrow.png";
import Layout from "../components/Layout";
import {
  Card,
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HUBUNGI } from "../router";

const Karir = () => {
  const careerStats = [
    { label: "Posisi Aktif", value: "12" },
    { label: "Divisi Terbuka", value: "5" },
    { label: "Rata-rata Respons", value: "2 Hari" },
  ];

  const jobFilters = [
    "Semua",
    "Dokter",
    "Perawat",
    "Administrasi",
    "Pramusaji",
  ];

  const openRoles = [
    {
      title: "Dokter Umum",
      education: "Profesi Dokter Umum",
      location: "Purwokerto",
      type: "Full Time",
      description:
        "Rumah Sakit Bunda Purwokerto membutuhkan Dokter Umum dengan dedikasi tinggi, komunikasi baik, dan orientasi pelayanan pasien.",
      requirements: [
        "Pria/Wanita",
        "Profesional dan komunikatif",
        "Siap bekerja shift",
      ],
    },
    {
      title: "Perawat",
      education: "S1 / D3 Keperawatan",
      location: "Purwokerto",
      type: "Full Time",
      description:
        "Bergabunglah sebagai perawat yang fokus pada keselamatan pasien, ketelitian, dan pelayanan yang empatik.",
      requirements: [
        "Pria/Wanita",
        "Usia maksimal 30 tahun",
        "Berpengalaman di layanan rawat inap lebih disukai",
      ],
    },
    {
      title: "Pramusaji",
      education: "SMK Tata Boga",
      location: "Purwokerto",
      type: "Part Time",
      description:
        "Posisi pramusaji untuk mendukung kenyamanan pasien dengan layanan yang bersih, cepat, dan ramah.",
      requirements: [
        "Pria/Wanita",
        "Rapi dan disiplin",
        "Mampu bekerja dalam tim",
      ],
    },
  ];

  return (
    <Layout>
      <section className="Karir">
        <Card className="text-dark section-banner">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Karir</h1>
              <p>
                Bergabung bersama tim yang berfokus pada pelayanan kesehatan
                berkualitas, profesional, dan humanis.
              </p>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <Container>
          <div className="career-page-head">
            <div>
              <p className="layanan-kicker">Kesempatan Bergabung</p>
              <h2 className="section-title">Posisi Terbuka Saat Ini</h2>
              <p>
                Kami membuka kesempatan bagi kandidat yang ingin bertumbuh di
                lingkungan kerja kesehatan yang stabil, kolaboratif, dan
                profesional.
              </p>
            </div>
            <div className="career-stats">
              {careerStats.map((stat) => (
                <div key={stat.label} className="career-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Row className="g-4 career-layout">
            <Col xl={3} lg={4}>
              <aside className="career-filter-panel">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <p className="layanan-kicker mb-1">Filter</p>
                    <h3 className="mb-0">Temukan Posisi</h3>
                  </div>
                  <Badge bg="info" text="dark" className="career-filter-badge">
                    Live
                  </Badge>
                </div>

                <Dropdown className="career-dropdown">
                  <Dropdown.Toggle
                    variant="light"
                    id="career-category"
                    className="w-100"
                  >
                    Pilih Kategori
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="w-100">
                    {jobFilters.map((filter) => (
                      <Dropdown.Item key={filter} href="#career-list">
                        {filter}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <div className="career-chip-list mt-3">
                  {jobFilters.map((filter, index) => (
                    <span
                      key={filter}
                      className={`career-chip ${index === 0 ? "active" : ""}`}
                    >
                      {filter}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="title-karir">Jenjang pendidikan</p>
                  <div className="career-checkbox-list">
                    {["SMK/SMA", "D1", "D2", "D3", "S1", "S2", "Profesi"].map(
                      (item) => (
                        <Form.Check
                          key={item}
                          type="checkbox"
                          id={`career-${item}`}
                          label={item}
                        />
                      ),
                    )}
                  </div>
                </div>
              </aside>
            </Col>

            <Col xl={9} lg={8} id="career-list">
              <div className="career-grid">
                {openRoles.map((role) => (
                  <article key={role.title} className="career-card">
                    <div className="career-card-top">
                      <div>
                        <p className="career-role-tag">{role.type}</p>
                        <h3>{role.title}</h3>
                      </div>
                      <span className="career-location">{role.location}</span>
                    </div>

                    <div className="career-meta">
                      <span>{role.education}</span>
                      <span>Full Info</span>
                    </div>

                    <p>{role.description}</p>

                    <div className="career-requirements">
                      {role.requirements.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="career-actions">
                      <Link to={HUBUNGI} className="btn-primary-soft">
                        Ajukan Lamaran
                      </Link>
                      <Link to={HUBUNGI} className="career-link">
                        Detail posisi
                        <img src={Arrow} alt="" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Karir;
