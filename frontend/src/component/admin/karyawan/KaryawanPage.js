import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const KaryawanPage = () => {
  const [karyawan, setKaryawan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchKaryawan();
  }, []);

  const fetchKaryawan = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/karyawan", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setKaryawan(response.data);
    } catch (error) {
      console.error("Error fetching karyawan:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/karyawan/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setKaryawan(karyawan.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting karyawan:", error);
    }
  };

  const handleEdit = (item) => {
    navigate(`/EditKaryawan/${item.id}`, { state: { user: item } });
  };

  const handleAdd = () => {
    navigate("/TambahKaryawan");
  };

  return (
    <div className="container mt-5">
      <h1>Daftar Karyawan</h1>
      <button onClick={handleAdd} className="button is-info mb-3">
        Tambah
      </button>
      <table className="table is-striped is-fullwidth mt-4">
        <thead>
          <tr>
            <th>NO</th>
            <th>Nama</th>
            <th>Posisi Yang Dilamar</th>
            {/* <th>Ktp</th> */}
            <th>Tanggal Lahir</th>
            {/* <th>Jenis Kelamin</th> */}
            {/* <th>Agama</th> */}
            {/* <th>Gol</th> */}
            {/* <th>Status</th> */}
            {/* <th>Alamat Sesuai Ktp</th> */}
            {/* <th>Alamat Sekarang</th>
            <th>Email</th> */}
            {/* <th>No Hp</th>
            <th>Pendidikan</th> */}
            {/* <th>Pelatihan</th> */}
            {/* <th>Pekerjaan</th> */}
            {/* <th>Skill</th> */}
            {/* <th>Bersedia di tempatkan di manapun</th>
            <th>Penghasilan</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {karyawan.length > 0 ? (
            karyawan.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.Nama}</td>
                <td>{item.Posisi}</td>
                {/* <td>{item.Ktp}</td> */}
                <td>{item.Ttl}</td>
                {/* <td>{item.Jenkel}</td> */}
                {/* <td>{item.Agama}</td>  */}
                {/* <td>{item.Gol}</td> */}
                {/* <td>{item.Status}</td> */}
                {/* <td>{item.AlamatKtp}</td> */}
                {/* <td>{item.AlamatTinggal}</td> */}
                {/* <td>{item.Email}</td> */}
                {/* <td>{item.Nohp}</td>
                <td>{item.Pendidikan}</td>
                <td>{item.Pelatihan}</td> */}
                {/* <td>{item.Pekerjaan}</td> */}
                {/* <td>{item.Skill}</td> */}
                {/* <td>{item.Bersedia}</td>
                <td>{item.Penghasilan}</td> */}
                <td>
                  <button
                    onClick={() => handleEdit(item)}
                    className="button is-info"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="button is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No karyawan found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KaryawanPage;
