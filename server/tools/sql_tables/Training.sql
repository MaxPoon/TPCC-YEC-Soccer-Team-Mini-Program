SET FOREIGN_KEY_CHECKS = 0;
--
-- Database: `cAuth`
--

-- --------------------------------------------------------

--
-- Table structure for table `Training`
--
DROP TABLE IF EXISTS `Training`;
CREATE TABLE `Training` (
  `Location` varchar(255) NOT NULL,
  `LocationDetail` varchar(255) NOT NULL,
  `Day` varchar(255) NOT NULL,
  `Time` time NOT NULL,
  `UpdatedTime` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `Training`
  ADD PRIMARY KEY (`UpdatedTime`);

