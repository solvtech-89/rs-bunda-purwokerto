import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Table,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_PASIEN } from "../../router";
import AdminLayout from "../../components/AdminLayout";
import AdminPageHeader from "../../components/AdminPageHeader";

const queueRows = [
  {
    status: "Sedang diproses",
    queue: "UM01",
    name: "Tengku Mahmudi",
    date: "24/11/2022",
  },
  {
    status: "Sedang diproses",
    queue: "UM02",
    name: "Wahyu Tia",
    date: "24/11/2022",
  },
  {
    status: "Sedang diproses",
    queue: "UM03",
    name: "Zepi Rara",
    date: "24/11/2022",
  },
  {
    status: "Sedang diproses",
    queue: "UM04",
    name: "Rian",
    date: "23/11/2022",
  },
  {
    status: "Sedang diproses",
    queue: "UM05",
    name: "Wahyu",
    date: "23/11/2022",
  },
  {
    status: "Sedang diproses",
    queue: "UM06",
    name: "Mamat",
    date: "23/11/2022",
  },
  { status: "Sedang diproses", queue: "UM07", name: "Adi", date: "23/11/2022" },
  {
    status: "Sedang diproses",
    queue: "UM08",
    name: "Anton",
    date: "23/11/2022",
  },
];

const DataPoli = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <main className="admin-page-shell">
        <AdminPageHeader
          title="Data Poli"
          breadcrumbs={[
            { label: "Home", to: ADMIN_DASHBOARD },
            { label: "Data Poliklinik", to: DATA_POLIKLINIK },
            { label: "Data Poli" },
          ]}
          description="Monitor antrean pasien per poli dengan tampilan yang lebih fokus dan mudah dipindai."
        />

        <Container className="admin-content-grid">
          <Row className="g-3 mb-4">
            <Col md={4}>
              <Card className="admin-metric-card h-100">
                <Card.Body>
                  <p>Total antrean aktif</p>
                  <h3>28</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="admin-metric-card h-100">
                <Card.Body>
                  <p>Sudah selesai</p>
                  <h3>19</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="admin-metric-card h-100">
                <Card.Body>
                  <p>Menunggu tindakan</p>
                  <h3>9</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="admin-panel-card">
                <Card.Body>
                  <div className="admin-panel-head mb-3">
                    <div>
                      <p className="admin-kicker">Poli Paru</p>
                      <h3 className="mb-0">Daftar Antrean Hari Ini</h3>
                    </div>
                    <Button
                      className="btnDataDokter btn2"
                      onClick={() => navigate(DATA_PASIEN)}
                    >
                      Lihat riwayat pasien
                    </Button>
                  </div>

                  <Table responsive hover className="admin-table">
                    <thead>
                      <tr>
                        <th>
                          Status <FaSort />
                        </th>
                        <th>Antrian</th>
                        <th>Nama Lengkap</th>
                        <th>Jadwal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {queueRows.map((row) => (
                        <tr key={`${row.queue}-${row.name}`}>
                          <td>
                            <span className="admin-status-chip">
                              {row.status}
                            </span>
                          </td>
                          <td>{row.queue}</td>
                          <td>{row.name}</td>
                          <td>{row.date}</td>
                          <td className="ad">
                            <Button
                              className="sed sed1"
                              onClick={() => navigate(DATA_PASIEN)}
                            >
                              Lihat
                            </Button>
                            <Button className="sed sed2" variant="danger">
                              Hapus
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <div className="admin-pagination-wrap">
                    <BsFillArrowLeftCircleFill size="34px" className="kir" />
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      className="left flex-row mb-3 ms-1"
                    >
                      <ToggleButton id="tbg-radio-1" className="clr">
                        1
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" className="wt">
                        /
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" className="clr">
                        2
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <BsFillArrowRightCircleFill size="34px" className="kan" />
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

export default DataPoli;
