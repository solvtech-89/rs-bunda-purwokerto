import deskfas from "../assets/images/fasilitas.png";
import Layanan1 from "../assets/images/layanan1.png";
import Layanan2 from "../assets/images/layanan2.png";
import Layanan3 from "../assets/images/layanan3.png";
import Layanan4 from "../assets/images/layanan4.png";
import Layanan5 from "../assets/images/layanan5.png";
import Layout from "../components/Layout";
import { Card, Container, Row, Col } from "react-bootstrap";

const Layanan = () => {
  const layananData = [
    {
      title: "Layanan Unggulan Kandungan",
      image: Layanan1,
      items: [
        "USG Obstetri Ginekologi",
        "USG Skrining Kelainan Kongenital Janin dan Detail Jantung",
        "USG 4 Dimensi HD Live Studio",
        "Penanganan Kehamilan Risiko Tinggi",
      ],
    },
    {
      title: "Layanan Unggulan Saraf",
      image: Layanan2,
      items: [
        "Nyeri Kepala",
        "Nyeri Otot",
        "Nyeri Sendi",
        "Vertigo dan Saraf Kejepit",
      ],
    },
    {
      title: "Layanan Unggulan Anak",
      image: Layanan3,
      items: [
        "Pelayanan Bayi dan Anak",
        "Imunisasi",
        "Konseling Gizi, Nutrisi, Laktasi, dan Alergi pada Anak",
        "Konseling tumbuh kembang",
      ],
    },
    {
      title: "Layanan Unggulan Penyakit Dalam",
      image: Layanan4,
      items: [
        "Penyakit Lambung",
        "Deteksi Hepatitis",
        "Pengobatan Hepatitis",
        "Endoscopy",
      ],
    },
    {
      title: "Layanan Unggulan Paru",
      image: Layanan5,
      items: ["Penyakit TBC", "Asma", "Gangguan pernapasan lainnya"],
    },
  ];

  return (
    <Layout>
      <section className="Layanan">
        <Card className="text-dark section-banner">
          <Card.Img src={deskfas} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Layanan Kami</h1>
              <p>
                Pelayanan medis spesialis dengan teknologi tepat guna untuk
                seluruh keluarga.
              </p>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <Container>
          <div className="layanan-content">
            {layananData.map((layanan, index) => (
              <Row
                key={layanan.title}
                className="kartu-layanan align-items-center g-4"
              >
                <Col lg={6} className={index % 2 ? "order-lg-2" : ""}>
                  <img
                    src={layanan.image}
                    className="layanan-image"
                    alt={layanan.title}
                  />
                </Col>
                <Col lg={6} className={index % 2 ? "order-lg-1" : ""}>
                  <h3>{layanan.title}</h3>
                  <ul className="list modern-list">
                    {layanan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Layanan;
