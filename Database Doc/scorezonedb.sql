CREATE DATABASE  IF NOT EXISTS `scorezonedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `scorezonedb`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: scorezonedb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `MATCH_ID` int NOT NULL AUTO_INCREMENT,
  `TOURNAMENT_ID` int DEFAULT NULL,
  `TEAM_ID_A` int DEFAULT NULL,
  `TEAM_ID_B` int DEFAULT NULL,
  `TEAM_A_SCORE` int DEFAULT NULL,
  `TEAM_B_SCORE` int DEFAULT NULL,
  `MATCH_STATUS` int DEFAULT NULL,
  `MATCH_VENUE` varchar(45) DEFAULT NULL,
  `MATCH_DATE` date DEFAULT NULL,
  `REMARKS` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MATCH_ID`),
  KEY `TEAM_ID_A` (`TEAM_ID_A`),
  KEY `TEAM_ID_B` (`TEAM_ID_B`),
  KEY `TOURNAMENT_ID_3_idx` (`TOURNAMENT_ID`),
  CONSTRAINT `TEAM_ID_A` FOREIGN KEY (`TEAM_ID_A`) REFERENCES `teams` (`TEAM_ID`),
  CONSTRAINT `TEAM_ID_B` FOREIGN KEY (`TEAM_ID_B`) REFERENCES `teams` (`TEAM_ID`),
  CONSTRAINT `TOURNAMENT_ID_3` FOREIGN KEY (`TOURNAMENT_ID`) REFERENCES `tournaments` (`TOURNAMENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `PLAYER_ID` int NOT NULL AUTO_INCREMENT,
  `TEAM_ID` int NOT NULL,
  `FIRST_NAME` varchar(45) DEFAULT NULL,
  `LAST_NAME` varchar(45) DEFAULT NULL,
  `PLAYER_POSITION` varchar(45) DEFAULT NULL,
  `PLAYER_BIRTHDATE` date DEFAULT NULL,
  `GOALS` int DEFAULT NULL,
  `PLAYER_STATUS` int DEFAULT NULL,
  PRIMARY KEY (`PLAYER_ID`),
  KEY `TEAM_ID_1_idx` (`TEAM_ID`),
  CONSTRAINT `TEAM_ID_1` FOREIGN KEY (`TEAM_ID`) REFERENCES `teams` (`TEAM_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (1,1,'Peter','Abbott','Defender','1953-10-01',80,1),(2,1,'Stan','Ackerley','Defender','1942-12-07',70,1),(3,1,'Ted','Adams','Defender','1906-11-03',50,1),(4,1,'Alphonso','Ainsworth','Goalkeeper','1913-07-11',40,1),(5,1,'John','Aitken','Defender','1912-09-21',30,1),(6,1,'George','Albinson','Forward','1897-02-14',20,1),(7,1,'Arthur','Albiston','Defender','1957-07-14',90,1),(8,1,'Alex','Telles','Goalkeeper','1992-02-10',33,1),(9,1,'John','Allan','Forward','1893-04-14',12,1),(10,1,'Reg','Allen','Forward','1919-05-03',34,1),(11,1,'Arthur','Allman','Midfielder','1890-12-24',77,1),(12,2,'Eduard ','Abazi','Defender','1968-01-29',22,1),(13,2,'Djamel ','Abdoun','Midfielder','1986-02-14',55,1),(14,2,'Tosin ','Adarabioyo','Defender','1997-09-24',11,1),(15,2,'Tony ','Adcock	','Forward','1963-02-27',66,1),(16,2,'Emmanuel ','Adebayor','Forward','1984-02-26',34,1),(17,2,'AdriÃ¡n ','BernabÃ©','Midfielder','2001-05-26',24,1),(18,2,'Sergio ','AgÃ¼ero','Forward','1988-06-02',26,1),(19,2,'Archie ','Aikman','Forward','1925-03-23',88,1),(20,2,'Paul ','Aimson','Forward','1943-08-03',97,1),(21,2,'Manuel',' Akanji','Defender','1995-07-19',55,1),(22,2,'Nathan','AkÃ©','Defender','1995-02-18',44,1),(23,3,' Alan','A\'Court','Forward','1934-09-30',66,1),(24,3,'Abel','Xavier','Defender','1972-11-30',44,1),(25,3,'Gary',' Ablett','Defender','1965-11-19',21,1),(26,3,'Charlie',' Adam	','Midfielder','1985-12-10',89,1),(27,3,'Ted',' Adams','Goalkeeper','1906-11-30',55,1),(28,3,'KrisztiÃ¡n','AdorjÃ¡n','Forward','1993-01-19',47,1),(29,3,'AdriÃ¡n','Chris','Goalkeeper','1987-01-03',33,1),(30,3,'Daniel','Agger','Defender','1984-12-12',24,1),(31,3,'Andrew','Aitken','Goalkeeper','1909-09-25',98,1),(32,3,'Albert',' Riera','Midfielder','1982-04-15',47,1),(33,3,'Alberto','Moreno','Defender','1992-07-05',88,1),(34,4,'Tammy','Abraham	','Forward','1997-10-02',98,1),(35,4,'Ola','Aina','Defender','1996-10-08',71,1),(36,4,'Nathan','AkÃ©','Defender','1995-02-18',114,1),(37,4,'Albert','Ferrer','Defender','1970-06-06',43,1),(38,4,'Rati','Aleksidze','Midfielder','1978-08-03',70,1),(39,4,'Alex','johanson','Defender','1982-06-17',77,1),(40,4,'David','Alexander','Midfielder','1917-10-18',56,1),(41,4,'Alexandre','Pato','Forward','1989-09-02',35,1),(42,4,'Clive','Allen','Forward','1961-05-20',37,1),(43,4,'Jimmy','Allen','Defender','1909-10-16',59,1),(44,4,'Les','Allen','Forward','1937-09-04',79,1);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `security_questions`
--

DROP TABLE IF EXISTS `security_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `security_questions` (
  `SECURITY_QID` int NOT NULL AUTO_INCREMENT,
  `SECURITY_QUESTIONS` varchar(45) NOT NULL,
  PRIMARY KEY (`SECURITY_QID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `security_questions`
--

LOCK TABLES `security_questions` WRITE;
/*!40000 ALTER TABLE `security_questions` DISABLE KEYS */;
INSERT INTO `security_questions` VALUES (1,'fav pet'),(2,'fav color'),(3,'fav actor');
/*!40000 ALTER TABLE `security_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `TEAM_ID` int NOT NULL AUTO_INCREMENT,
  `TEAM_NAME` varchar(45) NOT NULL,
  `TEAM_MANAGER_ID` int NOT NULL,
  `REGISTRATION_DATE` date NOT NULL,
  `TEAM_DESCRIPTION` varchar(45) DEFAULT NULL,
  `TEAM_LOGO1` varchar(4500) DEFAULT NULL,
  `TEAM_MATCH_STATUS` int DEFAULT NULL,
  PRIMARY KEY (`TEAM_ID`),
  UNIQUE KEY `TEAM_NAME_UNIQUE` (`TEAM_NAME`),
  KEY `TEAM_MANAGER_ID_idx` (`TEAM_MANAGER_ID`),
  CONSTRAINT `TEAM_MANAGER_ID` FOREIGN KEY (`TEAM_MANAGER_ID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Manchester United F.C.',3,'2021-02-03',' Manchester United','https://img.freepik.com/free-vector/logo-template-design_1195-105.jpg?size=338&ext=jpg',0),(2,' Manchester City F.C.',5,'2021-02-04',' Manchester City F.C.','https://img.freepik.com/free-vector/vintage-sport-club-logo-design_23-2149530935.jpg?size=338&ext=jpg',0),(3,'Liverpool FC',6,'2021-02-05','Liverpool FC','https://th.bing.com/th/id/OIP.qROzuVuLmBA4m-hKqkgJowHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7',0),(4,'Chelsea FC',7,'2021-02-06','Chelsea FC','https://th.bing.com/th/id/OIP.PXyZBa_6eIAehnHLx-Bi_QAAAA?w=271&h=204&c=7&r=0&o=5&dpr=1.6&pid=1.7',0);
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_players`
--

DROP TABLE IF EXISTS `tournament_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_players` (
  `PLAYER_ID` int NOT NULL AUTO_INCREMENT,
  `TOURNAMENT_ID` int NOT NULL,
  `TOURNAMENT_GOALS` int DEFAULT NULL,
  PRIMARY KEY (`PLAYER_ID`,`TOURNAMENT_ID`),
  KEY `TOURNAMENT_ID_idx` (`TOURNAMENT_ID`),
  CONSTRAINT `PLAYER_ID_1` FOREIGN KEY (`PLAYER_ID`) REFERENCES `players` (`PLAYER_ID`),
  CONSTRAINT `TOURNAMENT_ID_1` FOREIGN KEY (`TOURNAMENT_ID`) REFERENCES `tournaments` (`TOURNAMENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_players`
--

LOCK TABLES `tournament_players` WRITE;
/*!40000 ALTER TABLE `tournament_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `tournament_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournament_teams`
--

DROP TABLE IF EXISTS `tournament_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournament_teams` (
  `TOURNAMENT_ID` int NOT NULL,
  `TEAM_ID` int NOT NULL,
  PRIMARY KEY (`TOURNAMENT_ID`,`TEAM_ID`),
  KEY `TEAM_ID_idx` (`TEAM_ID`),
  CONSTRAINT `TEAM_ID` FOREIGN KEY (`TEAM_ID`) REFERENCES `teams` (`TEAM_ID`),
  CONSTRAINT `TOURNAMENT_ID` FOREIGN KEY (`TOURNAMENT_ID`) REFERENCES `tournaments` (`TOURNAMENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournament_teams`
--

LOCK TABLES `tournament_teams` WRITE;
/*!40000 ALTER TABLE `tournament_teams` DISABLE KEYS */;
INSERT INTO `tournament_teams` VALUES (1,1),(1,2),(1,3),(1,4);
/*!40000 ALTER TABLE `tournament_teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tournaments`
--

DROP TABLE IF EXISTS `tournaments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tournaments` (
  `TOURNAMENT_ID` int NOT NULL AUTO_INCREMENT,
  `TOURNAMENT_TITLE` varchar(45) NOT NULL,
  `TOURNAMENT_MANAGER_ID` int NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `PARTICIPATION_DEADLINE` date NOT NULL,
  `TOURNAMENT_STATUS` int NOT NULL,
  `TOURNAMENT_LOGO` blob,
  PRIMARY KEY (`TOURNAMENT_ID`),
  KEY `UID_idx` (`TOURNAMENT_MANAGER_ID`),
  CONSTRAINT `TOURNAMENT_MANAGER_ID` FOREIGN KEY (`TOURNAMENT_MANAGER_ID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,'ScoreZone Cup -2023',2,'2023-03-14','2023-03-16','2023-03-10',1,NULL);
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_types` (
  `TYPE_ID` int NOT NULL,
  `TYPE _VALUE` varchar(45) DEFAULT NULL,
  `type_value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
INSERT INTO `user_types` VALUES (0,'ADMIN','ADMIN'),(1,'TM','TM'),(2,'TEM','TEM'),(3,'MU','MU');
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UID` int NOT NULL AUTO_INCREMENT,
  `FIRST_NAME` varchar(45) NOT NULL,
  `LAST_NAME` varchar(45) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `CONTACT` varchar(45) DEFAULT NULL,
  `USERNAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `TYPE_ID` int NOT NULL,
  `USER_STATUS` int DEFAULT NULL,
  `SECURITY_QID` int DEFAULT NULL,
  `Q_ANSWER` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `USERNAME_UNIQUE` (`USERNAME`),
  KEY `SECURITY_ID_idx` (`SECURITY_QID`),
  KEY `USER_TYPE_ID_idx` (`TYPE_ID`),
  CONSTRAINT `SECURITY_ID` FOREIGN KEY (`SECURITY_QID`) REFERENCES `security_questions` (`SECURITY_QID`),
  CONSTRAINT `USER_TYPE_ID` FOREIGN KEY (`TYPE_ID`) REFERENCES `user_types` (`TYPE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','admin@scorezon.com','9960708090','Admin00','Admin@00',0,1,1,'jack'),(2,'Shantanu','Patil','shantanu@scorezone.com','9960708080','Shantanu01','Shantanu@01',1,1,2,'green'),(3,'Parth','Patil','parth@scorezone.com','9960708080','Parth02','Parth@02',2,1,3,'hrx'),(4,'Soham','Ghatpande','soham@scorezone.com','9960707070','Soham03','Soham@03',3,1,1,'john'),(5,'Amit','Patil','amit@scorezone.com','9960707060','Amit02','Amit@02',2,1,3,'salman'),(6,'Vijay','Sharma','vijay@scorezone.com','9960707050','Vijay02','Vijay@02',2,1,2,'orange'),(7,'Nilesh','Patil','nilesh@scorezone.com','9960707040','Nilesh02','Nilesh@02',2,1,2,'yellow'),(12,'','','','8','87','67',1,0,2,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'scorezonedb'
--

--
-- Dumping routines for database 'scorezonedb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-05 14:07:15
