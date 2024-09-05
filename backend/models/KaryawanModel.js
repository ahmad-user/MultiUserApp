import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Karyawan = db.define('karyawan', {
    Posisi: {
        type: DataTypes.STRING
    },
    Nama: {
        type: DataTypes.STRING
    },
    Ktp: {
        type: DataTypes.STRING
    },
    Ttl: {
        type: DataTypes.DATE 
    },
    Jenkel: {
        type: DataTypes.STRING
    },
    Agama: {
        type: DataTypes.STRING
    },
    Gol: {
        type: DataTypes.STRING
    },
    Status: {
        type: DataTypes.STRING
    },
    AlamatKtp: {
        type: DataTypes.STRING
    },
    AlamatTinggal: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Nohp: {
        type: DataTypes.INTEGER 
    },
    Pendidikan: {
        type: DataTypes.STRING
    },
    Pelatihan: {
        type: DataTypes.STRING
    },
    Pekerjaan: {
        type: DataTypes.STRING
    },
    Skill: {
        type: DataTypes.STRING
    },
    Bersedia: {
        type: DataTypes.STRING
    },
    Penghasilan: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
});

export default Karyawan;
