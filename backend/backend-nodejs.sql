-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Waktu pembuatan: 12 Sep 2024 pada 10.37
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend-nodejs`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `karyawan`
--

CREATE TABLE `karyawan` (
  `id` int(11) NOT NULL,
  `Posisi` varchar(255) DEFAULT NULL,
  `Nama` varchar(255) DEFAULT NULL,
  `Ktp` varchar(255) DEFAULT NULL,
  `Ttl` datetime DEFAULT NULL,
  `Jenkel` varchar(255) DEFAULT NULL,
  `Agama` varchar(255) DEFAULT NULL,
  `Gol` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `AlamatKtp` varchar(255) DEFAULT NULL,
  `AlamatTinggal` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Nohp` int(11) DEFAULT NULL,
  `Pendidikan` varchar(255) DEFAULT NULL,
  `Pelatihan` varchar(255) DEFAULT NULL,
  `Pekerjaan` varchar(255) DEFAULT NULL,
  `Skill` varchar(255) DEFAULT NULL,
  `Bersedia` varchar(255) DEFAULT NULL,
  `Penghasilan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@gmail.com', '$2b$10$aOx5B0ndKomv/xUBT2IQIuzFghTbA.sI9UwYS63SrFWXZfskyV7r6', 'admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI2MTI4NzMzLCJleHAiOjE3MjYyMTUxMzN9.8OJltTosvyoZbu3QGK7EmeuVzJeKLNIs37Ufhar7OVw', '2024-09-12 08:12:02', '2024-09-12 08:12:13'),
(2, 'user@gmail.com', '$2b$10$zZlnUWGIg.vfsA5EDl.MsuYEJTewoapu30fk.WMKNlSqe6gZB8xY6', 'user', NULL, '2024-09-12 08:12:27', '2024-09-12 08:12:27');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
