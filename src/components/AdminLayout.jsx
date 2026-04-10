import AdminNavbar from "./AdminNavbar";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
};

export default AdminLayout;
