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
  `TEAM_LOGO` blob,
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
INSERT INTO `teams` VALUES (1,'Manchester United F.C.',3,'2021-02-03',' Manchester United',_binary 'ÿ\Øÿ\à\0JFIF\0\0\0\0\0\0ÿ\Û\0„\0	\Z\Z( %!1!%)+... 383-7(-.+\n\n\n\r\Z-% %-/-0---5-----/-/-0-----/-----0-/--------.----/.-+-ÿÀ\0\0\è\0\Ù\"\0ÿ\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0J\0\0\0\0!1AQ\"aq2‘BR¡±ð#Tbr“Á\Ñ\áñ3CS’¢²$4‚ƒ\Â\Òc5EUsÿ\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0:\0\0\0\0\0\0\0!1AQa\"2q‘ðBS\áR¡±Á\Ññ#br’3C‚ÿ\Ú\0\0\0?\0\âè¢€+Búr\0¥o-¾ú\ÒH\rO\Ë}½þT\Òhˆ&’Š\0¢ \n\ß\í¦“\ÈRQE;_·ùÑ·­RE%DS€¶ÿ\0Ò½i´DE8GúR\Ú\Ûýüè‰ Zš	¢ˆŠp\Ïõ gú\ÓI¢%n´”\àh\ËÏ—\ßJ&‰\0¢‚i(‰i(§Ÿ\Ãù\ÑK~›RIDJG1SÃ‡\Ì¸\ß_!\×\ï\åL‚\ÆÜ¹ž•$\Ói‘Nƒ¼\Ï\ß\ÝP°q3\rL”¨\"Ü†¦ûž¿}?|4QR²:ö\Û\ãIIE(53\á\\” u*mV¸8ñ;rˆÓžšúÖ}Mµ°$Ä–Û¬×·‘¨Z*V-t§¯Z®t\Z	©±J° z^¡©[Á‘(§m\ëFÞ¿e6ˆŸ{\ïñ¡\äm\æyS*\Üq\äØu°·–ÿ\0\ãhX¸ÀGpª	mop\0¸ô?\à\rRiÒ¹&\çzeJ4©K@RQd”µ>(Y½•-\è	û*:\è#EQkebbubF¦\ÚiE®¥L‘`ºlA¡£5kqxÁ>EnIµó]nu#\Â-~µE4ßœJ(”\n	¢\Í.n”¹‡O¬\Ó(¢B*H\Ò\ä_nf£›—/¶ˆTóKa•v‘Ï¯=G\ßÖ°4¤|)\0¢€!;/JBy\nvkm\ïó¦š)I@S¯oZ\"X\ä*ASb6\"§“#mA\Ðs\Ô\ØkUˆ\æ)<\íz(\Ê	\Ñ@“`\Íhpž4\ê%C™Š0Y\Z0\Å{Á¾À‹’)ø	3wr•UŒ:¹ißº­\â\0]KµÍŽŠÀ\åÞµp³`ðò4‘9Y\Z\àœ$@^\å3bL„uüš¥rqž\Ðx&žfp\à3}	‘”ó\ï;C“‰\Åb*<73©oÈ™o\×\És¤9”£ƒª¶kŸq]7Š\Ô\ì÷|\\\Íux½„h˜,¢\×þÑ¬m@kw\Ò\\_\Ã9,p]\áëˆži<½ÁG¸\n|¼N5¶n‚^—Š]½òVºø¼[©N™k­&XG0v‡\×=•\éûB¤5 65¸“\ÃIŽw3¡e•¨\nÀf\Õ–\Û\æo\Ö\ä\è=\Ú\Ü\â\\\Zw²\"8¿^÷\"‹±X\Èñ\Z›1«	ŽÃ©\Ìpo“\Å~|¤ \ï\Î\â­\ãqXL^Ný¤%}Ÿ”\"º¨Ø¨l9ŽB\éf\\ª18\ìPp\ÉH†\ï`ó\à¿A\Ík\Ä;\Ú fc/\Ê?3\ÊF’W/ª\ê7cû©ùzÖ¶?‚\ÊI\ÑH˜©¶»À‚ÁH)”:\èû$µ”7=\Ä}•\Ó\Ã\â)\×ff\ÌMÁ\àw¼{ˆmVØ‰\Üi¬\'[L&Š)@«\n\ÊRµ<8\×Q”:\r½.4¨s_O‡•0Š( :\ÅI,¬\Æ\ìI;\ë÷òÐ´€R\æ\å\Ë\ï­\é¢B~”@Dø\×]v¾§¦µc\ä\Ëô¾´ÿ\0Ú«f\ä6ûin<þª…\èSI¤¢€*Vi\Êi[M¾?ºšO*¨D”Sˆ¤\ÛÖ¥\í\ëM¤\'_e²\ÞÙ²xs}\Û^ÿ\0^›\Õþ€iœ¨!i½˜s=XØ…_œ|5®¥VSa{\Ì¯¯\Ë^KS\ë1.&\Ã\Æü;ù&p\ì“>X\×P3œª‹ôŽˆ›ù›­F›†þ\ÈD\Ãû\×Q\Ý\Æø£¿-<ms\î5\âJ\äøpRn\×ö¥mGy!\Z°\r:\n\Ý\ì_\ÂO‹$e¦3f ²\Ø{;\Ü\Øß¨½q±x—\Z}%f\É\ì`\Ú_qþ €4t\Þ*\Ö£\éq \å·Pi\Þû‰\î\ì‹X\êrd\áØŒLc½\æRAR\ì\Äj\äma˜tô­>Ž\ãš%–Oe.e\Z…½¹›\ë\îµjvZ#˜¬•\î\ß\Ã$w\0¬A\ÒÃ‘4\ÜN.I‚\Ä)l4¿”L¹K m5\é—-Áò¾·Ó›W\ê„\á\Ú\0“O\âlZúi¨€]lC\Þ\ãE£v˜),ø›¸×Ä¸\ÌÓ•\ïJœ¦\ë•mr:¦•\Ûv×‡,\ß\'ÍˆŠ<©´Œú\í ²µr\Øñ€Tnë¿•\ïu,±…]F¦\×bm¦ÀkGj8ÿ\0ÊŒdD\Ñ\ä[s\Öþ\áWAõjR}–\æø@ŒÀh\Ó\Æ\ã³÷\\\Ú\èú´I¥­nk\å$„ø\×\á$xpi½\Zsð Ò®q~\rÉ…2~Q\ÑH \Øw©»°¬|i\"šl+<l©\r³€A-l¤Xi¥À« Ç¼Å¦\Â\â\Ó+*\Æ\Ð\çdvL¹vk–:ò÷U&Ñ­M”)8Oh	.p3&A˜¿‚¨\ÚU˜\Ê4\Þ@\ÌN I&·K½—;\Ã0x‰%fÁ¬¾Ð«Xª\æ:[\Ø\r9\ëV±r¤ŽS‚s§|‘Ù‰\Ðö=ƒô…š\Û\Z\ß\ìIeùF@\ÑHs\ãu9UQôs)\È\×;\Ä4“&\Ö3!•Ag¶|¶,\Í\â\nA·0/\éW3º¦$¶; æ“žA¾`M‹`ÌŽ\Ò\Þbµg5\ÍP œðEˆ;ƒ¤#]w\á¯\0\Ö \ëŠs$ƒª7^ª|C\ÓSHš\é±1Éƒv\Ã\â¾\ÃI­¼V\"úH‡tXj5¾üdñnb*\Ê\Ý\ä2\\\Ç%µb5(\á}™W˜\Ø\î9…\êa1™òµ\ä\ì¸h\áù8^G#\ZÜ©V-€òwe\ÃGr;}\Çk\ÙgS—]\ÝzSMŽQl\í\äL\ßI¾n\ã\Ò\âû\Ó\Ï\ÕW\åYk¤§¯]\Å\Ó\ï\ëM§\Èÿ\0J2Ô¬“@§\ÈZ	\ä?­6ˆŠ(—\Ì|h‰ R“Ê‚yRQEjp\Ì2\ä\Ì@76…\Â\ÙnIô\åV10«!6¶7\nX\\\r°65I®£×¯Š­j\Ø\ì\Ïg\Û\æ\ä¤(+&\Ö>\ÖD?O©ùƒ\ÎÂ±F\ã\È\Ö\î¹‹±†5´o,z³\Ù\\\Ý\çr¤sñ7ÎªX÷Wm(£\ÎO\Ùr¤ðWöƒ\ê2ŸRF²F \Ï¯qª\Ñ\Äð\åxñ8|*©€¸\r{ƒß³3º)¿Š8\ì\\¶\ë\â\Z\å\Ó/Œb\Ö5ù,\Ô\ÞGÿ\0mT\Èm\Èì£Êµ8\ßtÆ‚7\É\ÝdSq†„ÿ\0uq¼­`dk\ïaskÕŽ\Æ\à0³a\äY…œ\É[	\rÐ¶a®\ç~UÀÃ½\Ô\èÿ\01T\Ù\rL›g<O$’5iTpTº\ZcU¦,\Z\Ñx‡_‘ r&\ÂT¼|¼ª\à™\n¼€›£0º\ê6R>:\ïS·e¤\Â\È1Xy•|ed!N[f Ÿd‚/­\ÅC\Ã02püOw5Žb¼±\Ê7W7\Ð2lv¹<«*<²I1i\ÎBKI)v1»±ØŽ`7 \ÛIhsŸQ\í«ý3\Ö3\Öik­±q\ê€5\"Á\'3\ÞÚŸ\Ó=kõšA\ÔAˆ\"\à\ÜÕ°N\í#‰Í…G\Î\Ö,¤nu¹²\ì6¾\ÝNõQ\ã\Â\ÂO}#beæ¸\îÔ‹‹<\Í\èATŠ´\ÜOc1gž(ž\Ä–.òu\×\Å+9\ÑI\Ú06ö‰,@¢a\á\çy±§þ\Ö¬Ó«\0S\" `\0i.=\îÛ¹·hiÕ®æ†µ¯\Ä\0\\G{‡\'ˆH;DË¤Qa ŠÀ®\Ëÿ\0r\\\×ÿ\0(¦Ž\Òb\íÿ\02ö\é\ÝÁöwV«1`p\r\ìÉŽ6¢\Âh\äùkDx,œ«&8tav\0“§ 5»6NÇ‰4Ë‰tŸ2¤Ñ¤dºƒ7C¾÷<þJ\ÆI’\ÇÃ™“™­\ÐI[z\ØÓ­ƒ—\Ù-„s¯\ÃBNº	r\æA\æ\â\Þu&wTYqÅ‹\0?%…Ü›¶´\Ö\nYC\âT]†°ašö9K1:zÉ­\Ã\Ü\Òc\éžM p»n\Ó\å3b\é¥ÿ\0*4ø\â\Ò\â#]2÷¡ûK‹\Â~NXc.*\Ìñ’\Åyx\ïf]7\×Î­vo‡F‘·\Å07$ \ÐÝ®H$Ø›\Ø{ý)b\'\ÃG‰~Q4lI\î¤X¿\'k©0¸>¥òŸm¥É¬~!…Ê±´r´˜Y<i\"\ß/Cu\'G\0Xƒc¥Rm¸:‹GF\\n@#3DÙ³9Oö‰\0\\M\áD¶°\è²ônv°;M¼\å\Ö9¸•¬üsŽw„F¬²[(eþ\Î\Í\íƒóMŽ¤\è\××¥Dp­„‘°˜¡x%U\Ô-Í–h\Ëf[³Z\éF?€Ž%X¬Àœ¹\ZÙ­«)>\Ç/S¯4\Æ|Q|*8™Ž\ë3¸\àœ\í¨\r£[]v­t^9XG\Ä¹¸i«\Ú&\æM\Ötò¼9¹2Ò\ìM\ã4\ìAÝ¢nd\ÝK¹„E)S~F%\ÕnLRñÈ·\ÐG ²\×.£pH\Ï\í_g»\È\ì\ØG>:÷$\ê¿Fú+\Òu±:\\\'\âøY€&h\Ð\Ë\ìH­£a\ä¿÷oó[\\¦\ÇQ¥Büi 8Œ\"D\Ò\Å\Ý\å1\â\r	p\ë\Ý97\Ì.Œ/u ÜÎ…LSqG/YÝ¢4k\ÚN£fžÿ\0;u¹g§\Ã\â\r\å\Ñ#ƒ\Û»µ\ã\à¹\Øð¬M­a¡\' \'\ï¦ô\Ç6º\Þã‘§¼¶UMÂª\ë{\Þ\Â\×ûõ¨+\Ô/D\Ì\ÄI·$P\0S‰©Y šmQE%ù}}<¨Š|7 *|@w ƒ\Ô±§Ï$£(7½\ÍÉ¸µ\ïé¥ºTH¢‹¤\Ì n=k|\Î0p\Âñ‹\Ï<9û\Æþ\éXº†\Þ\Éð±¹\×\Ò\Øk¦ÿ\0\ÓÎ´1\à¾\n7\Ü\á\äh\Ûõ%=ômä¹™\ãõ\ÏÇ‰\èÁ\ì—Ak Y¢\Æ\ÄØª¸\Â\Ü\ÔóÝ³lN­‘½Æ†\Ó¯vS\ä\Îì¸‘rúf°¿;‘¨\'­t8~…\ÃÍ—;BY&\0+£².›€uô¯7ŽJ\è#\ãR<?&e\\¯v\Ä1e\Ö\ÖC\Îû\á\\\ì^¥G’×˜uˆ›w€mÌf\à\Ê\ÙV“ª\æ¸Á\ÔNœ\Ä\Ú\Ü,wV\Û\â±ÿ\0\0$ŒöW½ü+¦­`o}ÅŽ»\n\Â\ãEX,0›ÂŒoñœhe6ù£d]€×¡ñ\"0\Ñ87šAi\Ú÷\î\ã:Œ8;\æk\Ýœ\ïX\ë~wýõo‡c\â \Ðe»fvï¹Ÿ\í\Â4Ð¦Ú¯\Î; È´fv\î |<L»‚|cò0ü\Ó\ì­þ\Êö¿˜GÍ‹\ì·\Üi­¶¨¸\à~O\Ê$7v—1÷Ymm4az\êð]¡ÁC…P^Áâ­s{j»\\\ÕV\"¸¦YF›\æHœ¶Ž\"\'ðR*Uf¶“LÆ°|Æ·[š\âsbKNBQJF$6¸½ÀË—SRðŒ^¼\àK\r\Ì\ä¨Gr½\Ô~!c¨Ñ¶\èk{S‚w¢úø|6£§³Bv«\rÁ˜£†ÿ\0Ö¸08‡9\ÄQ|Àø\å¿~\ëž\ì\Éy\Ý\Ö\ämyû+_Œ\Ãü¦L²\Ân!	i#\ÔþSE±\Ô\ê6ò®cð…\Ä\â\ïb\Èc“Á¯w\"•\r™÷\ÏM¯Zµ8¨\ïA[…\Óý5Ÿ\Å8‡Ÿ/{ò‘k\Û$xu\Þ×½—]ª\Ö\nž\'ˆIðY¤ü17ñ\ì>²°¨iº\"4;\à8\r\×\ì\ív\è~ËŸ‰$Ó»=X\ÐG -ˆ\êÇTL—þñA\Ø{CMt­|Jpð¤@1]\åŽR\â,»kp¢û^¹œ?öio ¿\ì]k\ÓP\r\Å1\í{µm0F±*õZmªò\Ò\"\ÐA’A\ÞG{]\È\él’§\É\äd‘$Õ—!By2lyo]V»ø\\#d[´¶-{Y~u¯¨\Ój\ãø\\\Ë4c	+:œ;±ö‹w$òWcu<ŸMˆ&‰6\Zð¯þ\í¡!\Ê×±k™‰\Ã=óO\â€\Z\é t„^D˜^3ý\Õ\Ü\ÇVnS\Ûi-”’Gõ#qld‹\év¯HS½N‹f{Ü:ú¥õµ\ê”x\Å\ÅFñI|ñB\î³\Üg²!=\Û\ßI#ß¡:æ¤—–Ü½|«Gƒ.L6&fù\êpŠ6“+HGšÆ¬}õaô:8k^a§HsŒZ4»Eˆ\ÔD¨\Å\Ó¡–eÀõN„8›G\í¤xª\ßÈšKr¤;ŸZ’ü¾¿\Ý\é]óª\élšM6‚(¢\"Ši÷Ü¾ŸD”€\ÒR\ÒQÞ—oZ6õ¤­T•¥Àž^ñ»¸ž`AŽH²;#!µ\ÑòÝž`\î©8\'I•‰X\Õ^W\"\×%‹¿\ÎbÊ£ÔžU\Þ\á0%‚±…¸…K¬jT_´öÔ³_\Û\Zk§\Ú~Ð§NhÀ&/:\ZA»cªsI›®4 F\ä\Ïx\0$\èf@70¸\Ìw\0\Ã\Çg‘±8U¿±ˆ\ÂH\Ö$‘nö+¡ò¹”qH°\àŒ*8spg•S8\Òß‘Œ\\-þ“k¾•\ÜÇ‚f\Í\Ý\Ú+§\ÆY$\ÓU1\Û)[\èI±\Ðú\×\Ú>#`ñ®Db\êV÷î¥Ž\Ý\ä@ýC/‘aÊ¨\à+³PQ\Ä8»€$A´Ã€¹´›½Á\ß˜š˜`\\îŽ«\Éi¶\ÂûD\Ø\í¹± 7ñ7;\É$\êMõ½u\íz@9šP\Ûz×§]\Ð\"\0^¥ø6Œ A\ÐV\æ;‡€¨™\â9!sX^\Û\ë\Ëq©¬?Á\Â_†\ÂJ\Ø¸\Ðk¯1\\\Þ/‚\ãq€\â12GÆ¤)\0 v\0.ÄŸhùr¯Ÿ¿\rN®*«ª¼5¡\ÆxÜ˜¾ž¥y:tX÷÷@|¡u=£\ã\ÑÁ‡Gq\"‘…\\ª\Äxs\\ƒm\ÎÜ«˜›¶­\ÜD‹	\ïÓ»i˜ ³\"€XŽc8¶b@Ðš›²<J9°’\à\æTGes\ì¢\è\×$\ìUŽ`}\Õ\Ì?\Ü÷\æPUˆÃ‘›Å‘U!öªk~•€¢×ºF‰I\Ô\Ì\0õA$Z\à*õ‹.¾ó\ÙÓ&8ù/M\Âö‹\ìŠÑ˜Ì‘´£¼¢\rA6\'p‡’ùŠ\\7h°²w\0\Ë	],\Ý.\Ö­\ÅbqŒow.\Zh\ã\ï`û«Ç¨º\î\Û]+;²ø–‘ðQˆ\\,O-\Þ\Ç+f\Ìwµ…Ž›\Õ*X\Zn j¹¤?\áSŒCG;ê«Œ#\â\Ñ\ÄpwŒ\È\Zø.Ëµ‘(Á\Íe\Ã\Ð}!^-…öõýµí¬ÿ\0“›õòZñL(ð\'\ê/ûk³ü3ÿ\0\rOò‚·\ì¤\Ë}¸;\ßkV\Ô\\U%P˜¤y2Œ©2e\ïW rúH£©9ýI½c\ÈZ\Ð\à˜–O\Ê#H\ÚYt%E¬€ògb¦cÊ»X¶R4óT›hGhn©\âtà®Ž)¬\Ë\Ò:dh[Ú“°\ã&\Ð\éo*l/\Ã\ÊOw6*`»¤9m|¥\ßòj}Mqe°ï‡Š1h••Â‹IŒ¯+is~€s-\Üüˆ¬`º\ìhQ™-~ˆÑ¬¥µ\ÐúS\å\áÌ¤ŠÀ¦@\Ì\è\ÎH°•^\Ê\ÊlW@\r\Øk^fŸ´\ÜÊ½!\ë\r‘k^\í\Ê&¹Á¤ƒ~C^þT{Ãˆ˜XE°gi\ÈD\é\Åyki§Æ›[= áŠŒ¯´r+i{÷l†\ÒGúªY\nž`þcW¬¡Yµ©Š\Ðùˆ±˜\"?Ý£TTnhŽ#\Z®ú‹%½\0\Ò\í\ëöSkjØŠ(¢ˆŠr\ßz6õ¦\Ñ5A¢”š¹\n·6½\É\Ú\ßQ>~–÷QCW³@‰R<F‘GUŽewú™M«\ÐxARŒ\Él­,‡OÖ°ÿ\0H\åN!$r,¨lT\æöH7\æ¤­÷Öº\Î\ÇcQù¢„s)ò\åsþƒ\Â\Ë\Ðo\Ô^[\ÛX\'’\êƒC~@ÀxY ‚`v \Äñ±”\Ü\ÜÙ¬	™\Ú`	\ØÈ‘6w]i\Z$²\Ì.XN¾\"UG3r|D[¡Ú¹\Õd\î@_d\â\äe\×VU\ÃÙ¼ün—<\Íi(Ì\×\Ê\"a\â=\Þ™±¥¯\ÑF¹s›¥\ëš\íX‹‰$Ã¼1*dE(ùR1sgeº\æ\'R\Æ\×>‚«û:›]Š¼2\Ä\Ü\å‰\íx\0‘ ˜Z©T¢jÀ{{@Øˆ€gS©$A+\ÓyQVp˜|\Ík\Ø\0Y@9Ö‹pÔ¶™\×k–\Ú\íp5P|\ëØ®ãªµŽ\Êu]\ï\à\Ïÿ\0·Aú¿¸WC\Ä0©,m¨e \èGÀúŠÀüFG…H±\Ç\×J\é›o…|\Ï\â\ÜMB5\Ì\ïÄ¯òs—p.e\áøž\ïI3‚IQõ\æõQ\\x^U¹\Ãø\Ó\Ãð(\ÒC”›ìº©ô6¬zö”YQµj\æÐºGðÀ\í\ØR¤öÔ©›B\éCôº\î6&\\;¦ …cRY.\Ý\ä‡\'‰Ž`w·èµt?ƒ\\i|;D\Â\Ý\Ó\Ø¡‹\Ã}U‘epòÀ\Í\í\ÞF¾2mÝ±\ÊX…`=\×­ÿ\0Á\Ö&5ý¶&\Ý,2[\Ï\Ù\'\ß\\k\è¿ü»½º¶	“$›ºD\Ä\Ü\à¸\Ø\ÃD\Ñyn¹†¢0L“«¤LðZ=¬\ä“[èŸµk\Å0\Äwq\Ûü5ÿ\0m{gkOüß«ÿ\0’×ˆ\á}„ýEÿ\0mtÿ\0‡\Z\Z€ˆ~\n}ñ)+²\ì2\â@[œ>^«\Ì_N€H„\Ökp±Ä¸x™\ìM\ÎF\Èo£F\Í\ìEÁ¸6<«¯\r4s€¸\"HA	:LD\í®Ë£pm,\Ò$	 ƒw1nw^”ð\Úh\Èðø€|„{$[\ç\\·Ü²_3np\ê\çõ» \ßms°ñ>\ìY0o\Èc¯FøœødQ},z^®\â1\ê\Ñ–hre’\ÂÉžFQ°,ß“@mk’x\ÊXw>£E3ÀÈ™\ï2v\ê\È:æ‹® }ö\êù¿\Ö\æO+[Sb±{a2÷AV\ÖlT\î–\ç\ZÄ’<³\ê\å/ñ\ë÷\çZý¡b\î$¶UP±ª†ª.ô‰¹l\Ü\Íú\nÅ¯a\ì\Ü#°\ØqM\ÚÜõ\Úy\ry\Ê\í`\Ùäˆ“1\Ã@|<ô²(¢—oZ¾­¥Q\×\ï\ëKf\ê~4\Ê*@T‘›Xóµ(Jž¶ü‡Ÿ˜ø¸¨B\Æ\ä\ë÷Ò’YO\ßÊ™Eƒ[¹\ÕøÔ\É#\Â/¹&À|H¥Q\×\Ý\çN‚\\Ž²|Œn¹$Y-þš\Å\ÅÀ\Ýv\ï\ÙEW9¬qf \ïƒz±\Ç8ƒB[•T9fu¸lDƒ\Â\å˜kª­\íaÎ³øG›\áã‘”ó%Xs»|\ê\Ïipy1R›\Ü4\"·&Gl\êG]U(Ó®žu\ÊÃ±ŽÃ¶D\ç\0º~\"@$™\Öþe\Î\Ãa\ÚX	¼‰\ã3¹]8‚,ˆ€Y£\Zü™Ž¤\å\ÂH?7m…„3b$«9A¹½\'6\ÖA®¦³xf:H$7\Z¸ \î¬9ƒZO\ÃcœÁ‹6\í†$]z˜/«%ÿ\0»\Ür\ä+e,AÃ€Ê¦[³ŽÜ\Èh\à\è7;:#‡=rK8ýžG—m`mz\àòlø›©cn—±ýõ\ÒWˆpn->\ïYA³FÙ¬,u\Zû$Z\Ù[\Ðe¯K\ì\ßl \ÅxI\î\å£~\ëýŸ×˜ö·²«Òªú\Ñ-$™O\×E\Å\Äa_Júƒ¡\ZxVº\åû[\Ù\á²]3-µ¹\Þú\ÚÕ‡\Ã87´LL±œ\æ>±\Û\Û\ç\Þ\ã\Ì{ýð\Ê/iŸ!–A‰\Ìþ\r¸~yŒ\Ý\æ^\î\Þu`A\ZþŽšûª\îT\àY\î\ë4\Ú\Ú\é\0Àž´\Äó™°]¬>.¡Áš®uÁ\á\Â “¯9•[°øÉ„†mIÁ\Zi½¯{]\ßb\ì0QµŸ§øÒ£\Äv,ýü9W0:›\êZ7–\ÚjH¸÷õ¬\Èx\Ü\\;\n‘LAœf\ÚMË±\0\ï\Ôh.|ª®.³qMŒ8\ë8²@Ò¤÷Ä‰vE\Õ]vbM=Ii\ížI\ãµô\Ñmö¿þNo\Õÿ\0\Ék\Å0£ÀŸ¨¿\í­n9\ÚF1¯+da\Z›(õ+ûüùUŒ/H”I‰–\0@’N™Á\Ö(÷ý3\Ð[^×³p\ç\Ù\ÔH¬z\Î2\Z.l4y›¹XÁ±\Øfõ„¹\Ú4v†Ã‰6\n¶™L\Ó\\@¤‹L\ã^\ê;ü\Ð}§ùº¯³Å¸”³5Ù¬£DtDQ²ª\0¬q,s\ÌÀ›\0 *\"‹*(\ÙUF€\n \ËVX\×9ý-^\Ö\ÃP\ÑË™\Ý\Ñ}4W?–q9\êv¹h\ÑÀ~gsÀ@\Z|‹–+…\Äx$`·cv…‘e²A:ˆ¾•£$–&9Bb`À…níŠ†¾†×±\äk„p\ã6\"(\×vdôFmO¸}\ÕkŒ\â\Ö\\D²\rU\ÞFsRùU½\à_\ß[(uq%¬\Ñ\Í\Ì\á¶i€x\á ñ\Ê7U(\ÑËˆ-²{Á\0\"0ŸÅ©\\‹s\ì‹\Ú\×1\ÐrÕ¸\nÏ¢¤\ã\Ó÷ÿ\0*\è.«Z\Z &\í\ëM¢Š,©#\ÒÇ˜\ÔyúÕ–·\Ñÿ\0Sÿ\0\Z…‰q\ØJª©¤\ÐM+$ýý~\ß\çM™ f”›úý´MI¢ôRE+g\r\Ê`}Ÿ\Ú@\ÌC«FX>‰\çcX„T±\Î\Ê\Ê\ê\ÅÀ®\à™~úó­©ð\ë‹\ì@BŒ\ÒÄ»8Ý¦‰F\à\ßÄ›©<Á¹5[ü³§þ²Ôž?\Ú\ã¡ø\\`À ªt\ãü®\ìcöIøO\0M\Út—X@r®‚~bÂ¦(É‘\ÉR«ml|@‚9\ØYü¯‰‰$öK¨o=Fžó§¾·ûR\Òbqk…PB¡¶-¡g>Vú…i­UÂ»iƒ\0\ç\í®\â,¬U¨\áU¬i€%\Î<…£õ\ÜYf·Ž{|®6-k	\ãe°¸ñð\È£Å¶º\ÔRöuœ‚Dœg»eIW­\ãs¶ƒfkô­\ÞÕ”ü†04\Ësau&\ê‘k\æ>¢©v³€®#\ÂÍ”¶W»^\Ìk\\mq­W\Ã\â\0\È)’\Ìó\r#3cº\Ùfd-¹Ö‹Mùr\Âù vš`Ø–˜‚O\Ù#N\ä¼?µóÀ†r1•£\r\"¼d\\Z\ÄH5W˜\ÐTÝ‹Á\ÉŸ*2\ÇJHr^\åÁ±\Ëa©\Ì\0\"þD^«\â1˜\ì4Q?\Ê	IE\Â,m`uF\r\ÆÕ™Š\ás	P2*´–\";F#s®¥‡Ru\Z\Ì\ZÇ£c\Ãr3<\É\Ç,\Ì4€Ì‚\àžcS0õ\Z\Ç5Ž§\æv\Ö72cX+ŽvöI\ØÅÜ‹ª»0ýQ\É÷|FÕ„”óº\ÂOÏÿ\0(G\èÀ—k_‘\É]aøƒGwÅ¤1\íý²¢ôµ¢÷U\ÎpT™\æJ\îRú)}N °½®7·:Œ5jxzN\è‹ZIl½\Çn\Ñ¾\\%\n\r¢\Âü\í\0n\Ñ\'X\Õ\Öñ\Ë\â•Hq‘DÀ`\ãi%\ØO2‚À\ëýš/…7\ßV·:µg$‘¯>&4‘µ´yn£\Ï\ÖõZYš	£0\ï\n\æ\Îs\Û\Úñ\Ì5´­^\Öp\îôG‹ƒ1T0Qs›{\Ùyü\Óæ£­d\ç\ÔkZrç‘œ\ÃÝ˜|$’@˜›\0.®€)9­oW>®=gf8’G\Þx‹sœg…I‡“» ˆ\ê+8‹zý•\Öö\×™pñ±ePd\×\Ùl«¡¶—ÐŸ\ëT°˜$\Ã\"ÏˆÝµƒt/±\à!\Z\ï¾\ÞF\ÅK½\â\\t\â;Gx¿\0.l\Æ\â€Ã¶¥]M j\ã6\Ê7›	±\Æ0˜rN˜ŒLd(\ç5óùr/ýMÈŠ\Ä:\íÏ—O\åR\ã1O+´ŽÙ™\ÍÙº€@:TCOZ\é\áh\ZM%÷s®HÓš,<N\ë=\'6^þÓµ\à#@9;™2l½i·§¿\ZmZVB	§\Ì\Ð3M&‰ª	¥\ÌzšJ(ˆ¥™ fš\"	¢§\ÃaY\ïk\07bl©©q °`ÀnA½º\\h±/h0J¬þûÿ\0:Bi´QdŠ’`Á•ˆ*n¤=Tò¨\Å)?\n‚$AP\æ‡\Ò$ºq°\â±ašúNªnzÊ‹ª5þzøw&\ÚVŒ\Üc†tIIò,¼²\È\rŸkó=k‘\ÍZ|,w\î\Ú\ÊwBFn~tmu> _Î¹uýš\×v@#\ìº`‹®Z-Ù‡7hR©@±±\ìµ\â\ï\É\ÓþA\\\ì\Î >0K<Šfr\Î@¹\Ü\\¶›}Õ«‚\Æ\\Ø¨\Ùe&H\ÏGMTUd\Ë\Äp²$\â\Öùð\Å\n\ÞÖ¹‰õl®i\à#%\Ã\ã\á\ê†Wx¿T:¨>\ãT1,h%\Õ%†\0Þ¨ƒ˜\æ‚\"@Ô·¸(}z%Ä¼–:\0„A\r\ãB¯ö\êl\Ó\Å\í\ZÆ¶\èoöÚ¤ü#\ÊÄ½#\ï\áTf\à\ç~÷»21 \æ\Zö·\Ño*ŸŒðü~!\Ã>K…¤Rk“\ÈµªŸB\ÇQŠ¬†OXj@¸¿+eÆšY^\Ò\Z£†¦>¥\\\á‹\Þp¹—\è³‡v\ßÆ²;\î±Kse{\Æ}ö\ë	V°|‰$o\Z\Æcý \à(:[v\ÔiP/gZ\Ò\ãp\Èö¹E\É «\ZŸ¶¶S\èœÚ¬\ÎINb$p\Ò.«‡cj6¥FÃ‰62n\Ø]\\\í<\ÒH\ï‹\r¹3žd);&ºzT<1˜0÷\nX’ö#»\ë\ã&\Ë\×\ìªÍ‰\ÂÀOw“:“\ã\Ä~¡\î\Âü˜Š¡\Ä8¼³®Gam\Z.H\Çý¥:ÿ\0\ÖI­Ô°µ_LR\É\Õz€\0#ƒ\Ïþ¡aMÎ©L6›sCž[\Þ\ZŸÀ\Â\Ò8¸0\æ\é—=\ïœø¡Œ\Þ÷y›7?c\Î\â±q8—‘‹»33{l\Þ\Óyh@,Í¨M(®µ+iu¦\\Dc€‹ý G\ÕY§@5\Ù\Üs;I;\0h\Ñ\È_‰)À[Ze8\ZC\åVVô€Ô€\rþ¯¿*µÝªY\ïaa~{\ßOw\ïRG$“\Ìô¨X5Ù´L&Š)@\çR³@\éo\ä)¤\Ò\ÑE\àº^ˆµ¸K\Ý2J¶b¼Èµ\0ï®¶©±e9%¬\Û\Û1lE·¶b¤®†°h5A ¦}w¢€)Ê·¤&¥oE%\å[\Ñáˆ±\è9žCúÔ“H=”\Ðu¾\æ\Ä~ú%Ÿ@Am|þ}\êµBÀnQ[}œ\í,¸Th–4–\"nØ®Rm{0\Í\á\çb4\ëÊ±†ºs \é§ÆµW¡N»2T=hu]z\ë7+Âg. !\Üb\ì[Aâ‘¬Xi\ì€\Û]D\Ü{\nølÔ°N-sqÉ›¨Vs”µ\Ø:W3@¦¾f´L\È7ñ™‘\ß?yš•}•‡{C@\"8}Aû£ðI)Þ«º© g%\Æ@G†ú6`ûÁbNnZWu7Ÿ¸0D‹($i)k\ß3(¡#[\Øm\\C-©3r­¯\ÃR|f:ñ7¹\æfw•5=—‡y[÷+œI“Â©l« ’\ÝÊrÚ©QO\"ß»ø\Öõ}­\rhhL\"Š(¢\Ém\"\n38¹\ä5zýÿ\0”p0Sr/¦ž»\ÔrHXÜ›\Ô,¸\Æ\ÉdbM\Ïô¨\èŸ—Ÿ/¾•+=@\çHM\ÑDE\àº_\ãM¢%—5%%8ŽcúS@ \n{m¦\ÔD™ºR\ZJ\0¢ \nq<‡õ žCú\Óh‰\Ûúý¿Îš\0TžC¶‰¢i4›\ÒQDE©\Ûzý”„|i(‰A\äi¢ž_¿­7j\ëHh¢\"œ3@\Í4š\"pjB>”\å\Î\ßm \ésP\Ô\Ú\"R9\Ð\0QDKš—7úÿ\02Š\"[‡\á@S\Ðü+\Üx\Ïgpý\ê*a\âPT“h×‘\é\×aUðœ\Þ\Ä;˜™\ã^„ûÆŸW¡5]‰-©“)\Ô	‘¼mÀM×š÷–Ÿ\Ê?\ì?E\â\æýÂ_¡øW½§‡ÿ\0\×@\Ûj;±\Ðmv×ž¾Tÿ\0ñ°¶1\éµ÷§\ïz¹úý”û\ÆÏ–|þ‹Á²°?\r©;\0~×¾7\0‡B8|@X\ÜùE­÷\Ú\Ö³8B.ø(ô§\ëµ2_²{\ÆÏ–|þ‹\ç‹‡\á@S\Ðü+\è\Ï\Ål\æþ\Íi0šCû5¦C\ëöS\ï?–|þ‹\ç3~‡\áIc\Ðü+\è\Ï\Ål\æþ\ÍhüVÁ~i\ìÖ™¯\Ù@þ#g\Ë>Eó¥‰\äo\é¿ó¥±ý6¯¢¿°_šCû5£ñcù¬?³Zd)\ï?–|þ‹\ç;‡\áECð¯£?°_šCû5£ñ[ù¤?³Zd>¿d÷’Ÿ\Ë>Eó¥ˆ\ä~–=Â¾üXÁ~i\ìÖ“ñ[ù¤?³Zd>¿d÷’Ÿ\Ë>Eó ¾\Ö?\n\\¤nÂ¾ŠüVÁ~i\ìÖª\â»%†:¤1)\Z\ØÄ¤°\ë\ëõ\ëP\æ¸	õ\Îÿ\0³\åŸ1ú/ŸMú…=Â¾ƒÁök\Âï…ƒ\ÐF4<þÿ\0\ÐYüVÁ~i\ìÖ„…>ñ\Óùg\Ï\è¾t\nw ü)\rú…}ø±ƒü\ÒÙ­Š\Ø/\Í!ýš\Ô\ä>¿d÷ŽŸ\Ë>Eó˜¿Cð§d;\Ø\Û\Ó\ï­{Ôœ\n%1Œ$kóÏ€·Ko¦õ)\à8k\Û\äû‘?¯\ÕX¶1±\à£\Þ6úÏŸ\Ñ|üo\Ðü(±\è~ôL}™Á‘sƒ„\Ú\éõSÿ\0°_šCû5¬²_²Ÿx\ÙòÏŸ\Ñ|\æô?\n[~·ùOñ¯£?ð_š\Ãû5£ñcù¤?²_\áL‡\×\ìžñ³\åŸ?¢N/\ÃFY#pA#po´‹Uxg›¼Ye`2Ü…\0yô\Ðo}/E©\ØJnHgY\Ô\Ä\ín_R¼œ)A{¾š‰-¦RŸF\ÛXm­µ¾·?ú\Zí•º›\Ë{\èF·\Z\ïEiJ|P‚¡Á\Zÿ\0jzÓ¡?rhN·\r•®-ý\æÜ¯`-}Q¦wúü\ßÊ“;ýõ\áED\åv¾«a\Öÿ\0Ê¥¢Š\"(¢Š\"(¢Š\"(¢Š\"(¢Š\"(¢Š\"(¢Š\"\Íh¦\ï®\Z\Ñúþ…½›}-j~\î_ñqó9kú^Ÿu%ƒ–no{ú\Ñ´rò‘v¶©Ï®úzkFIo\í§ù_\Ö\é÷\åIEfŠH\Õ\ï\âe# R:s¿¯\ÕV(¢ˆ¿ÿ\Ù'),(2,' Manchester City F.C.',5,'2021-02-04',' Manchester City F.C.',_binary 'ÿ\Øÿ\à\0JFIF\0\0\0\0\0\0ÿ\Û\0„\0\r2!=,.$2I@LKG@FEPZsbPUmVEFdˆemw{‚N`—Œ}–s~|\Z;!!;|SFS||||||||||||||||||||||||||||||||||||||||||||||||||ÿÀ\0\0‚\0®\0ÿ\Ä\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0E\0\0\0\0\0!1AQaq\"2‘¡Áb±\Ñ#BRr’\áCS‚²\Âñ$%&45Es„¢\Òðÿ\Ä\0\Z\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0/\0\0\0\0\0\0\0\0!12AQ\"aq‘ð#3R±\ÑB¡\áÿ\Ú\0\0\0?\0öt€P\n@(\0 	\0d\í@s70/½4cÍ…•¸…½\ÙPù0 7\Í\0 3@(\0 €P\n@(\0 €P®u8m\ÉA™$\Õ{<\ÏeR‹d¹%¹­j\ÛÀ¼y\Äyú\n»B;“y=Œ\Ziw¸IûÙV?Js\Ù\r\r\î\ÎË¡\Â?§—\Èû´\æ±\ËFBˆ§þò¡…9¬r\Ñ\È\éWPom2\íØ…£\r\ÇÊš\Ó\Ý\r-lÀ\Ô/,\Ø-\Ü|C—¶Ÿ\â\ÉòÚšc.–55¹em}\r×²„¬ƒš6\Ì??J\æ\â\Öå¦žÄš\ÃE\0 €P\n@(\0 ¬ÁT³’{(\nk‹\é¯d\è,ƒpž\ã†aßŸ\Õ_^ª**ò9¹7ˆ’m4˜a\nfWa|‡\ÔÔ¹¶j‚GU\Ô`’\Î\â\æ&.¶üa\Æ0A^b¦\Îö*\ä],j\"Û‹\å\è¥^>¬‘/l8¹ø\ÕJ\Ë	F’\êò-rý-­ž\è\ã<=(P›÷\ïúV\ÙiW2\î\ç!w4cÄˆ\Înôhs–\â/Žt²\Ö/‚v“\Ö\Ù\Þò\âHPp˜\î À÷ñmš™X\Ômo¬\Û]Ê±¥T”•\äObB9ü\è\âÐ½\Ì]i\ï\Ú{%NDd\àdóSòªS\ì\Èp\îŒYjl\Ð^\ä0<<l0A\ì;<ù\ZJ\ÐR\ì\Ëz\æt€P\n@(\0 €£»¸“P¸\Ö\ÛÇž}Žl~\èùš\ë¥jg6õ;\"\Æ­\ìb\ãP\îy¹¤5Í·,–’X+¾\Ð\ÇqC}os4I	Ä¡G	ýlr8ª…ž—“¦¡¦\Ó\É\Õçµ¹LH\Ñ\ìm˜©\í\ìÚµ¸\Øf\çC£\ÚZ…Io§[Un%·i\0\\ó\Çyš›\ì,OW¶\É2C)’@0‰·—eNM#\Ïoa-ª\Û<SE7\Zð«¯	\ïÈ­M§pfyc³˜Xj\rp\ä~§a R;2)|\å>‘ku\rüò=¿U¶eÉˆ¸a\Òö²÷VÉ«®q³šöMB\â\çM5ƒH,¯\ï\Öd=€V´’³\Ü/b\Òþ\Å/•\áYT`l|…Le¥‰EI´\Ë\ÆI:¥\Ær\n;ƒû\'\è{ETâº‘1}™o\\Î‚€P\n@(\0 n±w\Ð\Ã\Ñ+\Ò±\Âö\ã\ÄòupWwdM\ÙXÀš}©–\à¤lp]‰\0/rù\n\É=LØ­(‰ö–\Ö9¬’ó¡KŽ¬x\ÊN‡\ÞùúVÁ\æÁù\"@b\Ñ\í¡}GQs\èÇ«ð™Ž\àpN\0>µ½OÍ·6o´	&#´¶¹(Lq`·€\ÎÀ|üªZKvŠ\Ë\ÙÆ£y’mt©S<Ø°\â>d\ïNeò3—Qö4k­]·:t\Çþ\áj¹\Ô~\îO&¡…¾Õ“þ_0òœT¾\"‡Ÿôÿ\0ƒy5\rÿ\0ýYø¸®tÙ¸¿¬Œ€\ã\Ôs¨u¨=¤R…Eº:/\ÚbüSˆYq\ÆÑ|Ž?ò«IK1h;­\Ñ\ÞmR(´\Ûa¤\Èý\n\ÌÀ„‡\Ì\ëTs\ê2øÁ\ÏI´½·˜J:C#9Kµ•¶~\éý+d\ÓA&L\Ö-A¬¦AA\í\ãŸaóþ4„­†d•ò‰š}\ÏY¶ð$S\Â\àwÿ\0>u2Z]Š‹º¹*¤\Ñ@(\0 €Á )-\Ç_\ÕZS¼hx±\à6_žZº¿Lm\ä\æ³+˜ûC¨Áf\Â\â\Úg®Œ*ƒ\Ù\í³Y÷E6k£iw\Û\Â\ÆG…\Äö\ÎC£m\Í{³Y)&!j-\ï\Ú[HQqº\äwá‘Jš˜¢ýÊ†fP±\"òAð®j]Šro¹½Q\')\å/½‚ymš\çR¢‚.0r1\r\ÂIr@\0\ãe:Ñœu	CK±\×\0óº\Ù2÷Vñ´\ì.pq\\*Ò‹‹id\é;¬žs\ìÑŒ­ö›qhK\àg–\à\íÿ\0zõjŒg\åR³h—ª\Ü\ÞØ¬P«-¥ˆ‘a\é‹ñ\ÊA\Æ{»{kb“ù“ O\Ò-Ý°›­Eo&rx¸ÔŒ\ã=¤VMw\Ò\ÇýTkbO{=\Ü\Ôü2=*¥\êÉŽ%bò¹\0 €P\n6¡)†\Æi\ÞBù‡Îµ+³D„%³¸ýg\áÁvüA«¨òL	óCñ˜\ædF\æ¬2\rsØ²\ÚÇ§Ú´…Ó¥| ,O{³\Ë\0[{¼˜SYp\Ëöªr€\âED°`VW\Äcsi;¶ýPN$\Ö^\Ù9\îAÀD,yò¯%Zß¥\\\íyf²»Ê‘·[\är5“šN\Ù*)F\èÅ»0+ðœ®Fq[E\ÉjLTK;Ct\Ò\Î\0)ºB¾¹Ø™SQ\É,2§\ÄW¥\ìq<––?\×Wö\äð‰UHn\æƒñ4\áó\Ã\Åø2«µFD Šû«\\Ìž\Ü@ûp\ì~\Õ^\Ø’£†8S‚(\Õ¹Fa¥F¶½\Ð\Ü/<|\ÔññWHe4sž\ZeÊ\Ê\äFk™\Ð\Í\0 €P\n°\ÐÀ\ï‘?ý*\á\ÔDúMô°L·=\èú\ïõ¬–\ì¨\ìI¡\áÃ¯µ\Ë~u–b\è‹zØ•>\än\ã\Ïaõ5±2XEˆ¿\í\é?sûµœNe“hô³\Ñ]#\É\nœÝ³^z\Ñr‘Ö›IÝ‘%9\n©\"l ÅŠò\Í\Þ\Ê,\ëe£^ŠU„•`	;5N‰¨Ùµõ)N7¹€¯fH\Çõ‰J›\Ô\Ú\Û\ÈmMXÍ¬c¬\éaúª3µm.bz²eI=6±f\Õô\Ï)\äc=\Ú†ˆ§\çN4m\îÿ\0rxŒO\èzkV\n\×*p%\Èò 7\âMk5Ä¨SŒ0\á\ï\ÎÕ‚èƒ¬¨kh\É\ì|ÁZ\éO¨™\ìw\ÓX¾›jÍ¹0¡>xvRØ•Xh €P\n¿Yÿ\0tC\Ý*þUÒŸQ\é:\é›é–¿ô”|ª%»)l`Z°h\Ï\Â\ã\äsT\äN“K\áúS\ãüŠ\ÖGq-Š-=úf\ìŒd¢°øb³ˆM¸\Ø\Ú\r%+—]r\\mƒ\éQË«\å®Ÿ‚3\Ü+’^5\'=\Õ\Î\\–ö5q[\\\Ø)\ìÆ‡Ò£ú7k`¯\êù8ôr½\Z|*W?cs­¼’E–Œ¯µ\Ïj\Ú|-ZMÙ¡*Ð–\èÝ¯\çSƒ\Ãð®ÜªþQ\Ê~K·­]ÐŠ®õÓƒü”þH\â:\ÏI\nñµ\Úw°]ÿ\0q:\Ómƒ-h\Ï	F“rIå‘š­Y\'Nz¹Å¢Ï¤_Î”úŸI\×Jÿ\0…\ÙøÂ‡\åS.¦Tv%\Ö\Z(\0 €‡«/1ý€øN~•Qv’&J\è\ÓGl\Ùþ­\Ù}3‘ò\"¶}B\ÒO¨(‹z¸\è¥<•¸[÷[cóÁô­F3\ÎH†\ÛZ‹a24$ø\ÅW˜)®\Ù&Ž$\â\Éñ>Wm\Õ\Ñ\Åa\Ø\Òñ£…²8AÛ“Îµ0\Õö(\ïu	.£L¤X\Ýv\ËyøW	U»²>.\r\Æ.S\ß\ÇòuµÔŠ(K¢ÍŒsŒ\ãù\ÖÓ­|28Ž\r\Ç0\íõ-a•N2\Ðs]\Ú>zÁ\"@3\ÝÊ¸VŸ.œ¤v„u\É\"»DAqu=\É÷d“<]œ+JQ\åQQöz\ê\\ô–@õp\ì0d%\È<\ÆN\ß,T3ª$V£^“	k\ï{OðüZºSÝ³Oœ1ˆ¡Ž1\É(ô\Ì\èt €P\n@j\ÊJ°\È#€§\Ò\Û\ÞKj\çž\Ûþ\Òþkƒ\é]g”™\ÎmU\È\èk\",ˆ\È\ã*\ÃwŠ\Ï\ê¶r\\[:©=j0o\ÚÇº\ßC]¢\ÓV{3”“OR8\Û\\­\ÜeovEý–î©¤ô>T¿\ÇÀª¯\ëFoc\ëV2G·JO†ÿ\0Êº\Ê$Óž–™\ç\ã(d\ä®q‘^}\Ùú&œ`\ì\ß\í÷\Âdp«\ï“Ã¹\äN\ÕPNö\"¬’‹”²\×\ßý=7WXbU@8Pü\ëÜ™ð%ä…¨\\:Ä¶ÐŸ\ÓLp¿tvšòOñ\ê\é]1\ß\çÁ\Þ?‡\rOvZX\Ù,0¥šŽj:Oº\Þl~Y®Ó•\Ù0‹‘Ê¹K!\ëºÊ¨\Ý¾I¹?\Ä@ô®«\Óžóø.\ë‘\ÐP\n@(\0 6¯\Ãq\Ü;€I\ä{¿•øWX;úNsÇ¨³µ.`Yc÷Xr\î=¢¹µc¢\ÉÚ°. \é@dn	W\ÝlgÐŽ\ÐhŒ<ýÝœ°]5Õœ|3úkRvw¡\íª’SV{öfG\Ò\Ì\Û\Ï\Ô}%»qc\ÞS³)\î\"¶5´½5püödÊ•ýPØ„š\"¹\'¬`dû\"1°\ì\Æõr¦žN°\â§dlšGW¸I\ÜaN@\à\Æ{»i\Æ&¥y\Õ\Ã_BU\Íÿ\0BC-\Ëì‘¯6ü«\Ì\êÊ»\ÓK\Ïð#\Ï]3Ox¦y¤+5û\ìÇš@;¼O‡ù\×X\Ú\ÓŒw“»/`„B¤±\',Ç›óRQÖ€‰¨\ÝukrPŽ•ý”=þœ\ê£²d\ìˆ\Ú-·G˜ƒú@\ä\äðŽG\×s\ë[7wc ¬²ZT(\0 €P\nI¢I¢x\äF\"›–	dÒ®\Ú)\Éh›v8\æ?l~ñ\ìýj\ës’ô»2ñX2†R;‚;k‰\Ô\Í\ÎXRe\á‘C{öP\ÚO(ž\Öå œrr3Ÿ\ßëš«¦­%tešwDYR³\Þ\æÓ¬\ÊK]\ÉóS\\ùn?•+{2µ)u£WV¾\Â%œg¶S—øU\ÍPRw­-^Ý\×lAXŸ§\èQY©-+<\ï¸Ø¿™\ç\éœW¡¾È„‹Dc@ˆ¡Tl\0¤\Ózœó$4’Q¹¦à¥Ž95k\Âò®!]˜w\Ùó;g\á]Ÿ¡[¹\Éz\Ýû£•q:™ €P\n@(\0 #\ÝÚ¥\Ü\\\r\ì°\Ý\\sS\ßZ›N\èÆ“VeT7\Z\\½\èZ3œ*÷w§þ½•Õ¥<£šn8e\Ä\Çq’‡´WŽ§Bv <öŸo.­l×³_\Ü\Å)‘‚¬Rp¬@c­toN	Y$\á\î5\Ë\ÛfšUŒ\Û&8\\Ž“¸\î5ŸÚ™½\Èú5«I{zd»ºqo9U¦$Žßlž‰\ZD·\Í|4†šNŽ\éš~?m\ã\ÎËž|ö>Tv¶¡F6Ì£\Õ\ÜV¨­¹\ÙTn[\ÈV¤\Þ\Æ6–\å@\ë:´ù\ÏH\Ø\È\Ü\'—{xò\\Sù9\æ\Ì¥¼KKÂ‹\Ù\\^N‰X\ëCE\0 €P\n@(\0 9\Ïw˜\æP\è{\r\åL\ÚmÅ¬†k9¼ˆù7­uÖž$s\Ò\×I´:Ã£tw0ž?º8[\ÕO\ÐÓ—úF¿\'-t;©šI¤9twhÃŸ8³ÖŠ¼YgV‚\é\î£e2º,l[TgcLD–vm4‰\"!™ø\ä&NgÖ™`Ž\×Zz]µ\ÔleFLY`@\ßÊ©FOjH\á&«qp\Æ;HŠŸ\Æ\Ã\ÏõW\Ô\ÕhK©“­½\í´–‘Ì·ŽInj%¿y¾ƒj\Ç>\Ñ\n\Ùlˆ#@¨¨\0\\Î†\Ô€P\n@(\0 €P\n@(rÁ\ë\Ã4i\"÷:\æ›#\é6\Í\ît‘Ž\ås\ÍZœ‘ds¡D§sûÈ‡\é[\ÌfrÑ•Ð¢SžšO\ìªðÓš\Ç-Jµú4¾1að\åR\ç&RŠDÄ#P¨ªª9%P\n@(\0 €P\n@(\0 €P\n@(\0 €P\n@(\0 ?ÿ\Ù'),(3,'Liverpool FC',6,'2021-02-05','Liverpool FC',_binary 'ÿ\Øÿ\à\0JFIF\0\0\0\0\0\0ÿ\Û\0„\0		\n\n	\r\r\r \"\" $(4,$&1\'-=-157:::#+?D?8C49:7\n\n\n\r\r\Z\Z7%%77777777777777777777777777777777777777777777777777ÿÀ\0\0w\0w\0ÿ\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0@\0\n\0\0\0\0!1\"AQa2q‘¡#BRbr’±²$Ds‚“¢£Á\Âð3Cÿ\Ä\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\07\0\0\0\0\0\0\0!1AQaq\"‘±2¡Á\Ñ\áð#ñ3BRb‚²ÿ\Ú\0\0\0?\0÷\ZŠ¢„\"„\"„)¡\å\Ü\'\Þ ¹¡A0–}ªÍ«ø/	8@¿ý¼»g8\Ï|\ãæ­–Ò‘·;\\™JfŽ®2¤\Û\"ªž:/ª¢„\"„\"„\"„\"„(4!MQBËºÆŒ\î@U$ú\n*Uƒ(`r\È4)\\¥º†(d•\ä^H/ƒœc½LBö´N‰^[\Üð\á”C4©$‘ò\Ç\Ò<Ä‡)S¸\É\\}j\ì:<]F;˜ƒ7sJ®’\Ç\íZ+8Æ›\Ðñw–guÁò\Îw8«	Žk3\Å=¨!½Ø™\ß\Ð&\Ü7{¯\rA#C,j™\r\Z\ÆI[p\0Ü€N*¯¹j\ÂUkpÁ\Ñ\É;Š\î	¢ŠX\äR“\0Ñœý\àFER¶½®\0ƒª\êî¨…Ü€ª2Iô\n\Ä\ÅÔ«PA\È#\"…*hB(B(B(B(BƒB%‘¦F³Ä¨&”È·%a‚¸c\ß`/Â®\Ë]c\ÅK†M-:\Ç$°\Þjibl´“\Z\Ê\Ã*\×W9u÷\Üù5xlË–SR°§’Ž¼\Íü\ë^\Óí•®8–InnnB2Ï”\æÀó‘ü\Ç\ämÛ½[96b\Ì\Ì&K±&Ië¿Š\åe\â4½F\àjhó\ß[2,S4†aeY\É\0\ã%U[»ªMÀif£T\í¸hu¯ÀJ>\ÐT\Õ\Å8\ä71\ìDlw\"^L\à\å\ì	\æ\Ål\\\n\Ö\Ç±\Ï\î¦ö+GT†;ž\Þú\á¤N²4\".aÛ˜N\Ä\ç\Z.¦«_V£E;8\Ì\Þ$ªû»\Ðl.oxZYm\æ¶Gs–pÏŒ€W›\ä\ß\n„Y\Êj`©¸m0¦\ê˜\Ëw©Ï§›X\ÆgPyš\Ò\ç\Û\ç\0l;ŸaÚ«\rBÓž³©\ì\ê\ë\Èú¦ü;;.m•Àf÷P¶O|eX\Õ\Åk\Ã:;ž:\Ï\æ‰\åQkEESBB-bøiºl÷¥:‚\æ\å\æ\Æ~µ-a*½]•2þö¼\Î\åd²¹’Va\Ñ-q+‰9¶\ß~\\ž\Ø\Çnôì‹\í6-3ºãŠ†\×\ÅÆž¶wºu\Å\ÒO0bZñAb\ä\à{ª\ç8ü*r^AU8\Ì\Ì\Èö	\ã\ÅWƒX”ˆ\å\Ò\íõ\ÇA‰ŽEØ¼\ëAaŒŸ\ÃÖ¤³qTf$˜4ƒ†\íAõê¾¢\Ôb6ž\és\Í!‘f7]\Æ\ì\ì¹\í‚\0V¾\Ù÷\ÍLÌ©Û—)a;ä‘»öÓ‚©$©,\í \Ó&q \Å:e¹\Û\Ð\Ý<\ê1\é±ù©ŽiNx.\'!’8ÿ\0+«2j\Ñ=”06ö)I’Hî£ºU|•\ËoŽÜ¤m\ì\0\î*L\ê˜\ìKK@\ÈA½\æüJ‡Öšic]B\Þþå®£TH\Å\ÊFûŠw\ß–\ÆM\áT\â\ä€ðã›˜Y‹ˆJY\Ãia§][\"K\Ïñk±V\0«gr2@Á;\æ£gy%5¸\Ø`cEø\ÇO’³4\Ó\î¡tPó·ˆzŠ_¨=6Ý›·£øÞ§Úœ\ÝDkq{\ÏÌ­Æ•x5\r:\Þð!A2\nNqšC„]š56´\Ãø«u	¨¡4!!R\Ö\ì§¥\\\Ù,‚32ró‘œ}*\Í0e\'KmI\Ô\çU\çº\å á«»¿Õ’?J\Ç2\ÚdEÈ¨¤Ÿ6p@P{ö«?\Æ\ê0Ÿ\Ãø¼@s©<wcw§’omÂ—,wÚ­”±žF’\Û+\å$©o“VÚ·‚\Ê\îËª\×]\Âzpñ_vüo´:º¯77\'†8\Ï0aûÞ…G\ë\ïF\ÔÊ­\ìÊ\Ñ\ã\Ë\îª\ßp\ã\éV\æ\ê÷\\´·‚6wÌ2\Ã6N\Äü\ä\Ðk4	!2—c\â*¼6›¤ðŠ\Îx\É\0†û«{¢¯E/’\áb\Æ\Ì\Ô6;ü\íKö¦\Å\Úatð\Æ\'<6³sò\'”­U·\\_À³\Û\ë7ò\Ê\Éo•9fõ\æl\ÓV›€¹õ;/\Çe{„ðÊ¾Ÿƒ/¢c©[sEN3\á~\êòò\ày¿ô“\ïR*Ž	g³jqnHº\á{¨£’{­R\Æ8Ág‘\ÞÜ…Ü†$ù½À?F\Ô\r\Ê\ã³k=\Ð	\é÷K¸~\ÒN\"Ž÷Àj\Ñ\Í2tY\äµ ?•rWÏœz\ã|\í½Q•\Ø\í‹N+°ñXhmWŽð>ü–óG²:v™mf\Ï\Ô0\Æ¸\Î*®2eh¡OeM¬\à®T&¢„(4!!!`¿´IZÞ‘0\nZ+;÷P\êdF1v4š†<Wg³j5Ä³\Õa´\ÝbX%‡¥cª\é—#š?³	\äŸ\äB\ãýÓŠL‘¥º.\ål(p2ö¼7\\Úö4\Ñø£VV†)uŽ\"rV$ûil)\ç\ßaW\Î\è\Ôù,£D‚E6[^û­ðJ¯\ïo\Øx¸´]F\âPÜ«}©«\ÎT“Ê¼¡óm\Ø\ïóT.\å\æµQ£K\ÜuVý­\æu6\éd[ˆb\ÖÜšˆ\Ô\ÜdsDýG\ÒF\ãn\Ø\ÅDw­Ñƒu²Üƒ˜÷Nt­R\á/¤4\ÍN\Êý7˜\é ¡ü^\nÿ\0–¦wÁðú,5ð\Ì\Èv¹§L\ß\'§6¼_ª\Þ$‘\Ù\êú´\æ1\ç	¢Fò ÷8|\n¾\Ðñ>Kû:2\Ø\Ñ?\æ@ôHõ]x\Í\n^Oo©jjÄˆ§\ÔØˆ9‡|FžRGõÂ–]¿^«u8±®k96\ç\Ì\ß\à½\'€¹~\Ð\×yUT`l*€0©8µh§\ï;óró½¡üºSÀÿ\0\Ñ[\Zjå¢„\"„(4!!!`¿´uf\Ö4nQö·ñÿ\0\Ñ\Èÿ\0\nM]GŠ\ívYŠUz³\Õe¬l\ç}[ƒï—“\ÂÁkn²9•G)\ê9\Æ3œ\àƒøR\Û=\ÕÒ«^›ibiQ\'w «\Ú_[6\â\ê\âUz\Ü\Ïl\ÝÄ¹~Y\0oÂ i\'r»\è¿h\Ö4wj?ë¯˜]\"\å\á¾å„»!%\æñ!`\ÜdŸ¼N\ØúmD­Ëª=\ín&¸Ÿ™\îñ\Ý	\ÍÌ‰\'\Ø=´œöQOz$\æ|ºLÁ\Ë}ŽR¾˜ù¦O|B\È\Î\î\r\áÃ¼C#øñYö\Ô.5ý­ô•’;\Ûy\à5›ö\Ò@ˆUX¶\Ü\Ä9$\ã¶G¶iR\\\Ë.€ \Ì&#5k´ƒºÀ“{^,˜k®Ú£Lœ92¨µ!-\ÏFP¼\í\ÒA\Õ\î¡\Ã\ï\Û|ú\Õ\Üs{¼V|( â…‹`H\æLuˆ\\8\â\Õ4\è\ît€’ZEwy+º:…É–\Üö,¯z‡‰i\Ë\Í_³*\ì*–V³ˆh\ç¿\ä·<¸¾\×\È\ì.£û±(¦\Ó\Õß›—´rCñq[\nj\æ\"„\"„(¡¡\nµõô=ü½y„(}ÜƒúTª\ì¦\ç\ÎQ Ÿ‰â«±{w¦<ƒXkaÙ„‘mú0¥T¹š\ë`˜ZÊ€ofo\"¹\Ûð\æ“%¼\Ñh–\Ò\Ïû2\ÙsÞ¹8\Æp7\Û\æM‘\î©v;œƒTû\Äk¹Kð\î’Ñ­Xô$ðï‹’ò÷ò÷#>¸\Ï`jvl\à«\íø›~¡\ç}7\r\év\ï6k\"µ\ÛDÿ\0\è\í²±\'?\ì*6l\à†\ã±Ÿ\Õ:q\ß\î\×A\Ñ$šº\á\Ø-•\î\ÃFNbdb‡c±\È\0A‘FÉŸÚ‡\ãq µ‰·ò%t^Ð¤\Ò\ì&:=ª¼¥V\æN‹	\å$ùsï¿lÔšl\àªqØ ÷7hm¥õ_?ü{@YJ¶‘lÈ³…-\á\Üy<Àý_oÒ›¡ÛŠ\æ8ïŸ¢£ö›%•ÿ\0WE¶‰\ÄˆD\ÊD®«\î‰»|Uvm†7ØªM\Ì\ßpL¸*ñ£{‚ \Ôu{§Gh\Ñ@¨4Ž¼\ÉI\í”k\æn¶\Zuý¾£n.-ž\"î½Ê±SúŠh3uÌ©M\ÔÝ•\Úþj¥Q!!EY®:	›\rûª\Èm&\çŽ\êJAXÀùTþtš\ãº1[û>]P\Ó\Ì.x\rOÁe$YWoô\é&\ëjZ$\épÇ”\ìSŸ\é\æú\nM:‚­Át†_oe@!•õ[n¸I´\ÖH\È+\ÏËEo\Ú\'ü®µ©º.>)…¯¿KˆNª\Ë2\åuq­¼“\Ü:¤Q¯33\0(R\Z\\`j“Á\Å\Ú÷Om£™I®y½<¤Œ¥T=¦Òµ?‰c3–YT\×x”iú\Ì0EûHáÒsŽU\Í\ßû\Ë\î*\à«\Ð\Âm)ú|ü>ü\Þ\r’\â]n\È2»\È\ä‚N\å\É?L\ç©l\ÅÒ±a¢±\ÒÞŸž+—\Z^­¦0Ê«™›ðKÿ\0™P}j`J¾™©RO;,|ð\Ü\Ûp\è\Ö,\ÃQx\çK‚¯~U–µQF•\Õk˜ü]j\ÏÁ\ÝùzI[.	H…ö…E½Ë´\ÑÆ£hƒ»ô \ç\ç5¢‹r°^W\']·-~¢\Ýa>¦¬ˆ¡\nhBŠ°\\i5ñ\×:H\Ë%­´\\Ef¹s,q\ã\ã ž\ØÞ¹\Ø\ê‘øüµ]œiŠ9Ž¤‘?\â •Wƒ\ãhK§K4wV÷V^\æC‘*¦B?\ãƒ*öcÞ«t’\Ø\Õ3\î\à¨f8N£ÐŽª\ßöwröó>›pOR ö\ÎÀ`Å‘\×þ­´­b•ÚŒŠ­\Ð\ßÁ\ßBš\ÞS—$\â\Ù- Òšk\ë\ÙmmþÓ¥÷¥\È©$Cÿ\0z«ˆJÓ„k\ßW+$ü9¯7r\rJN$1.\ÒG‚\Ü\"/>\È\ÎÁG+HKrŒ’v]\Ð\ró/@iþ\Âšn|otRuóV`·kË›{;p\á®@s!b\Î2w9\ïœn[9ßº’X\ÛSfsƒ\Z^\í\Þ_œÀ\è½V\Ú\ím\ã‚TŠ%Š \0 \0\0§®œ\\I:•„\ãy©«Á£\ÄA3\Ë¦\Çp	\Íù(‡ûÆ‘P\ÉÊ»ž6T\Íc¸òo\Æ|•N-y\îµË¸-fŽ\×\ÃÆ–±\Èûû’\0>]\Þ5øÕ‡\Zñ´\0\è°!¬¢\á3$1ð\0Ÿ›ð4·&þ\æ0U4\ç\Ä[Àš7w=@\Þ\Ä8aŠv¡sKå—´ZÌ­?Õ¡=4´­ë”Š¦„(¡;Åš8»‡\Æ\Æf\êÄŒ¬°€YÔ«R7^bG\âi°\í­\0˜)\Ôñ®Â°\Ü\Û\áU\à\Ý&\Þ7mB+i­!†@\n¥‹0O©\Ç\Ó\ä\ÑG\r±$—IQÿ\0¥SK¼Ø¾ýM¡*\â(d\Ñx\Æ+\Ø1\ê² ýf G/ÁxÙ|·\Å\î¾xú®®ûF°\ê\Ïù?GA[\ËYã¹¶Šx<R¨ta\êâŸª\ã9¥¤´\ê#ûTñG£j+Kiez²\Ü\"üF\">´Š\Ó\0®\ÏcesªÒ˜s›y\Ú+]Lö¨ó\Û#õ\íHß¨¹f\ßl‚2r0pI$Rµ²ï˜¦\\—\Ðò´~_†‹\Òø\Ö	å¸¿v„\ÜUè¬šŒ\áW¸\ìqØ÷­W˜Ç¹\Í\ã‰Z\Ûû¤²´–\æ\\•K`n[\Ø’v¦ž\Æ¸4oX®\r¶“S\âK\ÝR\à‡ŽÇš\Ý†\Ï4\Ä|yòIgy\Äðü+­p£†m!«®z7\êy«g£[žö[k‰\ã¸\Â\ËJ¤\nÊ¯\Ü\á¿5^Þµ«„\Û:Z\è+˜{V¦\n˜†\ÏODë†´¯·2:÷G™–@rH]³\ê\ÌI\ÎäŸ€-Fƒh¶š¸—Wke±“ºrJ(Bš¢„$U4~­nL‘\Å0\ÂK\ë\æ\ßc\ÌF\ß\ßz»5•‹\Z\á“#´<,Þ“«\Ûp\æ\á\ã¹Gý\æ–npN9cB@\ïüKŸzkš^W6†!˜JyC¯\Ö|€ú„›U\×¼\Æ\Ò\á\Ù\Ø4762¸À\r”gc\Ü\à\ÍV¦3 j´vgol1s\î\Ãc\ÐòZž\×\èl®—¥)v3ÿ\0\ç0\ÞHÿ\0ó_‚\Ã÷k%7H‚½Whaƒv\\z\Ç\äyõ[D’6WEea‚¬2¦®`1p¼gQ\áÖ—L\Öõ›[{hÅ•\ë5´ðƒ‘ó€£bÀùMfsl\\½m,hmJT\âs6\à\Þ\çO¸^i¢µ¦¹¦\Þ\Û\Æ!fŠd¹H\ÎSže\\ú…c·Áø§e\ïØœ\Ô_M×¸#®ÿ\01ª[\Ç:Ô­\"iúy~§$[\ì\Óc9?\Ë<\Äÿ\0_cU{Ž?‡`­_t	=>®Ó¤¤z\'&Š\ÊÍma‹\'/0—|—t$’I\È €@\ß±˜|¬y_o;‹}S`Mºtú&º\Õ\í¯YÆ†q¨rS†Œ\æG(sô8©h,*˜ŠŒÆ²&#ò²\Õðô\Ñ=§FÛ¬\ÐC\å\Í0‘˜÷;‚{gÖ”ýnº˜b!³‰”Ú¨´¢„)¡\n(BEÅ—V	¥\Í\å³\Ýól!‰I úG\ÝüÆ¯L±cŸHR-x\Í\È~YyDV“\ÙZ\ÎG¿!ÀüOjÛ™¼W’z®6iLSL–\Æ\Ñnš\Ù.\çf\ÂÆƒ¨‘\âll\Ù\ì;|b¨^aknÔ™Ÿ.c\ÃP:þB\í\Zj=A©eŠ\ã*—!ùa7\n’D/…\ê!÷ØŒƒŠ½\"šø¯_\ØÝ¬†8|m²û¤\é\Ðò<º­…\Õý\Õ\åºFÚÅ©\é´røKB\ÂBv®\Ã¶ø\Î\Þþ´l\ÞG#†¦\ë77	ŸØ®-p¥Ã¥Á/J\ÙAŠE[hˆx°@N^s“\èÙ˜…Vö•-©¨ZIë¿Š\ìuI¬t¯Ü’º\"¢Mqlb(¡wb\Í\åv\Ûn\Ã=ö£#€uf\ã0µ*?º<c\ÏpóX§MB\Ûý9¬ß¯2E\å\ëGoO”¶\á\ÎK·®}\É\Ä\á\è\ß;\Òˆ;T\ä\\\'yº¹\Ñb~ƒ@\Äú[\Ý[Gym\0œ•kwn\\‘2swSž\Ýò3\é°>\äß…uFŠŒ\Ë\é\É/6ò\ÛÌ¾2\Ú` ‚\ÈABG®	yYfž\×\í0½‡‡n4ù´¸˜(B\áce\Ã/¾}û÷¬/n½ŽôHl\Ä	¥UiESBP…Z\çO´ºpóÛ£8\Ø>0\Ã\ê7©„·Rc\î\à¹&§+ð‘»/c\'œ\Ï59Š¯³\Ò\×*W\Æ7Od/4\åGš\ÜoF=qž\Ä|wüª\ÔÈ˜+.>L™\éj7,6‘}s|÷+\Õ1:\ÅÎ¢\Ö0…·\0Œ¢–;\à{V‡46^¥b\àL[u½¨‰\íº¶3^ô³\ÕX®Vå„„Œù\ß<Ç·/b3¶j#X@se…ü@3~§UOL6\çA]º{6g¨\Æ\0vúúUŒ¥P\Ù8œñ»\×w‚gvù”i\Ïp\'iBÄ–’\î\ã\ËÍ€\0|’1’0qT¾õ¥¡—Ù“3h=>úª—ZµÕ® ñ\ÅÒ‡*‚ñü\Ø\Ê¶ù\0ú÷«$¤\Ô\ÅTeR\Ö\ß\Ãö^\Ãvi\åµ4¯q†’0»(ôS\î}\É&³<‰²ô8JOÿ\0WS¹Z:.Ÿû–ý1\íü”ŠŒ\Å7Ù©p]\í,--µ¼\nŽ\ÃýØ’w5’®\ÊLgºš„\ÄP…4!EEEAÞ„,\æ£\Â\Zu\Í\Ë\\CqH\ç.b­Ÿ€Â˜*!s\êöu;8O_ª\íi\Ã–\ãge÷Æ‘\ÌoÖ ¼”\Êx*l\Ó\áehè–¤c«wõºsþ&£9Löfsó)}\ç	\Ú\Î2{\Í\n¶>«\Êß­XT!\"¦Ž¿¨ýŠû\ÑøR\ÃOºñrF²\Ü\ç*\ä±\åù\'šP‘\nhv}*O\Ï|~kAK[‘BBBBÿ\Ù'),(4,'Chelsea FC',7,'2021-02-06','Chelsea FC',_binary 'ÿ\Øÿ\à\0JFIF\0\0\0\0\0\0ÿ\Û\0„\0	( \Z&!1!%)+... 383,7(-.+\n\n\n\r\Z-% %--+----0---+-------------.0-+-/---/+---+-----+--++ÿÀ\0\0\É\0û\"\0ÿ\Ä\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0E\0\0\0\0\0!1A\"Qa2qBR‘¡±ð#3bÁ\Â\Ñ$Crs‚’²ñ4St\Ò\ácdÿ\Ä\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0ÿ\Ä\0<\0\0\0\0\0\0!1AQa\"2q‘¡\ÑðÁB‚±\áñ#Rbr’\Ò3c¢²\ÂSÿ\Ú\0\0\0?\0òºjT«¢²¥J•*Š%OMR¨¢T€¤K@A*X©SV„À§\Å%º£J®¥¦Œ¤b«ä²’«bŸM¥Ic¡•	U´\Ó\é£\è¦\ÑVÈŒ â£Š9Jb•R\Õ1MŠ>ŠE*¹J*¹\ÄQJ\ÔH¡\n(STÈ¨\â«¨Ò§¦ ŠT©R¨¢T³J•E¦§¦ ¢zqQ©\n!D±S˜T\ÂU\Â	€¢*\ÒGD¦6œ †±Ñ’:4QQ»ª\Ò\Ú*„ ÷H\á\Í]¶‹#X\á\Ã`õ¨i€”\\³^”cÙ­-ÀmöÈ¢\Ç	‘Gu\Èyx˜gÔQ\åŒfb`q*a¼tH Ú¶g.ß”\Z=]\ãp$\Ñ\á\ì\Õ\È\\?Þük	ø–QU§°ƒø-C\\ýƒ\áŠæ»ºeŠº%\ì¥\×EŽO\ìÈŸÅŠ¯7ž/\Ö[H¾¡u¨÷•\È\Æc°u\rª\Òxf\á2ƒ°õ›«ý9Š„c«\ìW\Z•½¾O ­y¥\"VqŠ \ÉZsAU\Ú*°¦!XA’¢R®˜¨m%\ÔÕ¥R+P\"­²PYid\"«‘MD\" iD+\ZT©PE*T©TQ5*jTN*B£R¬ˆ‹ECAZ°´Ö‰U(ƒ£CCE¢ \Ål¤\Òa]*Â¦EB\Ì\êÚ¯¤G!K»lª9“û½ô\ç=¬¸\Ä%\å$Â¬’\Ü\íÂµ‡yTHH·‹þ£ó#öS™û¾51o±\Õ \Ý\rôó†üMùÛ®—e-£¾»\î\ï%}Ô²\0@F\å?gmöò®UlMJ\Ìù”¥¬j$»ú\Zm\Ìûn\ZEÖ¦\á\Ø\ÇC\î\î;Hß\ï(¼2;mŒp§O’Q˜\Ô}mÀ¤U·¼÷Œa†e„¨Õ\ÕBò\ÛH\ÏQ[]Ž\àò\Û=Õ´±\ê¶-˜\ä:|`\×\Ì\ìG\Ä\Z\Ë\á\nm¸¨‰¾–¨Áú\ÊFTý\Ë\\\áN‰.pœ‡;¤cS­š@Ù q	-%\Â\00\Â\Ã\Êç¼’¹®\ÒpT·_\ê\\NKD3©I$žG\ãVx/f#›‡\Ëx\Ò:¼BL Ó¡´(#9\ë]lmò\ÓGX,vùö˜\ç\Æ1Î§\Ø\ëv~<h5;÷ªÛ±@\0Þ´~\ÓTP\ë^v#H;\r4Ð©‘¹ô÷#\Åp¶ðŒjñ^u\Ò\Ç\Ùn «Þ‡\0\ãP‡¼%ˆ\Ç-$i\ÍR\á(\Ù\n\Ê\ÃR®P“q\Åwª\ê\'\ên\íò5c\Ù|o\ÏlW\Æ\â³¤_Xwˆ;X\ß\ë\0®‹`A\åe\æws¤ƒú]ºKû`h™|üCÂªŒ	³—Q\ç\ÜK\'¹[‘ü\ï]føOÎ®õ¸\ÕG½m†\É\È[þ\Ñp\ëSn\ím<-ƒV\Êr7Lòø}”¢\ÆS~Z2Ã¾^“\æÃµ\ÅÙ”\Þ‹\Û5\0p\çc\ã\ë+Î¦1Ô¤ƒš°\Ã\æ=iž˜®\Â\æxLb;¥2}IG\ë£ý¬õ­ežÑR0kv\Ý.²ÿ\0²|›óçŽ…Y\å\×nW\Ùwôž<Zo\ÂE\ÖZ´€nv^#´}E»sU\åJÙ½+ôFßf\Êmh›¤´¬\É«¸­	…R–«Q‰¡UqB4f¡\Z\Âð¬ iªdT\r,«%MšzÒ¥MD\"¤*B («MkeE%tZ‚Š±­”¨‚„#D”s¡¡©\ë\Æõ½´\á. ƒ*\ÆH\ä* \æ\Äþy\×Nò|\Õ{´:\îXbIG\Ðÿ\0\ëùþE>\ZŸ6‡¿où›…\Ä`óŠô½\çùz\Ð\àq\'…Ž—ú/\ë\ë\\g\Æ6¤\r&˜\á©<X\Ó`>Ó&@§ýü\ÇÅ ð\æG€<\×ykg\Ã\"ˆMf/g™K39\ZU†2A\Æ\ç«’µ‰\Zö\Þ±\Ã/{•|YT\' Á½ck\Å-\Ò)¦]D9eC\Æö\Ð\ã;V}\ÇŽ\Ú\Õøu¼\Â\æ\æ\åÔ¹Q´hö±œrÀ\Îkž\ÌCiƒó:\æ\ÎÍ¦]Î¼?+X3!wWM£Š¿Ú¾\"[\è&\Ò\Ê\ÂA¼\Ï1£©}	ªüNI¯n!ž\ÚÙ£0Dô°r2£|g¯­\\\ìÿ\0e ¶\Ò\×R\'zq¥Y”`ž€·]‡\Û]´Q…P\0ò²f3\Ð½È‚A·W\Æ\î;Y`¯·§s—\'ÿ\0\â3&¼Ð§ ¢A¤ô\È\Ða\ìC¢…Žòh\Ôo¥$e\ë\È\n\íªŸ\âA–gƒ®\ä“\ä\0Üž|¨\"IðõT\Ï\ßz\ç¿ø¬–Au#¼~\Ë;jo¼Sñƒ}Ý‘\á\ÒF	A¥\Ø{\É }µ\ÔE e¤2°\ÜwQ*et‚¦\Ä>„ÿ\0v¤”\ÊÞ£\Éq\\\n\å»[À\â\Æþ”\Ô\ç\é/\Ö\0rü+™\í/\Z‘œC(Vž/2—o,\Ã\î¯C\â\Ü+…!—Kta\Ì?OxÁ®6>/\ri%Ò“köde\Õ\"­«\ã¿\ç-¡P\ÍA.Ûq·[mOEÃ€¹U\Ì¶6ú{ß¼€\Ø\Ù\ç=õ\ßôx@\ÔAýiQ\ä¿Dc©û+*n4¥š ™³$¯rz¦vo\ír?œ\×k\Çx\Ñÿ\0…›-\ÈxO™ ŸC¤½kË®þ\ÔÇš\âF€\r^G1b\È:Cû²u÷ù ñ«3n\ÊU»\ËywŽO\ào\Ú~=2$’º»Õ­§\Þv\ÏX¤ú.¾[\ãóš\å¯\í\Þ	\Z	}¸\Î3Ñ—\è°ô\"´\á+½®4+pñ7Iþ l\î\çh\ë.¥6\Ç\Ì`±\Ôp>‡o\r•i«Hh¯@aZ*’R¡¨fŠâ¡¦±¹ª\Èd\ÔjÆŠ	¢.Š*Tøª¨šš•8¢N*kPZ\"ÖŠH£F*\ä@Š¯lkB5\Ód\"T«\\\ÌK0ú¨Á–Ryh^‡\Þ~\ì\Ò\Ð1¿\ßVN\"³\Ûg»“\'Ï¸C°÷g\îcXþ%]Â˜¥LÃžC\á2\\~\ëˆ\æm&t³8X_·€\ï0¡{\Å{\é\ßÃ“°\èª9O÷¨ƒA‹ƒÜºw‰k3FFCˆ¤*W\Ì7¢ª\Ç1^Go.”\Ê-¦ÖŠt\Ä\Ø°%Ä¸\æ&\ë£\áñµÃ¬\Ô\Ä\àd¨õ¯b\à¼,mYÂ†•\"g\'«¤\ãßµ`|•p ±¹ü\éþÀý¤ù\nôV;ƒ¶:\Z\àb«üú–\ê4\ØlN\îÿ\0£¤:\Ö\Ð\ÆdÎ¾ž¼\íµü:\Â\Ê;µ¸¹ºº\ÅÂ¶V#sg¨ô\è\0\åö®\ïä¿‰<I±qo&˜\Üÿ\0\Ó?G>‡\î t®/µ|:\Ú;·6÷w\ÓF¢Vh\Û8‚T.\ÛøC`ü=\'±\\.-”À\âEq«X —\'™\'\Ï`1\Ó­Xª€\Ó\Z\ßI\ï\Þ\ëcnº:ñ¾\ÝñK\Îø\Û\ÜÈ„)\Ô5Pƒ+¶	\Z¹7Zô\Ú\Þ\Ïº\Íl\ê…$\Zƒ€C£1ƒ\Ï|·\Û\ß^-y$\Ò4²¾¹’[\ÌúyJ®œœ\Öú\Ê5\Õp.=ymk®;«s\n³(·”–•n¨ºo§\Ý]·b;R×Š\É2™0r ˆ\ÝNqŒ“†\Ø\íñóÇ‘p\Ù!YTÜ‚\Ñ–\íŽ:³ŽU\ë6ü$\Ù\ÆZ\ÚH\Ø+K ”¼Y€°Œc­LfV¬“¡ŸŸ5l;s˜\Ì\0\æ»\Z\rÅºÈ¥\\d\Z\ã\×\å\Z\Ô0^\îm»Ò©¸ú\Úsœ}þ•\Ø\ÛÌ®ª\èÁ‘\Ô2°\ä\ÊwV:”Hö\ØñE®½Šò~\×vnKv\ÂmÙµ…ú*\çl\Ó\Ëò+•’+\ß8…¢\ËFW’ñ¾\Ý;!ú\'o2:\Z\ÝðüI“E\çKƒ¹\Ï-sr72•\\D8{ý|—5S\í¿j.óZ\á$ó{sÈŸ\ìŸ\â£\Ç\Ã\æ|˜¡’E¨\Ìò\Èý(ü0h›º™p²ƒˆÃ£m†:só5§\Øg\ÍgZŸHwu›÷›\"ûÁ\Ôp\î\ÙNŽ·¡\î>K†5•¡=§t\ïnbr™<\Ècñ?\Z­ ­¿5hsn\r\ÇaU\È\ábª²PôÑœPÚ²\ÔU„5Rj¤¸ £OLiUQ§Ô¨T…\Z\"šsVí–´¢ZÌ†LU¸®\rt˜\ÂE”’¹³§\0nvó°­\î\å\Zõ\"`¬¶–¬B0%ãˆ¸\È\Æt’:„\"°ø{¸…Y“\ì\'ð¢^_º^¼ñœ:L\Ø\'p@%#ª‘G‘5\Ì\ÄSuL``1–›ˆ\íy\0»\Åkm@)8H\Ì-\Ä	$w\Ø-ñv\åõ³6¢Kw…Ž°@\ÉÄ€Œ#Ž‚¡}\Â~qwm\á\Ë\Ü%P6‘\ãv\É\ÉÝ€\nOR	\æh\Ú\\kiU\Ûsmv\Ý@\Öw>h\Ça’wÕ·òk1¹\â]\ã¨Qa:c@K¨\îwRI;’\Äõ®-&\'\×\ÔwF\ÙEÆ®! Û3Ü»øŽ\Ö6˜’\Ü@\0H\ï\Òƒn½Ž\Â\ØE\ZÆ¼‘Bû\ÏSñ95f•*³Z\Z!º\Â$“%x—o¸t\Éy(1³,\Ók‚¶$ÀU$	+\Ë$Œõ¬nÇ®­	L\ÑoâŒ€WWª0 \\f½?\åH\á\çÿ\0×ôUo”\Î^40Y«¶­\î¢@\æ62¤zü6Ò§ˆ\Ö<?¦öJs5!q|g´·P©šMA3€®\ìIb|½õ\ÎWo¬DaBL²Œeôþ­dòV>\Ø\Æ7ª\0\Ö\Úa ttK|\Í× üŸq+$·•.\Ý#!‹ÿ\0Ö©ú\ØÁ\ZG\ï¯H6p¼2@t¸\Ù*8Ïš\ì6=+\ÆûÙ}¯ô\Åde\0]E\\“¶ù*\è»}\Äe·H\ìP\éŒF¤\à\ìÀ–\n¤Ÿ¢üIß•s«Rk«C\r\Í\Ï+\'4œ·\Ñeö\Öön;DFZ\æ“\'pMð<ýØ¯I\ì}³\Åj‘¿4P–®dv@øWšvw‹YZ¸2	\'”\ìóª®•˜Œ1O™\ÆO\Ý^¿a<rD	\r¨e#‘SU\Ä\ËZ\Ö\0CF\çt[“7Vk‡\íÍˆ2B\Û(’EˆŸ ÍŒü?Š»Š\æ»ym®ÍŽ7O¨Ç‹økb×±\ãgc\äO|+e\Ìxƒ\ê<\ÂóË»²\Ï\ÈB\'ÐŒd\áW\04g\ß\Ì\äŸ:}P,…‹<r¬A\ÎK\ÜHB’I,‹#\È?À\'\ã3jš\'Yq¼‘\èñò\Ø8\Ã\ï»\r†\0\åYœGˆ	\0DN\î%$…\ÎY›\0jc“€\0\Û\0y-Á|;J¸{ô\Zž?©\ä»8ÿ\0‰\áka~]0f\Ð#«\ïI3\nk“úB\Ê\Ä	\'øÇ„ýÁkA[½¦o\èÖ²u\r,_~GúkyMt>\Â\Ú?„¹\Íq\È\Ç\ÄT—O>\"T\Z«=\ÛÖ„æ´¸]e%\êÔœÐ%\Ê%OQ§¥•\ZB•*Dâˆ´1SZ}=QV\"x-RŠ­\Æ+¯BÁE€ÿ\0\ÍÁý\áÿ\0Iª\×ÿ\0­“ûoþ£G\á-¦\âò™GÁ›O\ï§\âp7Î¤FY§eU\ÉfðöŠ\å¾\ßw:mòsÿ\0\È&Ÿô>ñü¢¢kÑ¾DÀùÔžzðý\×(½œoyU€:0\í¤°\Ê… ó\é\ëÎº’¤k~ b•t³¦y‚\rJ#b2\Øø*Í\ÄÒ­‡p¦\àH,›ÿ\0¸\ßv”\æ\á«Rs]Q„Dz\'\×\Ý\Âö\ÚT©W1QyO\Êk­š\æŒ™\Z\Êä¼˜ÀRFU<ò\ßl{\ë’\íGm\ç»8f\ÄyÈ…r\"Zº¹õ?V¯\Êgd;‰\Ö[e\Ê\Ý90i—o\n*ŽX9\É\É\ÎkJ?’]Pd\\°”¨ ½\Ù>‰Œ\àúµu\ì=6±\Ç×µ+¦I\ÍayÂ¦]Ý‚ª\ròÇ™maÁ ©\ç‘\Ì{ö\å^…k\Â-¸8\×9ù\Å\Û/†1…m<¶Á=\Úy±\É;\ãÓˆ\ã\\Ue\î;´Y$9+\Ó\Zô\å\ç\æyš\ÐÊ¿0œ££±\â}9ª@¹]?\É|\åx€\0\ãTL˜óñ\'ò5\Ûü¦p<x\Æd€C\ëE\Ï?\á\Üû‹WŒð.4ö\×1\ÜvúŠù©Ù€ø^÷a\Û¢-\Ò\0W%\éy‚‡r}Ù¬˜¦½•EF…zp[‘\à=œ¶ºá¥¡\\\Ý  Œ\à‰€\ÉF\è\è|ˆ5\Úv[†hµh\0j\è_›\ã\Ó\'\nó\Þ\Êq1›‚¶ó\ëðrfCŽ„ýªõ\ÚÏ‰\Ì”›—¢»$«#µ?ò’ÿ\0vß­z\æ{{t\ÊM÷`W\íüH¬u¶8Àñ0<\Ó\Öôºñ›¦Þ…š¼œ1™LŽ\Â5$\ÎIl‚y\0H\Øg~}3C¼°dP\Þ\Üm\É\Æ@\ÎX`ƒ¸\ÝßŠô£E\Ï,¸o\ï’Oìµ™HU,9t˜·» vˆÿ\0@·ÿ\0ºoô5sºN\ÓZZ§Vyeø\r¿ˆW6A¬8\"Kj¾eO\'ôF¶­\Ê\ßÁA\ã=(,(\ì\Ç\é@5 \Î\é(lµ(­CjS”C4©\éRÊ‰SR§ª…Š*PEiô\Ì»aZû«2«\ÑK]Ô²»BÛ»³UZ{K‡õ¼U\Ùa_ø‚I¹[ˆ{\È\È\è\Í\0‘¨\í°9+Ï‘\Â7ŒM[ºý-’?Òµs	þ\í± ÿ\0¤}µ\È\Å\Ó\"½7¸\ÙÙ©\Ã<ÿ\0&÷–š\ngrpûºñ\Øð]u´\ÑwcF­¨\ß82bM¾2\í!Ó­y±\Ò\Õ[\å‚\ê\Õ\Ãs\ÔÜœÜˆÁÕ¾C‰	\ç¶75\Î\'˜.“¡†Ä³ ggPB»\í2‚Fù\'Pc½f\É;;f,\ÍÍ˜’O\Ä\Ö|/Á‹\\\áU\Â2–\Úg¤\"yq÷²\è\ãþ.\Ú\ì\ËM¦I3_a{’&\Ö\0Eú?SÁ(e¼˜=Æ‹\\\'\ÉiÅ¸‰\Ï\éb\ÛÕ‡Ÿ\ïû|«»¬m\Î%¯\ëÑ¬r\Üq\×1Àm6\ì\\_\Ê\ël?\ïG\î®\Ä\ì<#\Ør‚¼·\åW„¼—–\î±\Ê\ë\"¤g@,ž	;…:NX\ã\ì5\é\èø@\ÌG²	nC–\çÒ´U\01†uñUUó_ho\æ–y\Z|‰‰pr®E}\0öq\Ów‚v2\î\é‘\"ª6\ê\\°.¾jª¤\ã\Ô\â‹ò‰\Ä\Ò{\éž2\nkaÈ„ELC‚}Ø¯Xù8’ah‘\\B\"tUPÀ’Î€au8F\Æ6\Éør*õ\ÝN“K@ù[a\îƒAq•\á7IºXh’7\äs\áu<ˆô#•z5½¯¼ˆMó¥á“°ý$}\êC‰:\à?€ù\äÎºŽ\Ýö>\ÒKµ=\Ü\Ñ\Ä\Ò6\0)6…$ljûA\Åya¸h›ˆ*‘•‹T¸\èYHT\æ`\ÃU5[Z™©$‹\Ç\á\ÌO‚0AºõŽ\Îv.+c­X\È\Ì?X\ÇS²\ìq\È¹•\ØP J’qÌ\É>tZ\å9\Å\Æ\\d¦ò	W˜|¬ñ]\Ò\ÝO/÷óÿ\0\Ã\ì5\è¼B\éb¤s€ªI÷W\Ïüw‰›‹‡˜œ\äœg\'ñ\É8õ¦\à\é|\Ú\àlÞ‘ÿ\0Ïû\Zx¨\çei;›¯•»\Â\ê-\Ê!#´h\Ñ÷Š\Ú<a›V•j\Ó\ÍNû\Õ>.c)3+4¬D\0Û¸e(É¹]\à…\ÛkË‰¼c¤Œ’5(`„\ìt\ç–F\Çù€E\Î#O:ÀŠ?\Òhª®\ä\àù\ì	9\';š/øi\Ã8\âá‘’ý\æ×ŽÓ¡3Üº\Îø«kP4ZÓÀ0\é—a=€I½¯OµCô±Cÿ\0F\ÝTÿ\0xÛ·\Üük\rÖ¬]^÷²\É71#–a9(ÿ\0(VI+^JTZ\×õ¢Oi¹ó%sj¹24@uª\Î*\Ë\ïU^´:\Ë)6(/Rj4¢¨‘¦§¦ª¨•5=*\n$*`\Ð\è‹WjŠjj\Ì5]EX‰±[©QW£]¼«K‚\\*\Èc“õWÜ¿¡9\Ð~ÓñV0˜ô©\ç#­h\Ä`Ùˆ \êN´wb9ƒq\Ì+1\åŽ{óE½µh¤h\ß\ÚCx\è}\Ä`üj½n97Pj\çulº\\u–\ÉÇ™\Ï\ÌV*Œ\à\0I\'\0\r\É\'­c\Âb\rf\Ã\ìö˜x\Øy\Ê\á\ÒooyF­0\Ã\Ñ\Ð\é\Ù\ê4=‹C€qy-gY£\'*F@úKüÿ\0=M}\Ù\Î9\Ü\"H\ØõS\îü\ã•y\Ç`{«%’\æqoy.§HŸht\"\ê1»òYßŸLy\×5\Ù\Þ\ÐKi(x_lø—;ýþ=k\"›qE\Õh]Í±8m}\'øN„1b.Ó”¿C§/{µ\Ð=®F67=¤[y[|«\'#\ç\Ý^?\â%‘šPÎ¨dB@]:‹\Ø\\Q¿Rz\çeûqov Ë•lŸ\Ýøy]?\Í\Ó\Ã\ág\Ð{ü¶\à+6iK@¾ó ƒ\Zh\ã\Ïk]\Ó;¯\ì\Ïc.e¸V–=1¤§VJ–‘£r\n€:\\díŒœ«\ÛoÁk#F¡ž@»\áT·\ÞE^HÀ$‚\Ç\'\ÔÓ°\ÈÁ\Ü±BµwUp.\Ù@\0^\ÄûC\Æ.cQ\'y\Ý\\øU «  œ\rD\îp@\'•_ù%²u¼vx\ÙT&‚\ÅX ‘r¤Ÿ¥±\ÛÒ½|XÇŒh\ÎF\Ãow–\Ç\êx\íQNU\0\ë°\0I$\æI;ÓŸ‹\ÍL°0	\áÚªVjÀ“€:\ÕKþ#*ZY\03’G/3\ä=k\Ëû_\ÛÖ›T6¹\ÆM\Ãû>^ÿ\0³Î±\ÓeJ\ÏùtD»É¿\Ôv\ì\ë†\âä†Œ\Î\Ó\Ìö{„O”n\Ôw\Ä\ÚÀ\Þ8v\èO\Õ~¿gyœŒP\í\Èô¯@\ìe\"¸ˆ\Íp]ñ(„\Å*\Énõ“j\Ü\Ï¦õ\Ëv¯=œ¡Y–Xe\á•H=\äYØœr;Š\í`Ÿ‡¤N„—jI˜ï¿€\Ð\0%!Á\î\é8p÷\ã\ÅgE8>ÿ\0*Ó¿“¸³#ú\Û\ß\0E°ö\Ç8ÿ\0ò¬\îb$bò0B5\ÈÞzŸ\ÏJºi\ä30\ÆF”_©öWñ>òj¸—|ú\ã:­!\ÏüX\Îû8ò\0¸W§û¶g:›©údª\Å@\É\çO ¡V÷BT©9ò 9©¹ ±¬u\n’™ª(„Ši$¡*8¨\ÔóMT*(šzT¨\"©­C4«ƒ\n+\nhŠj°j*\Z\ÕN­\ÔVT\Ñ\ãj¯YŽºMt‹ Uû\ÐD¨\Úd^^L:©F´æ„‚/¬òxÇµƒ}@uS¿\ç g\ÛFja¿AE‚I‚X[KU—\ê°\ê+—‹\Ã;\çQŒ\àAªö\î\×}\rò“¡ÀÞ•PG\è|A\â>£u¿Øž \×|@­\ë´\é&»ž\á\èæºŒ~t¶À\å°ò­®7\Â./l\ÃOg½\ä—J–Ð¢„—\æøñ	w\ä\0\'\'–=kŽ’\Í\'=\å©\în\Ä\Ðg#\éDßŸ‡[}š\í<¶·«5\ã\Í.#xYf–$|n¡\Ï0@8\ê+5\æ¥d\Â!Í -p\Þ\áÇªo	\ç¡gB4>„p=û*œk²÷V:db¤k\Ñ\ÞDú»¹q\rŒlV—g¾Pn\àI\ït;möö\ï«\ãˆÛ¬1ðþ,—77±\Î÷2F$0ÜŒyt;Öý½µ÷ù˜·Œ$:Œ\×)\à–]`\éðûl»úSPT‰§0	ž«ƒg]¢M„8I@ƒ£–¢|üamðß”\ëw¥Fº\í\áøi\ÔkEþP\ìB\ê2Ÿv—\ï\ç}§\ì\ÒÁ%º[\Ýg;#º@)Ô»9ûW¶\ì›\Í\Ä%\á\æ^\í¢F~ð©`ÁtclŽa\êƒ…,ù‚«À‚c¢lS«	×™´1\\\ï\ÍGŸo\Û\Üü«\Ú.Ñ£Iþaø®ÿ\0ms\\_\åVw[ ŒyŸýdý„W1Á;>. ¼—YW³‡½T\0b_kbz{5‡	\Z†¯gP\Õýœ\ï÷S\é\à0Ä¹¤¹\ÄE‰Dˆ\Ê=‡˜D\Õpˆ\0{\æJ\Øf»»•5—\"i«¾¥ƒ[4\ç¦y\Ö÷\à\Ñ-\ä¼>ø˜§\Ó\Ý\Ã8be\æ\ê\Øû+´ü*\æ\æu\î\'\ÑÁ\Þ(\ÛZ:!Š5>`®E`q¾\Õ\ÛOlö½ýòÀ\Ö\æw%c\n	&\åŸ!\å“Keg\Ô`§H¤hÏ²II°\Ô^d€£š\Ì\ã~\'ß³Øµø\Í\ÍÕ’\Å(\Þ,\Æ\ÎT\È\îøº®VB¦Ù®>ö\ên#q¨…Š8\×J¨†\Ö\È\Î\çÓ¢³–p&º™\Ö#31_«nž|©]\ß\åp\'wl§uþ²Sõœþ\ïöd±\æ–PH.û\Çn\à\ÝDÃ¡‘7:f©fð\ÝÞƒŸ„”.1p\n¬0‚-\ç=f“ë·§—ûbj¼\ì1¶\êzyU\ãò\å[p\ÔA™<I:’u\'‰\'Sô\0,•*ºO\è8A\nJ¨\â¬È¤sª\îi…\ê¨\rC&‰%Ò‹‘	C5#P4—\"Ÿ4©©ñUQ#JŸ\ÔJšž–*(h\Ñ\ÐEM9†(\êkO‡ã™¬•5j	«[*Z¢Ùž\\\ì(±xWnf¨E \ÆO:Ÿ\Î)€Í’ã‚±0\É\n»6s¨d|Á_{À\ãE\Ô}ú¨\ÚeÀ~?KóÎ³m%\ÆXó4Y%Â“\çYñ:u\È\Ì.4p³<.;&;¤Sªöi¡\ÔjhE‹…\ä÷–7!\Ùw¨\Çpž\î^»\íD\á|R\æ\ÂY%0iQ£Ê®U•Ž[¤nOPj“*\è\å¹9\ÏQŠ¹g}:¨\Ó;O&ÃŒyx²k-Jx¦4ƒ–£Mº]G74°w§Š´ŽÅ§•Çÿ\0(W—¶®\×\à\ÛÄ¯·\Í`UÈŠ\ß-¤\çQÁa\Ìc5£na^\"/\Ìd\Úü\ÚDRž)|>5$ò\Âõ\ßjÄŠ–|Ik˜<\Êa\Çz\Ïc/§\æu\ßS~•Ñ¾\Â\ße\í6û\Îžš’L¦7ÿ\0 \ïiúO¸Wøgi­md˜\Û\ÛM$76\æ	\"–DX±%ƒ \Ø`\ã—Z\ç/eIe&\Þ\åN4À¬\ÒÀ\0\îFNNÿ\0\Z\ÓECal Sœd\å¿p¥q\Æ.=•u…s\Ê4U\ÛãŸº›IÕ³M:&H\Õõ6\æžy[°\êª\ãN.ÿ\0ú\Â¯¹\ÑúG6ðó=\ã•OògŸ¼\n<b\Úú57Rgii€0½~ÿ\0}RŒ–p\Ò3H|Ø–Ç»<ªÛ°N)Î¡^­±,uk: öºK\Ïqh;‚,”q\rhý\Û{\Ýs\Ü:¾EW¿’V“\\\Î\\\ÔrEJ½?\Z‹°ö—‘\æ)¥ŸR\àóZ¬³cn†µQk)41€\0-\0@„’\ç8ËŒ”\ì\ÚN\ÞÉ¡\È\ÝG*L\Ý:P™±WyE¤\ÍSsS\â„Mf%¡š›P\Ø\Ò\ÉQD\ÓS\â•QY )R¥QDæš•*\n$)R¥EE*B£R¢*@\Ñcj©W…Uyf©‰3TQJ{j!K½¥óŒ°+;¾5(ŸzoÌ²‘n\æE#n‚‰c‚±VLŸh$ûRs@„\n³»üj,\ã¼Èª«-\Ë\â\Í	º\n\Ì\ÒøóûY§¹“|\Õ9X“Rw\Í\0ø «+5JYóT;Ê{Ns\ÄJŽò\à\æ…#\ÐZJ‡yYË‘\n\ÂM\çPg\ÍV-L^$\"ˆ\í@-Iš¢j¤¨œš5=T¢š•*TJš•*Š)bšš•BPOŠ|zTi\êJ0ž•5*\nB•85R`‚zY¥J¬‚Y©©¡\Ô\ÅQz8Ÿjª•:2G\Ó7¡\nZ3e\Úz}µé–¨­²)zzcPj2„)—¨–¨T¨\"ŸU,\ÔiPQK5J•E¥OMUE*T\ÔõMJ‘¦¨¢ÿ\Ù');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','admin@scorezon.com','9960708090','Admin00','Admin@00',0,1,1,'jack'),(2,'Shantanu','Patil','shantanu@scorezone.com','9960708080','Shantanu01','Shantanu@01',1,1,2,'green'),(3,'Parth','Patil','parth@scorezone.com','9960708080','Parth02','Parth@02',2,1,3,'hrx'),(4,'Soham','Ghatpande','soham@scorezone.com','9960707070','Soham03','Soham@03',3,1,1,'john'),(5,'Amit','Patil','amit@scorezone.com','9960707060','Amit02','Amit@02',2,1,3,'salman'),(6,'Vijay','Sharma','vijay@scorezone.com','9960707050','Vijay02','Vijay@02',2,1,2,'orange'),(7,'Nilesh','Patil','nilesh@scorezone.com','9960707040','Nilesh02','Nilesh@02',2,1,2,'yellow');
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

-- Dump completed on 2023-03-03 18:38:23
