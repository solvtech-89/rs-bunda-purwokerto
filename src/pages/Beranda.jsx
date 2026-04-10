import { Row, Col, Container, Card } from "react-bootstrap";
import { DOKTER, ABOUT, LAYANAN, DAFTAR } from "../router";
import { Link } from "react-router-dom";
import Layanan1 from "../assets/images/layanan1.png";
import Dok from "../assets/images/dok1.png";
import Layout from "../components/Layout";

const Beranda = () => {
  const unggulanLayanan = [
    "USG Obstetri Ginekologi",
    "USG Skrining Kelainan Kongenital Janin dan Detail Jantung",
    "USG 4 Dimensi HD Live Studio",
    "Penanganan Kehamilan Risiko Tinggi",
  ];

  const dokterPilihan = [
    {
      nama: "dr. Anton Prihandana, Sp.OG",
      spesialis: "Spesialis Obstetri & Ginekologi",
    },
    {
      nama: "dr. Tiara Nurlita Sari, Sp.A",
      spesialis: "Spesialis Anak",
    },
  ];

  return (
    <Layout>
      <section className="beranda">
        <Container className="hero-wrapper">
          <p className="hero-badge">Rumah Sakit Umum Bunda Purwokerto</p>
          <h1 className="judul">
            Pelayanan Kesehatan Terintegrasi Untuk Keluarga Anda
          </h1>
          <p className="hero-subtitle">
            Fasilitas modern, dokter berpengalaman, dan proses pendaftaran
            online yang cepat untuk pengalaman pasien yang lebih nyaman.
          </p>
          <div className="hero-actions">
            <Link to={DAFTAR} className="btn-primary-soft">
              Daftar Sekarang
            </Link>
            <Link to={DOKTER} className="btn-outline-soft btn-light-outline">
              Lihat Jadwal Dokter
            </Link>
          </div>
        </Container>
      </section>

      <section className="beranda-content">
        <Container>
          <h2 className="section-title">Sejarah Rumah Sakit Bunda</h2>
          <p>
            Rumah Sakit Bunda Purwokerto merupakan rumah sakit swasta di bawah
            naungan Yayasan Bunda Purwokerto. Berdiri sejak 09 Agustus 1989 dan
            beroperasi sebagai rumah bersalin pada 14 Juni 1990.
          </p>
          <p>
            Seiring perkembangan layanan, kami terus bertransformasi menjadi
            rumah sakit keluarga yang mengutamakan keselamatan, empati, dan
            kualitas layanan medis berbasis standar profesional.
          </p>
          <Link to={ABOUT} className="cta-link">
            Pelajari profil rumah sakit
          </Link>
        </Container>
      </section>

      <section className="beranda-layanan">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <h2 className="section-title">Layanan Unggulan Kandungan</h2>
              <ul className="list modern-list">
                {unggulanLayanan.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={LAYANAN} className="cta-link">
                Jelajahi semua layanan
              </Link>
            </Col>
            <Col lg={6}>
              <img
                src={Layanan1}
                className="pic-layanan"
                alt="Layanan kandungan unggulan"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="beranda-jadwal">
        <Container>
          <h2 className="section-title text-center">Dokter Pilihan Hari Ini</h2>
          <Row className="justify-content-center mt-4 g-4">
            {dokterPilihan.map((dokter) => (
              <Col lg={4} md={6} key={dokter.nama}>
                <Card className="isi-kartu w-100 h-100">
                  <Card.Img variant="top" src={Dok} alt={dokter.nama} />
                  <Card.Body>
                    <h3>{dokter.nama}</h3>
                    <p>{dokter.spesialis}</p>
                    <Link to={DOKTER} className="cta-link">
                      Lihat jadwal praktik
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Beranda;
