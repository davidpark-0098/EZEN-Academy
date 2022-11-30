# 박다윗 SQL 응용

> 2022-12-02

# 문제1.
### ERD
<p align="center"><img src="./Movie Management System ERD.png" width="600px" alt="실행결과의 스크린샷"></p>
<div style="page-break-after: always;"></div>

# 문제2.
### DDL
```
-- MySQL Workbench Synchronization
-- Generated: 2022-11-29 19:07
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: d

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `Movie Management System` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `Movie Management System`.`Movie` (
  `movieCodeNum` INT(11) NOT NULL AUTO_INCREMENT COMMENT '영화코드번호',
  `title` VARCHAR(45) NOT NULL COMMENT '제목',
  `yearOfmanufacture` YEAR NULL DEFAULT NULL COMMENT '제작년도',
  `productionCountry` VARCHAR(45) NULL DEFAULT NULL COMMENT '제작국가',
  `runningTime` TIME NOT NULL COMMENT '상영시간',
  `openingDate` DATE NOT NULL COMMENT '개봉일자',
  `producer` VARCHAR(100) NULL DEFAULT NULL COMMENT '제작사',
  `distributor` VARCHAR(100) NULL DEFAULT NULL COMMENT '배급사',
  PRIMARY KEY (`movieCodeNum`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '영화 테이블';

CREATE TABLE IF NOT EXISTS `Movie Management System`.`Actor` (
  `actorNum` INT(11) NOT NULL AUTO_INCREMENT COMMENT '배우번호',
  `birthdate` DATE NOT NULL COMMENT '생년월일',
  `name` VARCHAR(15) NOT NULL COMMENT '이름',
  `gender` ENUM('M', 'F') NOT NULL COMMENT '성별',
  `birthPlace` VARCHAR(150) NULL DEFAULT NULL COMMENT '출생지',
  `height` INT(11) NULL DEFAULT NULL COMMENT '키',
  `weight` INT(11) NULL DEFAULT NULL COMMENT '몸무게',
  `bloodType` VARCHAR(10) NULL DEFAULT NULL COMMENT '혈액형',
  PRIMARY KEY (`actorNum`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '배우 테이블';

CREATE TABLE IF NOT EXISTS `Movie Management System`.`Director` (
  `directorNum` INT(11) NOT NULL AUTO_INCREMENT COMMENT '등록번호',
  `name` VARCHAR(15) NOT NULL COMMENT '이름',
  `gender` ENUM('M', 'F') NOT NULL COMMENT '성별',
  `birthdate` DATE NOT NULL COMMENT '생년월일',
  `birthPlace` VARCHAR(150) NULL DEFAULT NULL COMMENT '출생지',
  `educationalHistory` VARCHAR(300) NULL DEFAULT NULL COMMENT '학력사항',
  PRIMARY KEY (`directorNum`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '감독 테이블';

CREATE TABLE IF NOT EXISTS `Movie Management System`.`Director_Movie` (
  `directorNum` INT(11) NOT NULL,
  `movieCodeNum` INT(11) NOT NULL,
  INDEX `movieCodeNum_idx` (`movieCodeNum` ASC) VISIBLE,
  CONSTRAINT `directorNum`
    FOREIGN KEY (`directorNum`)
    REFERENCES `Movie Management System`.`Director` (`directorNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `movieCodeNum`
    FOREIGN KEY (`movieCodeNum`)
    REFERENCES `Movie Management System`.`Movie` (`movieCodeNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '감독, 영화 참조키 테이블';

CREATE TABLE IF NOT EXISTS `Movie Management System`.`Actor_Movie` (
  `actorNum` INT(11) NOT NULL,
  `movieCodeNum` INT(11) NOT NULL,
  INDEX `movieCodeNum_idx` (`movieCodeNum` ASC) VISIBLE,
  CONSTRAINT `actorNum`
    FOREIGN KEY (`actorNum`)
    REFERENCES `Movie Management System`.`Actor` (`actorNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `movieCodeNum`
    FOREIGN KEY (`movieCodeNum`)
    REFERENCES `Movie Management System`.`Movie` (`movieCodeNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '배우, 영화 참조키 테이블';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
<div style="page-break-after: always;"></div>

# 문제3.

### Mind Map

<div style="page-break-after: always;"></div>

# 문제4.

### Code

<div style="page-break-after: always;"></div>

# 실행결과

<p align="center"><img src="./1.png" width="600px" alt="실행결과의 스크린샷"></p>
<p align="center"><img src="./2.png" width="600px" alt="실행결과의 스크린샷"></p>
<p align="center"><img src="./3.png" width="600px" alt="실행결과의 스크린샷"></p>
<!-- ![실행결과의 스크린샷](./1.png) -->
