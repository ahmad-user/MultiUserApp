import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import TambahUser from "./component/admin/KelolaUser/TambahUser";
import NavbarAdmin from "./component/admin/NavbarAdmin";
import NavbarUser from "./component/user/NavbarUser";
import KelolaUser from "./component/admin/KelolaUser/KelolaUser";
import EditUser from "./component/admin/KelolaUser/EditUser";
import KelolaKaryawan from "./component/admin/KelolaKaryawan/KelolaKaryawan";
import EditKaryawan from "./component/admin/KelolaKaryawan/EditKaryawan";
import TambahKaryawan from "./component/admin/KelolaKaryawan/TambahKaryawan";
import HalamanUser from "./component/user/HalamanUser";
import HalamanKaryawan from "./component/user/HalamanKaryawan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/TambahUser" element={<TambahUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route
          path="/KelolaUser"
          element={
            <>
              <NavbarAdmin />
              <KelolaUser />
            </>
          }
        />
        <Route
          path="/KelolaKaryawan"
          element={
            <>
              <NavbarAdmin />
              <KelolaKaryawan />
            </>
          }
        />
        <Route path="/EditKaryawan/:id" element={<EditKaryawan />} />
        <Route path="/TambahKaryawan" element={<TambahKaryawan />} />
        
        <Route
          path="HalamanUser"
          element={
            <>
              <NavbarUser />
              <HalamanUser />
            </>
          }
        />
        <Route
          path="HalamanKaryawan"
          element={
            <>
              <NavbarUser />
              <HalamanKaryawan />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
