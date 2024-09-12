
import Karyawan from '../models/KaryawanModel.js';

export const createKaryawan = async (req, res) => {
  try {
    const { Posisi, Nama, Ktp, Ttl, Jenkel, Agama, Gol, Status, AlamatKtp, AlamatTinggal, Email, Nohp, Pendidikan, Pelatihan, Pekerjaan, Skill, Bersedia, Penghasilan, refresh_token } = req.body;
    const newKaryawan = await Karyawan.create({
      Posisi,
      Nama,
      Ktp,
      Ttl,
      Jenkel,
      Agama,
      Gol,
      Status,
      AlamatKtp,
      AlamatTinggal,
      Email,
      Nohp,
      Pendidikan,
      Pelatihan,
      Pekerjaan,
      Skill,
      Bersedia,
      Penghasilan,
      refresh_token
    });
    res.json({msg: "Register Berhasil"});
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan karyawan', error });
  }
};

export const updateKaryawan = async (req, res) => {
    try {
      const { id } = req.params; 
      const { Posisi, Nama, Ktp, Ttl, Jenkel, Agama, Gol, Status, AlamatKtp, AlamatTinggal, Email, Nohp, Pendidikan, Pelatihan, Pekerjaan, Skill, Bersedia, Penghasilan, refresh_token } = req.body;
    
      const karyawan = await Karyawan.findByPk(id);
      
      if (!karyawan) {
        return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
      }

      await karyawan.update({
        Posisi,
        Nama,
        Ktp,
        Ttl,
        Jenkel,
        Agama,
        Gol,
        Status,
        AlamatKtp,
        AlamatTinggal,
        Email,
        Nohp,
        Pendidikan,
        Pelatihan,
        Pekerjaan,
        Skill,
        Bersedia,
        Penghasilan,
        refresh_token
      });

      res.json({msg: "Update Berhasil"});
    } catch (error) {
      res.status(500).json({ message: 'Gagal memperbarui karyawan', error });
    }
  };

  export const deleteKaryawan = async (req, res) => {
    try {
      const { id } = req.params; 
      
      const karyawan = await Karyawan.findByPk(id);
      
      if (!karyawan) {
        return res.status(404).json({ message: 'Karyawan tidak ditemukan' });
      }
  
      await karyawan.destroy();
  
      res.json({ message: 'Karyawan berhasil dihapus' });
    } catch (error) {
      res.status(500).json({ message: 'Gagal menghapus karyawan', error });
    }
  };

  export const getKaryawan = async (req, res) => {
    try {
      const { posisi, nama } = req.query;
  
      const filter = {};
      if (posisi) {
        filter.Posisi = posisi;
      }
      if (nama) {
        filter.Nama = { [Op.like]: `%${nama}%` }; 
      }
  
      const karyawan = await Karyawan.findAll({ where: filter });
  
      res.json(karyawan);
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil data karyawan', error });
    }
  };

export const getKaryawanByEmail = async (req, res) => {
  try {
    const email = req.email;

    const user = await Karyawan.findOne({
      where: { email },
      attributes: ["id", "nama","posisi","ttl"],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

 export const getKaryawanById = async (req, res) => {
   const { id } = req.params;

   try {
     const karyawan = await Karyawan.findOne({ where: { id } });

     if (!karyawan)
       return res.status(404).json({ msg: "Karyawan tidak ditemukan" });

     res.json(karyawan);
   } catch (error) {
     console.error("Error fetching karyawan:", error);
     res.status(500).json({ msg: "Server error" });
   }
 };