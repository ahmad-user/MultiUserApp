import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const TambahKaryawan = () => {
  const { id } = useParams();
  const [karyawan, setKaryawan] = useState({
    Posisi: "",
    Nama: "",
    Ktp: "",
    Ttl: "",
    Jenkel: "",
    Agama: "",
    Gol: "",
    Status: "",
    AlamatKtp: "",
    AlamatTinggal: "",
    Email: "",
    Nohp: "",
    Pendidikan: "",
    Pelatihan: "",
    Pekerjaan: "",
    Skill: "",
    Bersedia: "",
    Penghasilan: "",
    refresh_token: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKaryawan = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:5000/karyawan/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setKaryawan(response.data);
      } catch (error) {
        console.error("Error fetching karyawan:", error);
      }
    };

    fetchKaryawan();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/karyawan", karyawan, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/KelolaKaryawan");
    } catch (error) {
      console.error("Error adding karyawan:", error);
      localStorage.getItem("Gagal menambahkan karyawan");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKaryawan((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-left">
            <div className="column is-15-desktop">
              <form onSubmit={handleSubmit} className="box">
                <div className="field mt-5">
                  <label className="label">Posisi</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Posisi"
                        value={karyawan.Posisi}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option value="">Pilih Posisi</option>
                        <option value="Backend Developer">
                          Backend Developer
                        </option>
                        <option value="Front End Developer">
                          Front End Developer
                        </option>
                        <option value="Full Stack Developer">
                          Full Stack Developer
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Nama</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Nama"
                      value={karyawan.Nama}
                      onChange={handleChange}
                      placeholder="Nama"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Ktp</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Ktp"
                      value={karyawan.Ktp}
                      onChange={handleChange}
                      placeholder="No KTP"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Tempat, Tanggal Lahir</label>
                  <div className="controls">
                    <input
                      type="date"
                      className="input"
                      name="Ttl"
                      value={karyawan.Ttl}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Jenis Kelamin</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Jenkel"
                        value={karyawan.Jenkel}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="L">L</option>
                        <option value="P">P</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Agama</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Agama"
                        value={karyawan.Agama}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option value="">Pilih Agama</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Budha">Budha</option>
                        <option value="Hindu">Hindu</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Golongan Darah</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Gol"
                        value={karyawan.Gol}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option value="">Pilih Golongan Darah</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Status</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Status"
                        value={karyawan.Status}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option value="">Pilih Status</option>
                        <option value="Single">Single</option>
                        <option value="Sudah Menikah">Sudah Menikah</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Alamat Sesuai KTP</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="AlamatKtp"
                      value={karyawan.AlamatKtp}
                      onChange={handleChange}
                      placeholder="Alamat Sesuai KTP"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Alamat Tempat Tinggal</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="AlamatTinggal"
                      value={karyawan.AlamatTinggal}
                      onChange={handleChange}
                      placeholder="Alamat Sekarang"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Email"
                      value={karyawan.Email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">No HP</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Nohp"
                      value={karyawan.Nohp}
                      onChange={handleChange}
                      placeholder="No Hp"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Pendidikan</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Pendidikan"
                        value={karyawan.Pendidikan}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option disabled>Pilih Status</option>
                        <option value="Smk">Smk</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Pelatihan</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Pelatihan"
                      value={karyawan.Pelatihan}
                      onChange={handleChange}
                      placeholder="Pelatihan"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Pekerjaan</label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Pekerjaan"
                        value={karyawan.Pekerjaan}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option disabled>Pilih Status</option>
                        <option value="Fresh Gradudate">Fresh Gradudate</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Front End Developer">
                          Front End Developer
                        </option>
                        <option value="Backend Developer">
                          Backend Developer
                        </option>
                        <option value="Full stack Developer">
                          Full stack Developer
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Skill yang di kuasai</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Skill"
                      value={karyawan.Skill}
                      onChange={handleChange}
                      placeholder="Skill yg dikuasai"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">
                    Bersedia di tempatkan di seluruh kantor perusahaan
                  </label>
                  <div className="controls">
                    <div className="select">
                      <select
                        name="Bersedia"
                        value={karyawan.Bersedia}
                        onChange={handleChange}
                        style={{ width: "1300px" }}
                      >
                        <option disabled>Pilih Status</option>
                        <option value="Ya">Ya</option>
                        <option value="Tidak">Tidak</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Penghasilan yang di harapkan</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      name="Penghasilan"
                      value={karyawan.Penghasilan}
                      onChange={handleChange}
                      placeholder="Penghasilan yang diharapkan"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TambahKaryawan;
