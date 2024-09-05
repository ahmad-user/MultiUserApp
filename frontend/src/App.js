import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import TambahUser from "./component/admin/users/TambahUser";
import Navbar from "./component/Navbar";
import UserPage from "./component/admin/users/UserPage";
import EditUser from "./component/admin/users/EditUser";
import KaryawanPage from "./component/admin/karyawan/KaryawanPage";
import EditKaryawan from "./component/admin/karyawan/EditKaryawan";
import TambahKaryawan from "./component/admin/karyawan/TambahKaryawan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TambahUser" element={<TambahUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route
          path="/UserPage"
          element={
            <>
              <Navbar />
              <UserPage />
            </>
          }
        />
        <Route
          path="/KaryawanPage"
          element={
            <>
              <Navbar />
              <KaryawanPage />
            </>
          }
        />
        <Route path="/EditKaryawan/:id" element={<EditKaryawan />} />
        <Route path="/TambahKaryawan" element={<TambahKaryawan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
