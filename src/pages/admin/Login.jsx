import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD } from "../../router";
import Logo1 from "../../assets/images/logo1.png";
import {
  BsShieldLockFill,
  BsPersonFill,
  BsEyeFill,
  BsEyeSlashFill,
} from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!adminId.trim() || !password.trim()) {
      setErrorMessage("ID dan password wajib diisi.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    window.setTimeout(() => {
      navigate(ADMIN_DASHBOARD, {
        replace: true,
        state: { rememberMe },
      });
    }, 600);
  };

  return (
    <>
      <section className="login admin-login-shell">
        <Container className="admin-login-container">
          <Row className="g-0 align-items-stretch admin-login-grid">
            <Col lg={5} className="admin-login-brand-panel">
              <div className="admin-login-brand-content">
                <p className="admin-kicker">SIMARSA Admin Portal</p>
                <h1>Masuk ke panel operasional rumah sakit</h1>
                <p>
                  Kelola pendaftaran, data dokter, poliklinik, dan rekam medis
                  dari satu dashboard yang lebih cepat dan terstruktur.
                </p>

                <div className="admin-login-points">
                  <span>Keamanan akses terkontrol</span>
                  <span>Alur kerja lebih efisien</span>
                  <span>Data real-time untuk operator</span>
                </div>

                <div className="admin-login-logo-card">
                  <img src={Logo1} alt="Logo SIMARSA" />
                </div>
              </div>
            </Col>

            <Col lg={7} className="admin-login-form-panel">
              <div className="admin-login-card">
                <div className="admin-login-head">
                  <p className="admin-kicker">Login Petugas</p>
                  <h3 className="log">Masuk</h3>
                  <p className="admin-login-subtitle">
                    Gunakan akun petugas untuk mengakses modul admin.
                  </p>
                </div>

                <Form className="admin-login-form" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="hdua">ID</Form.Label>
                    <InputGroup className="admin-login-input-group">
                      <InputGroup.Text>
                        <BsPersonFill />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        autoComplete="username"
                        placeholder="Masukkan ID kamu"
                        value={adminId}
                        onChange={(event) => setAdminId(event.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="hdua">Password</Form.Label>
                    <InputGroup className="admin-login-input-group">
                      <InputGroup.Text>
                        <BsShieldLockFill />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <Button
                        type="button"
                        className="admin-login-toggle-btn"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={
                          showPassword
                            ? "Sembunyikan password"
                            : "Tampilkan password"
                        }
                      >
                        {showPassword ? <BsEyeSlashFill /> : <BsEyeFill />}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <div className="admin-login-meta mb-4">
                    <Form.Check
                      type="checkbox"
                      id="remember-admin"
                      label="Ingat saya"
                      checked={rememberMe}
                      onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <button type="button" className="admin-login-link">
                      Lupa password?
                    </button>
                  </div>

                  {errorMessage ? (
                    <div className="admin-login-alert" role="alert">
                      {errorMessage}
                    </div>
                  ) : null}

                  <div className="d-grid gap-2">
                    <Button
                      type="submit"
                      className="admin-login-button"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Memproses..." : "Masuk ke Dashboard"}
                    </Button>
                  </div>
                </Form>

                <div className="admin-login-divider" />

                <p className="admin-login-footer-note mt-3">
                  Akses ini digunakan khusus untuk petugas internal rumah sakit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
