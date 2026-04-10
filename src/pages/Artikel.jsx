import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Pagination,
  Badge,
} from "react-bootstrap";
import PicArtikel1 from "../assets/images/artikel1.png";
import PicArtikel2 from "../assets/images/artikel2.png";
import PicArtikel3 from "../assets/images/artikel3.png";
import PicArtikel4 from "../assets/images/artikel4.png";
import PicArtikel5 from "../assets/images/artikel5.png";
import PicArtikel6 from "../assets/images/artikel6.png";
import PicArtikel7 from "../assets/images/artikel7.png";
import PicArtikel8 from "../assets/images/artikel8.png";
import PicArtikel9 from "../assets/images/artikel10.jpg";
// import SearchIcon from "../assets/images/search-icon.png";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";
import { DETAIL_ARTIKEL } from "../router";
import { Link } from "react-router-dom";

const Artikel = () => {
  const articles = [
    {
      image: PicArtikel2,
      title: "Bahaya Stres pada Ibu Hamil",
      excerpt:
        "Saat menjalani masa kehamilan, ibu hamil rentan mengalami stres. Kenali dampaknya dan cara mengelolanya dengan baik.",
      tag: "Kehamilan",
      time: "5 menit baca",
    },
    {
      image: PicArtikel3,
      title: "Cara Meningkatkan Imunitas di Masa Pandemi",
      excerpt:
        "Imunitas atau daya tahan tubuh perlu dijaga melalui kebiasaan sehat, nutrisi seimbang, dan istirahat yang cukup.",
      tag: "Gaya Hidup",
      time: "4 menit baca",
    },
    {
      image: PicArtikel1,
      title: "Mengenali Gejala yang Sering Diabaikan pada Ibu Hamil",
      excerpt:
        "Beberapa tanda pada kehamilan perlu perhatian lebih sejak awal agar risiko komplikasi dapat ditekan.",
      tag: "Kesehatan Ibu",
      time: "6 menit baca",
    },
    {
      image: PicArtikel4,
      title: "Bahaya Nyeri yang Terlihat Sepele",
      excerpt:
        "Nyeri pada area tertentu bisa jadi sinyal tubuh yang perlu evaluasi medis, bukan sekadar keluhan biasa.",
      tag: "Saraf",
      time: "4 menit baca",
    },
    {
      image: PicArtikel5,
      title: "Karbohidrat Kompleks dan Manfaatnya",
      excerpt:
        "Karbohidrat kompleks membantu energi lebih stabil dan mendukung pola makan yang lebih sehat.",
      tag: "Nutrisi",
      time: "3 menit baca",
    },
    {
      image: PicArtikel6,
      title: "Penyebab Janin Cegukan dalam Kandungan",
      excerpt:
        "Gerakan janin yang terasa berbeda sering menimbulkan kekhawatiran. Ini penjelasan yang lebih tenang dan ilmiah.",
      tag: "Kehamilan",
      time: "5 menit baca",
    },
    {
      image: PicArtikel7,
      title: "Mitos Umum tentang Ibu Hamil yang Perlu Diluruskan",
      excerpt:
        "Informasi yang keliru sering membuat ibu hamil cemas. Saatnya memilah mana fakta dan mana mitos.",
      tag: "Edukasi",
      time: "4 menit baca",
    },
    {
      image: PicArtikel8,
      title: "Obat Alami untuk Mengatasi Keracunan Makanan",
      excerpt:
        "Beberapa pertolongan awal dapat membantu meredakan gejala, namun tetap perlu mengetahui batas aman untuk ke fasilitas kesehatan.",
      tag: "Pencernaan",
      time: "5 menit baca",
    },
    {
      image: PicArtikel9,
      title: "Makanan Sehat untuk Balita",
      excerpt:
        "Menu balita yang tepat membantu tumbuh kembang optimal dan kebiasaan makan yang lebih baik sejak dini.",
      tag: "Anak",
      time: "4 menit baca",
    },
  ];

  const featuredArticle = articles[0];
  const categories = [
    "Semua",
    "Kehamilan",
    "Anak",
    "Nutrisi",
    "Saraf",
    "Edukasi",
  ];

  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Layout>
      <section className="artikel">
        <Card className="text-dark section-banner">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Artikel</h1>
              <p>
                Informasi kesehatan yang ringkas, relevan, dan mudah dipahami
                untuk membantu pasien dan keluarga mengambil keputusan yang
                lebih baik.
              </p>
            </Container>
          </Card.ImgOverlay>
        </Card>

        <div className="artikel-content-wrap">
          <Container>
            <div className="artikel-toolbar">
              <Form className="artikel-search-form">
                <input
                  type="text"
                  placeholder="Cari artikel kesehatan..."
                  className="search"
                />
              </Form>

              <div className="artikel-chips">
                {categories.map((category, index) => (
                  <Badge
                    key={category}
                    bg={index === 0 ? "primary" : "light"}
                    text={index === 0 ? "light" : "dark"}
                    className={`artikel-chip ${index === 0 ? "active" : ""}`}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <Row className="g-4 artikel-featured-row align-items-stretch">
              <Col lg={7}>
                <Card className="featured-article-card h-100">
                  <Card.Img
                    variant="top"
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                  />
                  <Card.Body>
                    <div className="article-card-meta">
                      <Badge bg="info" text="dark">
                        {featuredArticle.tag}
                      </Badge>
                      <span>{featuredArticle.time}</span>
                    </div>
                    <h3>{featuredArticle.title}</h3>
                    <p>{featuredArticle.excerpt}</p>
                    <Link to={DETAIL_ARTIKEL} className="cta-link">
                      Baca artikel utama
                    </Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={5}>
                <div className="article-side-panel">
                  <p className="layanan-kicker">Info Cepat</p>
                  <h3>Topik Populer Minggu Ini</h3>
                  <div className="article-side-list">
                    {articles.slice(1, 4).map((article) => (
                      <Link
                        key={article.title}
                        to={DETAIL_ARTIKEL}
                        className="article-mini-card"
                      >
                        <img src={article.image} alt={article.title} />
                        <div>
                          <span>{article.tag}</span>
                          <strong>{article.title}</strong>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <div className="artikel-grid mt-5">
              {articles.map((article) => (
                <Card key={article.title} className="article-card-modern">
                  <div className="article-image-wrap">
                    <Card.Img
                      variant="top"
                      src={article.image}
                      alt={article.title}
                    />
                    <Badge bg="dark" className="article-badge">
                      {article.tag}
                    </Badge>
                  </div>
                  <Card.Body>
                    <div className="article-card-meta">
                      <span>{article.time}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <Link to={DETAIL_ARTIKEL} className="cta-link">
                      Selengkapnya
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>

            <div className="d-flex justify-content-center mt-5">
              <Pagination className="text-center pagination-modern">
                {items}
              </Pagination>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Artikel;
