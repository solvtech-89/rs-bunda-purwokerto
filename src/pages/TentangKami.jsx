import { Card, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import logoRs from "../assets/images/logoRs.png";
import Rs from "../assets/images/rs.png";

const TentangKami = () => {
  return (
    <Layout>
      <section className="tentangKami">
        <Card className="text-dark section-banner">
          <Card.Img src={Rs} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Tentang Kami</h1>
              <p>
                Membangun pelayanan kesehatan keluarga yang aman, ramah, dan
                terpercaya sejak tahun 1989.
              </p>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <Container className="tentang-content">
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <img src={logoRs} alt="logo" className="logoRs" />
            </Col>
            <Col lg={7}>
              <h3>Selamat Datang di Rumah Sakit Bunda Purwokerto</h3>
              <h2 className="deskripsi">Sejarah dan Komitmen Pelayanan</h2>
              <p>
                Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di
                bawah naungan Yayasan Bunda Purwokerto. Di bangun sejak 09
                Agustus 1989 dan beroperasi sebagai Rumah Bersalin pada 14 juni
                1990 yang diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas
                (Bapak dr. Koentoro)
              </p>
              <p>
                Seiring berjalannya waktu RB tersebut terus berkembang dengan
                meningkatnya statsu RB tersebut kearah yang lebih besar. Pada
                tanggal 1 September 1991 status Rumah Bersalin “BUNDA” berubah
                dan meningkat menjadi Rumah Sakit Khusus Ibu dan Anak “BUNDA”
                yang operasioanalnya membawahi persalinan.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default TentangKami;
