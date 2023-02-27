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
  `MATCH_DATE` datetime DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
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
  PRIMARY KEY (`TEAM_ID`),
  UNIQUE KEY `TEAM_NAME_UNIQUE` (`TEAM_NAME`),
  KEY `TEAM_MANAGER_ID_idx` (`TEAM_MANAGER_ID`),
  CONSTRAINT `TEAM_MANAGER_ID` FOREIGN KEY (`TEAM_MANAGER_ID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'MI',1,'2002-05-05','GOOD TEAM'),(2,'CSK',2,'2002-05-05','GOOD TEAM');
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
  PRIMARY KEY (`TOURNAMENT_ID`),
  KEY `UID_idx` (`TOURNAMENT_MANAGER_ID`),
  CONSTRAINT `TOURNAMENT_MANAGER_ID` FOREIGN KEY (`TOURNAMENT_MANAGER_ID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tournaments`
--

LOCK TABLES `tournaments` WRITE;
/*!40000 ALTER TABLE `tournaments` DISABLE KEYS */;
INSERT INTO `tournaments` VALUES (1,'A LEAGUE',1,'2002-02-02','2002-02-02','2002-02-02',0);
/*!40000 ALTER TABLE `tournaments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `TYPE_ID` int NOT NULL,
  `TYPE _VALUE` varchar(45) NOT NULL,
  PRIMARY KEY (`TYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (0,'ADMIN'),(1,'TM'),(2,'TEM'),(3,'MU');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
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
  `USER_TYPE` int NOT NULL,
  `USER_STATUS` int DEFAULT NULL,
  `SECURITY_QID` int DEFAULT NULL,
  `Q_ANSWER` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE KEY `USERNAME_UNIQUE` (`USERNAME`),
  KEY `SECURITY_ID_idx` (`SECURITY_QID`),
  KEY `USER_TYPE_ID_idx` (`USER_TYPE`),
  CONSTRAINT `SECURITY_ID` FOREIGN KEY (`SECURITY_QID`) REFERENCES `security_questions` (`SECURITY_QID`),
  CONSTRAINT `USER_TYPE_ID` FOREIGN KEY (`USER_TYPE`) REFERENCES `user_type` (`TYPE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'PARTH',NULL,NULL,NULL,'PARTH69','123',2,0,1,'blue'),(2,'soham','g','ggg','768688','SOHAM22','456',3,1,3,'SRK');
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

-- Dump completed on 2023-02-27 18:17:33
