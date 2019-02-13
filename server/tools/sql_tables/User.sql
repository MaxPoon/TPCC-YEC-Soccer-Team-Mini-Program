SET FOREIGN_KEY_CHECKS = 0;
--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- Table structure for table `User`
--
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `OpenId` varchar(255) NOT NULL,
  `WechatName` varchar(255) NOT NULL,
  `Birthday` date NOT NULL,
  `ChineseName` varchar(255) DEFAULT NULL,
  `EnglishName` varchar(255) DEFAULT NULL,
  `EmailAddress` varchar(255) NOT NULL,
  `MobileNumber` varchar(255) NOT NULL,
  `IsAdmin` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`OpenId`),
  ADD KEY `Name_Index` (`WechatName`),
  ADD KEY `Birthday_Index` (`Birthday`);

SET FOREIGN_KEY_CHECKS = 1;