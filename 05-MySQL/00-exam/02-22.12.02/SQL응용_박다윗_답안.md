# 박다윗 SQL 응용

> 2022-12-01

# 문항1.
### 위 영화 관리 시스템의 ERD를 작성하고 그 결과 이미지를 제출하시오. 테이블 이름과 컬럼 이름은 직접 영문으로 정의해야 합니다.
<p align="center"><img src="./Movie Management System ERD.png" width="600px" alt="실행결과의 스크린샷"></p>
<div style="page-break-after: always;"></div>

# 문항2.
### 문제 1의 ERD에 대한 물리 저장소를 생성하기 위한 DDL을 작성하시오.
```
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `MovieManagementSystem` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `MovieManagementSystem`.`Movie` (
  `movieCodeNum` INT(11) NOT NULL AUTO_INCREMENT COMMENT '영화코드번호',
  `title` VARCHAR(45) NOT NULL COMMENT '제목',
  `yearOfmanufacture` YEAR NULL DEFAULT NULL COMMENT '제작년도',
  `productionCountry` VARCHAR(45) NULL DEFAULT NULL COMMENT '제작국가',
  `runningTime` TIME NOT NULL COMMENT '상영시간',
  `openingDate` DATE NOT NULL COMMENT '개봉일자',
  `producer` VARCHAR(100) NULL DEFAULT NULL COMMENT '제작사',
  `distributor` VARCHAR(100) NULL DEFAULT NULL COMMENT '배급사',
  `Director_directorNum` INT(11) NOT NULL COMMENT '감독 등록 번호 외래키',
  `Actor_actorNum` INT(11) NOT NULL COMMENT '배우 번호 외래키',
  PRIMARY KEY (`movieCodeNum`),
  INDEX `fk_Movie_Director1_idx` (`Director_directorNum` ASC) VISIBLE,
  INDEX `fk_Movie_Actor1_idx` (`Actor_actorNum` ASC) VISIBLE,
  CONSTRAINT `fk_Movie_Director1`
    FOREIGN KEY (`Director_directorNum`)
    REFERENCES `MovieManagementSystem`.`Director` (`directorNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Movie_Actor1`
    FOREIGN KEY (`Actor_actorNum`)
    REFERENCES `MovieManagementSystem`.`Actor` (`actorNum`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '영화 테이블';

CREATE TABLE IF NOT EXISTS `MovieManagementSystem`.`Actor` (
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

CREATE TABLE IF NOT EXISTS `MovieManagementSystem`.`Director` (
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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```
<div style="page-break-after: always;"></div>

# 문항3.
### 문제 1의 ERD에 대한 테이블 명세서를 작성하시오. 작성 양식은 수업시간에 소개한 표 형식을 기본으로 하되 본인이 양식을 재구성 해도 좋습니다.
<p align="center"><img src="./Movie Management System 테이블 명세서.png" width="1000px" alt="실행결과의 스크린샷"></p>
<div style="page-break-after: always;"></div>

# 문항4.
### 문제 1의 스키마를 참조하여 다음 정보를 출력하기 위한 SQL문을 작성하시오. 조회에 필요한 데이터는 본인이 직접 가상의 데이터를 입력해야 합니다.
### 1. 2020년에 제작된 영화의 제목, 제작국가, 상영시간, 제작사를 출력하시오.
<p align="center"><img src="./1.png" width="1000px" alt="실행결과의 스크린샷"></p>

### 2. 현재 날짜를 기준으로 최근 3년 안에 제작된 영화의 제목, 제작국가, 개봉일, 제작사, 배급사를 출력하시오.
<p align="center"><img src="./2.png" width="1000px" alt="실행결과의 스크린샷"></p>

### 3. 이름이 ‘명감독’인 감독이 촬영한 영화의 제목을 출력하시오.
<p align="center"><img src="./3.png" width="1000px" alt="실행결과의 스크린샷"></p>

### 4. 감독이 직접 배우로 출현한 영화의 제목과, 제작국가, 상영시간을 출력하시오. (이름과 생년월일이 같으면 동일인으로 인정)
<p align="center"><img src="./4.png" width="1000px" alt="실행결과의 스크린샷"></p>