-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Waktu pembuatan: 26 Agu 2024 pada 07.14
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
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `karyawan`
--

INSERT INTO `karyawan` (`id`, `Posisi`, `Nama`, `Ktp`, `Ttl`, `Jenkel`, `Agama`, `Gol`, `Status`, `AlamatKtp`, `AlamatTinggal`, `Email`, `Nohp`, `Pendidikan`, `Pelatihan`, `Pekerjaan`, `Skill`, `Bersedia`, `Penghasilan`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(4, 'Backend Developer', 'Muhammad Fadilah', '3671080111990004', '1999-09-01 00:00:00', 'L', 'Islam', 'AB', 'Single', 'villa tangerang regency sangiang', 'villa tangerang regency sangiang', 'afadilah162@gmail.com', 2147483647, 'S1', 'Enigma Camp', 'Manager', 'ReactJS, NextJS, NuxtJS, ExpressJS, PostgreSQL, MYSQL,  Golang, NodeJS, C#, .NET,  Laravel, MongoDB, Echo, Gin, Docker, CI/CD, Git, Gitlab', 'Ya', '8.000.000', NULL, '2024-08-26 02:19:12', '2024-08-26 03:14:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'ahmad123@gmail.com', '$2b$10$bDc8NJwHVdrQodtOpWP3T.ll/yl2653k1NCd8mdyaJs.J3d3f35cG', NULL, '2024-08-25 06:05:41', '2024-08-26 04:33:04'),
(22, 'joko@gmail.com', '$2b$10$O6I6J6YtZXBP5QzDVQcj2uMjuCQBXhUiId0xR3m8WZxKlmk12C2ZK', NULL, '2024-08-26 04:47:15', '2024-08-26 04:58:02');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
