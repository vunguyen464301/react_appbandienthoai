-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 22, 2019 lúc 11:07 AM
-- Phiên bản máy phục vụ: 10.1.34-MariaDB
-- Phiên bản PHP: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appbandienthoai`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `company`
--

CREATE TABLE `company` (
  `ID_COMPANY` int(11) NOT NULL,
  `COMPANY_NAME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `company`
--

INSERT INTO `company` (`ID_COMPANY`, `COMPANY_NAME`) VALUES
(1, 'IPHONE'),
(2, 'SAMSUNG'),
(3, 'NOKIA'),
(4, 'OPPO'),
(5, 'XIAOMI'),
(6, 'VIVO');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phone`
--

CREATE TABLE `phone` (
  `ID_PHONE` int(11) NOT NULL,
  `NAME_OF_PHONE` varchar(100) NOT NULL,
  `ID_COMPANY` int(11) NOT NULL,
  `IMG` varchar(100) NOT NULL,
  `PRICE` varchar(100) NOT NULL,
  `OPERATING_SYSTEM` varchar(100) NOT NULL,
  `DETAILS_DISPLAY` varchar(100) NOT NULL,
  `DETAILS_CAMERA` varchar(100) NOT NULL,
  `DETAILS_CPU` varchar(100) NOT NULL,
  `DETAILS_RAM` varchar(100) NOT NULL,
  `DETAILS_ROM` varchar(100) NOT NULL,
  `DETAILS_SIM` varchar(100) NOT NULL,
  `DETAILS_DESIGN` varchar(100) NOT NULL,
  `DETAILS_PIN` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `phone`
--

INSERT INTO `phone` (`ID_PHONE`, `NAME_OF_PHONE`, `ID_COMPANY`, `IMG`, `PRICE`, `OPERATING_SYSTEM`, `DETAILS_DISPLAY`, `DETAILS_CAMERA`, `DETAILS_CPU`, `DETAILS_RAM`, `DETAILS_ROM`, `DETAILS_SIM`, `DETAILS_DESIGN`, `DETAILS_PIN`) VALUES
(2, 'iPHONE 6S 16GB', 1, 'http://localhost/siteAppBanDienThoai/img/dienthoai1.jpg', '6.000.000', 'IOS', '4.7inch Full Hd', 'Camera sau 8.0MP , camera trước 1.3MP', 'Apple A8 2 nhân 64 bit', '1GB', '16GB', '1 Sim', 'Nhôm nguyên khối', '1810 mAh'),
(3, 'Iphone 6s Plus 32GB', 1, 'http://localhost/siteAppBanDienThoai/img/dienthoai2.jpg', '8.000.000', 'IOS', '5.5inch,Retina HD', 'Camera sau : 12.0MP, Camera trước : 5.0MP', 'Apple A9 2 nhân 64 bit', '2GB', '32GB', '1 Sim', 'Nhôm nguyên khối', '2750 mAh'),
(4, 'SamSung Galaxy S8 Plus', 2, 'http://localhost/siteAppBanDienThoai/img/dienthoai3.jpg', '10.000.000', 'ANDROID', '6.2inch, Super AMOLED, Quad HD(2K+)', 'camera sau : 12.0MP, camera trước : 8.0MP', 'Exynos 8895 8 nhân 64-bit', '4GB', '64GB', '2 Sim', 'Nguyên khối(Khung kim loại + mặt kính cường lực)', '3500 mAh'),
(5, 'SamSung Galaxy S9+ 128GB', 2, 'http://localhost/siteAppBanDienThoai/img/dienthoai4.jpg', '11.000.000', 'ANDROID', '6.2inch,Super AMOLED,Quad HD(2K+)', 'Camera sau : 2x12.0MP', 'Exynos 9810 8 nhân 64-bit', '4GB', '64GB', '2 Sim', 'Nguyên khối(Khung kim loại + mặt kính cường lực)', '3500 mAh'),
(6, 'SamSung Galaxy A7 2018', 2, 'http://localhost/siteAppBanDienThoai/img/dienthoai5.jpg', '5.000.000', 'ANDROID', '6.0inch,Super AMOLED, Full HD+', 'camera sau : 24.0MP+8.0MP+5.0MP, camera trước : 24.0MP', 'Exynos 7885 8 nhân 64-bit', '4GB', '64GB', '2 Sim', 'Nguyên khối,mặt kính cong 2.5D', '3300 mAh'),
(7, 'phone same', 2, 'http://localhost/siteAppBanDienThoai/img/dienthoai7.jpg', '0', '', '', '0', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phone_order`
--

CREATE TABLE `phone_order` (
  `ID_ORDER` int(11) NOT NULL,
  `ID_PHONE` int(11) NOT NULL,
  `NUMBERPHONE` varchar(11) NOT NULL,
  `TIME` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`ID_COMPANY`);

--
-- Chỉ mục cho bảng `phone`
--
ALTER TABLE `phone`
  ADD PRIMARY KEY (`ID_PHONE`),
  ADD KEY `FK_PHONE_COMPANY` (`ID_COMPANY`);

--
-- Chỉ mục cho bảng `phone_order`
--
ALTER TABLE `phone_order`
  ADD PRIMARY KEY (`ID_ORDER`),
  ADD KEY `FK_PHONE_ORDER_PHONE` (`ID_PHONE`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `company`
--
ALTER TABLE `company`
  MODIFY `ID_COMPANY` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `phone`
--
ALTER TABLE `phone`
  MODIFY `ID_PHONE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `phone_order`
--
ALTER TABLE `phone_order`
  MODIFY `ID_ORDER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `phone`
--
ALTER TABLE `phone`
  ADD CONSTRAINT `FK_PHONE_COMPANY` FOREIGN KEY (`ID_COMPANY`) REFERENCES `company` (`ID_COMPANY`);

--
-- Các ràng buộc cho bảng `phone_order`
--
ALTER TABLE `phone_order`
  ADD CONSTRAINT `FK_PHONE_ORDER_PHONE` FOREIGN KEY (`ID_PHONE`) REFERENCES `phone` (`ID_PHONE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
