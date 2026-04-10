import { DATA_DOKTER, DATA_POLIKLINIK, DAFTAR_PASIEN_BARU } from "../../router";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { RiShieldCrossFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AdminLayout from "../../components/AdminLayout";
import Pana from "../../assets/images/pana.png";
import Data from "../../assets/images/data.png";
import { FiActivity, FiUsers, FiClock, FiLayers } from "react-icons/fi";

const AdminHome = () => {
  const navigate = useNavigate();

  const metrics = [
    { label: "Pasien Hari Ini", value: "124", icon: <FiUsers /> },
    { label: "Antrian Aktif", value: "18", icon: <FiActivity /> },
    { label: "Dokter Tersedia", value: "28", icon: <FiLayers /> },
    { label: "Update Terakhir", value: "08:45", icon: <FiClock /> },
  ];

  const shortcuts = [
    {
      title: "Pendaftaran Pasien Baru",
      desc: "Akses cepat untuk input pasien baru dan cetak data pendaftaran.",
      action: () => navigate(DAFTAR_PASIEN_BARU),
      buttonLabel: "Buka Form",
    },
    {
      title: "Data Poliklinik",
      desc: "Lihat dan kelola daftar poli yang sedang aktif.",
      action: () => navigate(DATA_POLIKLINIK),
      buttonLabel: "Lihat Data",
    },
    {
      title: "Data Dokter",
      desc: "Kelola jadwal dan profil dokter dalam satu panel.",
      action: () => navigate(DATA_DOKTER),
      buttonLabel: "Kelola Dokter",
    },
  ];

  return (
    <AdminLayout>
      <main className="adminHome admin-shell">
        <Container fluid className="admin-hero">
          <Container>
            <Row className="align-items-center g-4">
              <Col lg={8}>
                <div className="admin-hero-copy">
                  <p className="admin-kicker">SIMARSA Admin Console</p>
                  <h1 className="titleHome title">Selamat datang, Tiara</h1>
                  <p className="admin-hero-text">
                    Ringkasan operasional rumah sakit hari ini ditampilkan di
                    sini untuk mempercepat input, monitoring, dan pengelolaan
                    data pasien.
                  </p>
                  <div className="admin-hero-actions">
                    <Button
                      className="btnHome btn-primary"
                      onClick={() => navigate(DAFTAR_PASIEN_BARU)}
                    >
                      <FaPlus size="18px" />
                      Pendaftaran pasien baru
                    </Button>
                    <Button
                      className="btn1 btn-primary"
                      onClick={() => navigate(DATA_DOKTER)}
                    >
                      <RiShieldCrossFill size="20px" />
                      Data dokter
                    </Button>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <Card className="admin-illustration-card">
                  <Card.Body>
                    <img
                      src={Pana}
                      alt="Ilustrasi dashboard admin"
                      className="admin-hero-image"
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="admin-content-grid">
          <Row className="g-3 admin-metrics-row">
            {metrics.map((metric) => (
              <Col md={6} xl={3} key={metric.label}>
                <Card className="admin-metric-card h-100">
                  <Card.Body>
                    <div className="admin-metric-icon">{metric.icon}</div>
                    <p>{metric.label}</p>
                    <h3>{metric.value}</h3>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Row className="g-4 mt-1">
            <Col xl={8}>
              <Card className="admin-panel-card h-100">
                <Card.Body>
                  <div className="admin-panel-head">
                    <div>
                      <p className="admin-kicker">Akses Cepat</p>
                      <h3>Menu Operasional Utama</h3>
                    </div>
                    <span className="admin-status-pill">Live</span>
                  </div>

                  <Row className="g-3 mt-1">
                    {shortcuts.map((item) => (
                      <Col md={4} key={item.title}>
                        <div className="admin-shortcut-card">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                          <Button
                            className="btn2 admin-shortcut-btn"
                            onClick={item.action}
                          >
                            {item.buttonLabel}
                          </Button>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  <div className="admin-split-cards mt-4">
                    <Card className="admin-feature-card">
                      <Card.Body>
                        <div className="admin-feature-body">
                          <div>
                            <p className="admin-kicker">Pendaftaran</p>
                            <h4>Proses pasien baru lebih cepat</h4>
                            <p>
                              Gunakan form pendaftaran yang sudah terstruktur
                              untuk mempercepat layanan front office.
                            </p>
                          </div>
                          <img src={Data} alt="Data pasien" />
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className="admin-feature-card">
                      <Card.Body>
                        <div className="admin-feature-body">
                          <div>
                            <p className="admin-kicker">Monitoring</p>
                            <h4>Kelola data dokter dan poli</h4>
                            <p>
                              Pastikan informasi dokter, jadwal, dan poliklinik
                              selalu sinkron dan mudah diakses.
                            </p>
                          </div>
                          <img src={Data} alt="Data dokter" />
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={4}>
              <Card className="admin-notice-card h-100">
                <Card.Body>
                  <p className="admin-kicker">Operasional Hari Ini</p>
                  <h3>Checklist Singkat</h3>
                  <ul className="admin-checklist">
                    <li>Validasi pendaftaran pasien baru</li>
                    <li>Periksa update jadwal dokter</li>
                    <li>Tinjau data poliklinik aktif</li>
                    <li>Pastikan riwayat rekam medis tersimpan</li>
                  </ul>
                  <div className="admin-note-box mt-3">
                    <strong>Tips:</strong>
                    <p className="mb-0">
                      Gunakan menu cepat di kiri untuk berpindah modul tanpa
                      banyak klik.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </AdminLayout>
  );
};

export default AdminHome;
