import React, { useState, useEffect } from "react";
import axios from "axios";

const HalamanKaryawan = () => {
  const [karyawan, setKaryawan] = useState([]);

  useEffect(() => {
    getKaryawan();
  }, []);

  const getKaryawan = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("ini token karyawan", token)
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

  return (
    <div className="container mt-5">
      <h1>Daftar Karyawan</h1>

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

export default HalamanKaryawan;
