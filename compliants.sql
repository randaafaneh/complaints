-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2021 at 11:27 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `compliants`
--

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `complaint` varchar(1024) NOT NULL,
  `complaintNo` int(4) NOT NULL,
  `date` date NOT NULL,
  `status` int(1) NOT NULL,
  `country` varchar(64) NOT NULL,
  `complaintType` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usercomplaints`
--

CREATE TABLE `usercomplaints` (
  `email` varchar(64) NOT NULL,
  `complaintNo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `firstName` varchar(64) NOT NULL,
  `lastName` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `password` varchar(256) NOT NULL,
  `accountType` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstName`, `lastName`, `email`, `password`, `accountType`) VALUES
('', '', '', '$2y$10$BOkWsHkmQTgkrxIOlVOoyO8JRsf9K2/WYR70KvsqDkLgDdy7.XeUi', 1),
('', '', '', '$2y$10$WD.JeBruk73QpXQh1wVunOC263EiAfYKhCN.DXMVa5uVPJoIu9feO', 1),
('randa', 'afaneh', 'r@gmail.com', '$2y$10$VJnvXgbOcVwKWOEK6EyLL.Dl4FDuVfLZ4GzCpFxek3CdhWMKGblxa', 1),
('', '', '', '$2y$10$IHu.hYdXVafzmdS8wd/P6OSduIVxwWVnZ6ym4zqiWTItVYEmVeIq6', 1),
('', '', '', '$2y$10$IpnfYstERHT3dSmqMflqrO3yWKlA35Jrr26PazMH1E5/pnI1NH3n6', 1),
('', '', '', '$2y$10$6S9UOWJj13LYqazOcG/uoOQ2ZtU2YeoIeExb60Ao7JqGSW3jF7OBy', 1),
('', '', '', '$2y$10$as0FWjEq.WI8wMWMKAxWkeybyh7357l7sXeXL64JZx4cqLain6Z8y', 1),
('', '', '', '$2y$10$SvTib/b1u0OiBoxmkxxyoOgu1hoDPUDbTnvjqLyJlDRhPf9A79/Pe', 1),
('', '', '', '$2y$10$J6SMgBJdCkTmFUQWDAs0c.jB3q1FLB.Ang2vD9c4jko8JjQYYyqrG', 1),
('', '', '', '$2y$10$DA10AVY2BcFxqiS2Vs9I1OiTM/.Fmh5dP.ORWyMEITnbtQ9I1VBrO', 1),
('', '', '', '$2y$10$1IHPdaGRBBA0EJzBCQcE0.ZeUeSq1sKD6ZUImntTabybqkHpE.ykq', 1),
('', '', '', '$2y$10$b5OefvQMmecD9rikFGkmgOjROBGakzoF9VuIzxjD6bWGQkvpVPpvS', 1),
('', '', '', '$2y$10$aHmmYWobSq0L/KVnfiAUee6z1p.T3v849vybQ1ge3178/K7gRear2', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`complaintNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `complaintNo` int(4) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
