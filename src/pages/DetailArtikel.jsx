import PicArtikel1 from "../assets/images/artikel1.png";
// import PicArtikel2 from "../assets/images/artikel2.png";
// import PicArtikel3 from "../assets/images/artikel3.png";
import deskDok from "../assets/images/deskdok.png";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import Layout from "../components/Layout";

const DetailArtikel = () => {
  return (
    <Layout>
      <section className="artikel">
        <Card className="text-dark section-banner">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Artikel</h1>
              <p>
                Panduan bacaan yang lebih mendalam, mudah dipahami, dan tetap
                relevan untuk pasien serta keluarga.
              </p>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <div className="artikel-detail-wrap">
          <Container>
            <Row className="g-4">
              <Col lg={8}>
                <article className="article-detail-card">
                  <img
                    src={PicArtikel1}
                    alt="Bahaya Stres pada Ibu Hamil"
                    className="article-detail-image"
                  />
                  <div className="article-detail-body">
                    <div className="article-card-meta mb-3">
                      <Badge bg="info" text="dark">
                        Kehamilan
                      </Badge>
                      <span>5 menit baca</span>
                    </div>
                    <h2>Bahaya Stres pada Ibu Hamil</h2>
                    <p className="article-lead">
                      Stres saat hamil memang umum terjadi, tetapi perlu
                      dikelola dengan baik agar tidak memengaruhi kesehatan ibu
                      maupun janin.
                    </p>

                    <p>
                      Saat menjalani masa kehamilan, akan ada banyak perubahan
                      fisik dan emosional yang mungkin dialami oleh ibu hamil.
                      Hamil memang bukan perkara yang mudah. Itu sebabnya, ibu
                      hamil rentan mengalami stres. Stres saat hamil adalah
                      normal karena rasa khawatir ibu terhadap banyak hal.
                      Namun, ibu perlu mengendalikan stres agar tidak memberi
                      dampak buruk pada diri sendiri dan janin.
                    </p>

                    <p>
                      Mengutip dari Pregnancy, Birth, & Baby, sebagian ibu
                      mengalami stres saat mengetahui dirinya sedang mengandung.
                      Stres ini bisa terjadi karena beberapa masalah seperti
                      kehamilan tidak terencana, pernah keguguran, pengalaman
                      kehilangan bayi, masalah keuangan, hubungan dengan
                      pasangan, hingga tekanan emosional lainnya. Pada sebagian
                      kasus, kehamilan juga dapat memunculkan tantangan baru
                      seperti perubahan pekerjaan dan kecemasan masa lalu.
                    </p>
                  </div>
                </article>
              </Col>

              <Col lg={4}>
                <aside className="article-summary-panel">
                  <p className="layanan-kicker">Ringkasan</p>
                  <h3>Yang Perlu Diperhatikan</h3>
                  <ul className="modern-list article-summary-list">
                    <li>
                      Stres berlebihan saat hamil bisa berdampak pada kesehatan
                      ibu dan janin.
                    </li>
                    <li>
                      Perubahan emosi selama kehamilan perlu dipantau dengan
                      sadar.
                    </li>
                    <li>
                      Konsultasi ke tenaga medis membantu mengurangi risiko dan
                      rasa cemas.
                    </li>
                  </ul>

                  <div className="article-note">
                    <strong>Catatan:</strong>
                    <p>
                      Jika keluhan stres terasa berat atau berlangsung lama,
                      segera konsultasikan ke dokter atau bidan.
                    </p>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default DetailArtikel;
