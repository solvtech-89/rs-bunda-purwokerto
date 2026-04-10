import { Container } from "react-bootstrap";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const AdminPageHeader = ({ title, breadcrumbs = [], description, action }) => {
  return (
    <Container className="admin-page-header">
      <div className="admin-breadcrumb">
        <AiFillHome className="admin-breadcrumb-home" size="18px" />
        {breadcrumbs.map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className="admin-breadcrumb-item"
          >
            <AiOutlineRight
              className="admin-breadcrumb-separator"
              size="14px"
            />
            {item.to ? (
              <NavLink to={item.to}>{item.label}</NavLink>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </div>

      <div className="admin-page-header-content">
        <div>
          <p className="admin-kicker">Panel Admin</p>
          <h2>{title}</h2>
          {description ? (
            <p className="admin-page-description">{description}</p>
          ) : null}
        </div>
        {action ? <div className="admin-page-action">{action}</div> : null}
      </div>
    </Container>
  );
};

export default AdminPageHeader;
